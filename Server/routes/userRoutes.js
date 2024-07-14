import express from "express";
import { registerUser, loginUser, userDashBoard, getTasks } from "../controllers/userController.js"

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/home", userDashBoard)

router.get("/getTasks/:user", getTasks)

export default router;