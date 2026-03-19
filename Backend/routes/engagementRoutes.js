import express from "express";

const router = express.Router();

// Track PDF download
router.post("/track-download", (req, res) => {
  console.log("📄 Fact sheet downloaded");

  // Later: save to DB
  res.json({ success: true });
});

// Track share click
router.post("/track-share", (req, res) => {
  console.log("🔁 Share button clicked");

  // Later: save to DB
  res.json({ success: true });
});

export default router;