import User from "../models/userModel";

const addTask = async (req, res) => {
    try {
        const { user_id, taskTitle, taskContent } = req.body;
        const user = await User.findOne({ userId: user_id });

        if (!user) {
            res.status(500).json({ message: "user not found", error: err.message });
        }

        user.userTasks.push({ taskTitle, taskContent });
        await user.save();
        res.status(201).json({ message: "Task added" });
    } catch (err) {
        res.status(500).json({ message: "Failed to add task", error: err.message });
    }
}

export default {
    addTask
}