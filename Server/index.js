import express from "express";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import connectDB from "./config/dbConn.js";


import User from "./models/userModel.js";

dotenv.config();
const app = express();
connectDB();

// In place of body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/home", (req, res) => {
  res.json({ msg: "Hello World" });
});

app.post("/add", async (req, res) => {
  try {
    const { userFirstName, userLastName, userEmail, userId, userPassword } =
      req.body;

    const newUser = new User({
      userFirstName: userFirstName,
      userLastName: userLastName,
      userEmail: userEmail,
      userId: userId,
      userPassword: userPassword,
    });

    await newUser.save();
    res.status(201).json({ message: "User added" });
  } catch (err) {
    res.status(500).json({ message: "Failed to add user", error: err.message });
  }
});

// login
app.post("/login", async (req, res) => {
  try {
    const { userEmail, userId, userPassword } = req.body;
    let user = null;
    if (!userEmail) {
      user = await User.findOne({ userId: userId })
    } else {
      user = await User.findOne({ userEmail: userEmail })
    }

    if (!user) {
      res
        .status(500)
        .json({ message: "user not found", error: err.message });
    }

    if (user.userPassword != userPassword) {
      res.status(500).json({ message: "Wrong email or password bro", error: err.message });

    }
    res.status(200).json({ message: "Login succuss" })
  } catch (err) {
    res.status(500).json({ message: "Wrong email or password bro", error: err.message });
  }
})

// Add Task to users
app.post("/task", async (req, res) => {
  try {
    const { user_id, taskTitle, taskContent } = req.body;
    const user = await User.findOne({ userId: user_id });

    if (!user) {
      res
        .status(500)
        .json({ message: "user not found", error: err.message });
    }

    user.userTasks.push({ taskTitle, taskContent });
    await user.save();
    res.status(201).json({ message: "Task added" });
  } catch (err) {
    res.status(500).json({ message: "Failed to add task", error: err.message });
  }
});

// Get All Tasks of a User
app.get("/tasks", async (req, res) => {
  const user = await User.findOne({ userId: "iaml0kesh" });
  return res.status(200).json({ tasks: user.userTasks });
})


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is up and running on PORT: ${PORT}`);
});
