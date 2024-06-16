import express from "express";
import dotenv from "dotenv";

// Database Connection
import connectDB from "./config/dbConn.js";

// Routes
import userRoutes from "./routes/userRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";

dotenv.config();
const app = express();
connectDB();

// In place of body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/home", (req, res) => {
  res.json({ msg: "Hello World" });
});

app.use("/user", userRoutes);
app.use("/task", taskRoutes);

// Get All Tasks of a User
// app.get("/tasks", async (req, res) => {
//   const user = await User.findOne({ userId: "iaml0kesh" });
//   return res.status(200).json({ tasks: user.userTasks });
// })

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is up and running on PORT: ${PORT}`);
});
