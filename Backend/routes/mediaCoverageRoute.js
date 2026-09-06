import express from "express";

import {
  createMediaCoverage,
  getAllMediaCoverage,
  getPublishedMediaCoverage,
  getMediaCoverageById,
  updateMediaCoverage,
  deleteMediaCoverage,
} from "../controllers/mediaCoverageController.js";

import { verifyAdmin } from "../middleware/verifyAdmin.js";

const router = express.Router();


// PUBLIC
router.get("/", getPublishedMediaCoverage);


// ADMIN
router.get("/admin/all", verifyAdmin, getAllMediaCoverage);

router.get("/admin/:id", verifyAdmin, getMediaCoverageById);

router.post("/", verifyAdmin, createMediaCoverage);

router.put("/:id", verifyAdmin, updateMediaCoverage);

router.delete("/:id", verifyAdmin, deleteMediaCoverage);


export default router;