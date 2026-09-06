import express from "express";
import { fetchLinkPreview } from "../utils/fetchLinkPreview.js";
import { verifyAdmin } from "../middleware/verifyAdmin.js";

const router = express.Router();

router.post("/", verifyAdmin, async (req, res) => {
  try {
    const { url } = req.body;

    if (!url) {
      return res.status(400).json({
        success: false,
        message: "Article URL is required",
      });
    }

    let parsedUrl;

    try {
      parsedUrl = new URL(url);
    } catch {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid URL",
      });
    }

    if (!["http:", "https:"].includes(parsedUrl.protocol)) {
      return res.status(400).json({
        success: false,
        message: "Only HTTP and HTTPS URLs are allowed",
      });
    }

    const result = await fetchLinkPreview(url);

    res.json(result);
  } catch (error) {
    console.error("Preview route error:", error);

    res.status(500).json({
      success: false,
      message: error.message || "Failed to fetch article preview",
    });
  }
});

export default router;