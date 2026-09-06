import MediaCoverage from "../models/MediaCoverage.js";


// CREATE MEDIA COVERAGE
export const createMediaCoverage = async (req, res) => {
  try {
    const {
      url,
      title,
      description,
      image,
      siteName,
      publishedAt,
      featured,
    } = req.body;

    if (!url || !title || !siteName) {
      return res.status(400).json({
        success: false,
        message: "URL, title and publication name are required",
      });
    }

    const existingCoverage = await MediaCoverage.findOne({ url });

    if (existingCoverage) {
      return res.status(409).json({
        success: false,
        message: "This article has already been added",
      });
    }

    // Only one media article can be featured
    if (featured) {
      await MediaCoverage.updateMany(
        { featured: true },
        { $set: { featured: false } }
      );
    }

    const coverage = await MediaCoverage.create({
      url,
      title,
      description: description || "",
      image: image || "",
      siteName,
      publishedAt: publishedAt || null,
      featured: featured || false,
      status: "published",
    });

    res.status(201).json({
      success: true,
      message: "Media coverage added successfully",
      coverage,
    });
  } catch (error) {
    console.error("Create media coverage error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to add media coverage",
    });
  }
};


// GET ALL MEDIA COVERAGE
export const getAllMediaCoverage = async (req, res) => {
  try {
    const coverage = await MediaCoverage.find()
      .sort({ publishedAt: -1, createdAt: -1 })
      .lean();

    res.json({
      success: true,
      coverage,
    });
  } catch (error) {
    console.error("Get media coverage error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch media coverage",
    });
  }
};


// GET PUBLIC MEDIA COVERAGE
export const getPublishedMediaCoverage = async (req, res) => {
  try {
    const coverage = await MediaCoverage.find({
      status: "published",
    })
      .sort({ featured: -1, publishedAt: -1, createdAt: -1 })
      .lean();

    res.json({
      success: true,
      coverage,
    });
  } catch (error) {
    console.error("Get published media coverage error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch media coverage",
    });
  }
};


// GET SINGLE MEDIA COVERAGE
export const getMediaCoverageById = async (req, res) => {
  try {
    const coverage = await MediaCoverage.findById(req.params.id);

    if (!coverage) {
      return res.status(404).json({
        success: false,
        message: "Media coverage not found",
      });
    }

    res.json({
      success: true,
      coverage,
    });
  } catch (error) {
    console.error("Get media coverage by ID error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch media coverage",
    });
  }
};


// UPDATE MEDIA COVERAGE
export const updateMediaCoverage = async (req, res) => {
  try {
    const coverage = await MediaCoverage.findById(req.params.id);

    if (!coverage) {
      return res.status(404).json({
        success: false,
        message: "Media coverage not found",
      });
    }

    const {
      url,
      title,
      description,
      image,
      siteName,
      publishedAt,
      featured,
      status,
    } = req.body;

    if (featured) {
      await MediaCoverage.updateMany(
        {
          _id: { $ne: coverage._id },
          featured: true,
        },
        { $set: { featured: false } }
      );
    }

    coverage.url = url ?? coverage.url;
    coverage.title = title ?? coverage.title;
    coverage.description = description ?? coverage.description;
    coverage.image = image ?? coverage.image;
    coverage.siteName = siteName ?? coverage.siteName;
    coverage.publishedAt = publishedAt ?? coverage.publishedAt;
    coverage.featured = featured ?? coverage.featured;
    coverage.status = status ?? coverage.status;

    await coverage.save();

    res.json({
      success: true,
      message: "Media coverage updated successfully",
      coverage,
    });
  } catch (error) {
    console.error("Update media coverage error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to update media coverage",
    });
  }
};


// DELETE MEDIA COVERAGE
export const deleteMediaCoverage = async (req, res) => {
  try {
    const coverage = await MediaCoverage.findById(req.params.id);

    if (!coverage) {
      return res.status(404).json({
        success: false,
        message: "Media coverage not found",
      });
    }

    await coverage.deleteOne();

    res.json({
      success: true,
      message: "Media coverage deleted successfully",
    });
  } catch (error) {
    console.error("Delete media coverage error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to delete media coverage",
    });
  }
};