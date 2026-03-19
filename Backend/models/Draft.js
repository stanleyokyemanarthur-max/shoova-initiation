import mongoose from "mongoose";

const draftSchema = new mongoose.Schema({
  subject: String,
  message: String,
  imageUrl: String
}, { timestamps: true });

export default mongoose.model("Draft", draftSchema);