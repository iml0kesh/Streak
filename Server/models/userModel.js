import mongoose from "mongoose";

// import Task from "./TaskModel.js";

const userSchema = new mongoose.Schema({
  userFirstName: {
    type: String,
    required: true,
  },

  userLastName: {
    type: String,
  },

  userEmail: {
    type: String,
    required: true,
  },

  userId: {
    type: String,
    required: true,
  },

  userPassword: {
    type: String,
    required: true,
  },

  userTasks: [
    {
      taskTitle: {
        type: String,
      },
      taskContent: {
        type: String,
      },
      taskCreatedOn: {
        type: Date,
      },
      taskStartsOn: {
        type: String,
      },
      taskStreak: {
        type: Number,
      },
      taskEndsOn: {
        type: String,
      },
      taskStatus: {
        type: String,
      }
    }
  ]
});

export default mongoose.model("user", userSchema);
