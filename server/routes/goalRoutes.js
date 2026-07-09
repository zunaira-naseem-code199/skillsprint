const express = require("express");

const {
  createGoal,
  getGoals,
  getGoalById,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalController");

const protect = require("../middleware/authMiddleware");

const router = express.Router();

// Create Goal
router.post("/", protect, createGoal);

// Get All Goals
router.get("/", protect, getGoals);

// Get Single Goal
router.get("/:id", protect, getGoalById);

// Update Goal
router.put("/:id", protect, updateGoal);

// Delete Goal
router.delete("/:id", protect, deleteGoal);

module.exports = router;