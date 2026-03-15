import mongoose from "mongoose";

const donationSchema = new mongoose.Schema({

  // Donor Identity
  name: String,
  email: {
    type: String,
    required: true,
    index: true
  },

  // Donation Details
  amount: {
    type: Number,
    required: true
  },

  donationType: {
    type: String,
    enum: ["payment", "subscription"],
    required: true
  },

  currency: {
    type: String,
    default: "usd"
  },

  // Stripe References
  stripeSessionId: {
    type: String,
    required: true,
    unique: true
  },

  stripeCustomerId: String,
  stripeSubscriptionId: String,
  paymentStatus: String,

  // Donor Location
  country: String,
  city: String,

  // Optional donor note
  message: String,

  // Metadata for analytics
  source: {
    type: String,
    default: "website"
  },

  // Timestamp
  createdAt: {
    type: Date,
    default: Date.now
  }

});

export default mongoose.model("Donation", donationSchema);
