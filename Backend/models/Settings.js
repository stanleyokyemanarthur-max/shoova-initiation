import mongoose from "mongoose";

const settingsSchema = new mongoose.Schema({

  organizationName: String,

  contactEmail: String,

  phone: String,

  currency: {
    type: String,
    default: "USD"
  },

  donationTiers: [Number]

});

export default mongoose.model("Settings", settingsSchema);