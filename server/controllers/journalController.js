const Journal = require("../models/Journal");

// ===================================
// Create Journal
// ===================================
const createJournal = async (req, res) => {
  try {
    const { title, content, mood } = req.body;

    const journal = await Journal.create({
      user: req.user.id,
      title,
      content,
      mood,
    });

    res.status(201).json({
      message: "Journal created successfully",
      journal,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ===================================
// Get All Journals
// ===================================
const getJournals = async (req, res) => {
  try {
    const journals = await Journal.find({
      user: req.user.id,
    }).sort({
      createdAt: -1,
    });

    res.status(200).json(journals);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ===================================
// Get Single Journal
// ===================================
const getJournalById = async (req, res) => {
  try {
    const journal = await Journal.findOne({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!journal) {
      return res.status(404).json({
        message: "Journal not found",
      });
    }

    res.status(200).json(journal);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ===================================
// Update Journal
// ===================================
const updateJournal = async (req, res) => {
  try {
    const journal = await Journal.findOneAndUpdate(
      {
        _id: req.params.id,
        user: req.user.id,
      },
      req.body,
      {
        new: true,
      }
    );

    if (!journal) {
      return res.status(404).json({
        message: "Journal not found",
      });
    }

    res.status(200).json({
      message: "Journal updated successfully",
      journal,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ===================================
// Delete Journal
// ===================================
const deleteJournal = async (req, res) => {
  try {
    const journal = await Journal.findOneAndDelete({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!journal) {
      return res.status(404).json({
        message: "Journal not found",
      });
    }

    res.status(200).json({
      message: "Journal deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createJournal,
  getJournals,
  getJournalById,
  updateJournal,
  deleteJournal,
};