import express from "express";
import Stripe from "stripe";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Donation from "./models/Donation.js";

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));


const app = express();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

app.use(cors());

/* ==============================
   STRIPE WEBHOOK
============================== */

app.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  async (req, res) => {
    const sig = req.headers["stripe-signature"];

    let event;

    try {
      event = stripe.webhooks.constructEvent(
        req.body,
        sig,
        process.env.STRIPE_WEBHOOK_SECRET
      );
    } catch (err) {
      console.log("⚠️ Webhook signature verification failed.", err.message);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    if (event.type === "checkout.session.completed") {

      const session = event.data.object;

      try {

        // Prevent duplicate webhook saves
        const existingDonation = await Donation.findOne({
          stripeSessionId: session.id
        });

        if (existingDonation) {
          console.log("⚠️ Duplicate webhook ignored");
          return res.json({ received: true });
        }

        const donation = new Donation({

          // Donor identity
          name: session.customer_details?.name,
          email: session.customer_details?.email,

          // Donation data
          amount: session.amount_total / 100,
          donationType: session.mode,
          currency: session.currency,

          // Stripe identifiers
          stripeSessionId: session.id,
          stripeCustomerId: session.customer,
          stripeSubscriptionId: session.subscription,

          paymentStatus: session.payment_status,

          // Location
          country: session.customer_details?.address?.country,
          city: session.customer_details?.address?.city,

          source: "website"

        });

        const savedDonation = await donation.save();

        console.log("🎉 Donation saved to database!");
        console.log(savedDonation);

      } catch (error) {
        console.error("❌ MongoDB save error:", error);
      }

    }



    res.json({ received: true });
  }
);

/* ==============================
   NORMAL JSON ROUTES
============================== */

app.use(express.json());

/* ==============================
   CREATE CHECKOUT SESSION
============================== */

app.post("/create-checkout-session", async (req, res) => {
  try {
    const { amount, donationType } = req.body;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: donationType === "monthly" ? "subscription" : "payment",

      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Shoova Donation",
            },
            unit_amount: amount * 100,
            recurring:
              donationType === "monthly"
                ? { interval: "month" }
                : undefined,
          },
          quantity: 1,
        },
      ],

      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/donate",
    });

    res.json({ url: session.url });

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Stripe session error" });
  }
});

app.get("/admin/dashboard", async (req, res) => {
  try {

    const totalRaised = await Donation.aggregate([
      { $group: { _id: null, total: { $sum: "$amount" } } }
    ]);

    const totalDonors = await Donation.distinct("email");

    const monthlyDonors = await Donation.countDocuments({
      donationType: "subscription"
    });

    const oneTimeDonors = await Donation.countDocuments({
      donationType: "payment"
    });

    const avgDonation = await Donation.aggregate([
      { $group: { _id: null, avg: { $avg: "$amount" } } }
    ]);

    const recentDonations = await Donation.find()
      .sort({ createdAt: -1 })
      .limit(10);

    const topDonors = await Donation.aggregate([
      {
        $group: {
          _id: "$email",
          total: { $sum: "$amount" }
        }
      },
      { $sort: { total: -1 } },
      { $limit: 5 }
    ]);

    res.json({
      totalRaised: totalRaised[0]?.total || 0,
      totalDonors: totalDonors.length,
      monthlyDonors,
      oneTimeDonors,
      averageDonation: avgDonation[0]?.avg || 0,
      recentDonations,
      topDonors
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Dashboard error" });
  }
});

app.get("/admin/donations", async (req, res) => {

  const donations = await Donation.find()
    .sort({ createdAt: -1 });

  res.json(donations);

});

app.get("/admin/donors", async (req, res) => {
  try {

    const donors = await Donation.aggregate([
      {
        $group: {
          _id: "$email",

          name: { $first: "$name" },
          email: { $first: "$email" },

          totalDonated: { $sum: "$amount" },
          donationCount: { $sum: 1 },

          lastDonation: { $max: "$createdAt" },

          country: { $first: "$country" }
        }
      },

      { $sort: { totalDonated: -1 } }

    ]);

    res.json(donors);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Donor fetch error" });
  }
});

app.get("/admin/analytics", async (req, res) => {
  try {

    /* =============================
       DONATIONS BY MONTH
    ============================= */

    const donationsByMonth = await Donation.aggregate([
      {
        $group: {
          _id: {
            year: { $year: "$createdAt" },
            month: { $month: "$createdAt" }
          },
          total: { $sum: "$amount" }
        }
      },
      { $sort: { "_id.year": 1, "_id.month": 1 } }
    ]);

    /* =============================
       DONATION TYPES
    ============================= */

    const donationTypes = await Donation.aggregate([
      {
        $group: {
          _id: "$donationType",
          total: { $sum: "$amount" }
        }
      }
    ]);

    /* =============================
       TOP DONORS
    ============================= */

    const topDonors = await Donation.aggregate([
      {
        $group: {
          _id: "$email",
          name: { $first: "$name" },
          totalDonated: { $sum: "$amount" },
          donationsCount: { $sum: 1 }
        }
      },
      { $sort: { totalDonated: -1 } },
      { $limit: 10 }
    ]);

    res.json({
      donationsByMonth,
      donationTypes,
      topDonors
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Analytics error" });
  }
});




app.listen(5000, () => console.log("Server running on port 5000"));
