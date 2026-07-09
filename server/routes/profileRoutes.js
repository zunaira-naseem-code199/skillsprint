const express = require("express");

const {
  getProfile,
  updateProfile,
} = require("../controllers/profileController");

const protect = require("../middleware/authMiddleware");

const router = express.Router();

// Get Logged-in User Profile
router.get("/", protect, getProfile);

// Update Logged-in User Profile
router.put("/", protect, updateProfile);

module.exports = router;