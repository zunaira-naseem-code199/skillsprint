const Goal = require("../models/Goal");
const Task = require("../models/Task");
const Journal = require("../models/Journal");
const Certificate = require("../models/Certificate");
const User = require("../models/User");

const getDashboard = async (req, res) => {
  try {
    const userId = req.user.id;

    const [
      user,
      goals,
      tasks,
      journals,
      certificates,
    ] = await Promise.all([
      User.findById(userId).select(
        "fullName profilePicture"
      ),

      Goal.find({ user: userId }).sort({
        createdAt: -1,
      }),

      Task.find({ user: userId }).sort({
        createdAt: -1,
      }),

      Journal.find({ user: userId }).sort({
        createdAt: -1,
      }),

      Certificate.find({
        user: userId,
      }).sort({
        createdAt: -1,
      }),
    ]);

    const completedTasks = tasks.filter(
      (task) => task.status === "Completed"
    ).length;

    res.status(200).json({
      user,

      stats: {
        goals: goals.length,
        tasks: tasks.length,
        journals: journals.length,
        certificates: certificates.length,
        completedTasks,
      },

      recentGoals: goals.slice(0, 3),

      recentTasks: tasks.slice(0, 5),

      latestJournal:
        journals.length > 0
          ? journals[0]
          : null,

      latestCertificate:
        certificates.length > 0
          ? certificates[0]
          : null,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getDashboard,
};