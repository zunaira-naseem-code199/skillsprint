const User = require("../models/User");

// ====================================
// Get User Settings
// ====================================
const getSettings = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select(
      "emailNotifications dailyReminder"
    );

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ====================================
// Update User Settings
// ====================================
const updateSettings = async (req, res) => {
  try {
    const {
      emailNotifications,
      dailyReminder,
    } = req.body;

    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    user.emailNotifications =
      emailNotifications;

    user.dailyReminder =
      dailyReminder;

    await user.save();

    res.status(200).json({
      message: "Settings updated successfully",
      settings: {
        emailNotifications:
          user.emailNotifications,
        dailyReminder:
          user.dailyReminder,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getSettings,
  updateSettings,
};