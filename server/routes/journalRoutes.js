const express = require("express");

const {
  createJournal,
  getJournals,
  getJournalById,
  updateJournal,
  deleteJournal,
} = require("../controllers/journalController");

const protect = require("../middleware/authMiddleware");

const router = express.Router();

// Create Journal
router.post("/", protect, createJournal);

// Get All Journals
router.get("/", protect, getJournals);

// Get Single Journal
router.get("/:id", protect, getJournalById);

// Update Journal
router.put("/:id", protect, updateJournal);

// Delete Journal
router.delete("/:id", protect, deleteJournal);

module.exports = router;