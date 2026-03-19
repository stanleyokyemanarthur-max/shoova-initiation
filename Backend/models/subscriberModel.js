import mongoose from "mongoose";

const subscriberSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },

  lastName: {
    type: String,
    required: true,
    trim: true
  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },

  birthday: Date,
  
  birthdayReminder: Boolean,
  
  subscribed: {
    type: Boolean,
    default: true
  }
    
 

}, { timestamps: true });

export default mongoose.model("Subscriber", subscriberSchema);