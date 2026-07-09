const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
    },

    profilePicture: {
      type: String,
      default: "",
    },

    bio: {
      type: String,
      default: "",
    },
    emailNotifications: {
  type: Boolean,
  default: true,
},

dailyReminder: {
  type: Boolean,
  default: true,
},
  },
  
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);