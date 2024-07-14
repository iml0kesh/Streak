import { format } from 'date-fns'

import User from "../models/UserModel.js";

export const addTask = async (req, res) => {
  try {
    const { userId, taskTitle, taskContent, taskStreak } = req.body;
    
    let {taskStartsOn} = req.body;
    taskStartsOn = new Date(taskStartsOn);

    const taskCreatedOn = Date();
    const taskEndsOn = new Date(taskStartsOn)
    taskEndsOn.setDate(taskEndsOn.getDate() + parseInt(taskStreak))

    const taskStatus = false;
    

    const user = await User.findOne({ userId });
    if (!user) {
      return res.status(500).json({ message: "User not found" });
    }

    user.userTasks.push({
      taskTitle,
      taskContent,
      taskCreatedOn,
      taskStartsOn,
      taskStreak,
      taskEndsOn,
      taskStatus: false,
    });
    await user.save();

    res.json({message: "hello"})
  } catch (err) {
    console.error("Error adding task:", err);
    res.status(500).json({ message: "Failed to add task", error: err.message });
  }
};
