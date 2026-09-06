import mongoose from "mongoose";

const mediaCoverageSchema = new mongoose.Schema(
  {
    url: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      default: "",
      trim: true,
    },

    image: {
      type: String,
      default: "",
    },

    siteName: {
      type: String,
      required: true,
      trim: true,
    },

    publishedAt: {
      type: Date,
      default: null,
    },

    featured: {
      type: Boolean,
      default: false,
    },

    status: {
      type: String,
      enum: ["published", "hidden"],
      default: "published",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("MediaCoverage", mediaCoverageSchema);