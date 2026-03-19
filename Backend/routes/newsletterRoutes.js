import express from "express";
import Subscriber from "../models/subscriberModel.js";

const router = express.Router();

router.post("/subscribe", async (req, res) => {

  try {

    let { firstName, lastName, email, birthday, birthdayReminder } = req.body;

    if (!email) {
      return res.status(400).json({ success: false, message: "Email required" });
    }

    // normalize email
    email = email.toLowerCase().trim();

    const existing = await Subscriber.findOne({ email: email });
    console.log("EMAIL RECEIVED:", email);

    if (existing) {
      return res.json({
        success: false,
        message: "This email is already subscribed"
      });
    }

    const subscriber = await Subscriber.create({
      firstName,
      lastName,
      email,
      birthday,
      birthdayReminder
    });

    res.json({
      success: true,
      subscriber
    });

  } catch (error) {

    console.error("Newsletter error:", error);

    res.status(500).json({
      success: false,
      message: "Server error"
    });

  }

});
router.get("/unsubscribe", async (req, res) => {
  try {
    const { email } = req.query;

    if (!email) {
      return res.send("Invalid request");
    }

    await Subscriber.findOneAndUpdate(
      { email: email.toLowerCase() },
      { subscribed: false }
    );

    res.send(`
      <h2>You have been unsubscribed successfully.</h2>
      <p>You will no longer receive emails from Shoova.</p>
    `);

  } catch (err) {
    console.error(err);
    res.status(500).send("Unsubscribe failed");
  }
});

export default router;