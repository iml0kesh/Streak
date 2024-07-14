import express from "express";
import { addTask } from "../controllers/taskController.js";

const router = express.Router();

router.post("/newTask", addTask);

export default router;
