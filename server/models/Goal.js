const mongoose = require("mongoose");

const goalSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      default: "",
    },

    category: {
      type: String,
      enum: [
  "Programming",
  "Web Development",
  "Mobile Development",
  "AI & Machine Learning",
  "UI/UX Design",
  "Data Science",
  "Cyber Security",
  "DevOps",
  "Career",
  "Personal",
  "Other",
],
      default: "Programming",
    },

    targetDate: {
      type: Date,
    },

    status: {
      type: String,
      enum: ["Pending", "In Progress", "Completed"],
      default: "Pending",
    },

    progress: {
      type: Number,
      default: 0,
      min: 0,
      max: 100,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Goal", goalSchema);