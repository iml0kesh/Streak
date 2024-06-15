import mongoose from "mongoose";

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
        required: true,
      },
      taskContent: {
        type: String,
        required: true,
      },
    },
  ],
});

export default mongoose.model("user", userSchema);
