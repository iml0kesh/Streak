import bcrypt from "bcrypt";
import User from "../models/userModel";

export const registerUser = async (req, res) => {
    try {
        const { userFirstName, userLastName, userEmail, userId, userPassword } = req.body;
        const hash = await bcrypt.hash(userPassword, 5);
        const newUser = new User({
            userFirstName: userFirstName,
            userLastName: userLastName,
            userEmail: userEmail,
            userId: userId,
            userPassword: hash,
        });

        await newUser.save();
        res.status(201).json({ message: "User added" });
    } catch (err) {
        res.status(500).json({ message: "Failed to add user", error: err.message });
    }
}

export const loginUser = async (req, res) => {
    try {
        const { userEmail, userId, userPassword } = req.body;
        let user = null;
        if (!userEmail) {
            user = await User.findOne({ userId: userId })
        } else {
            user = await User.findOne({ userEmail: userEmail })
        }

        if (!user) {
            res.status(500).json({ message: "user not found" });
        }

        // Check password
        const passCheck = bcrypt.compare(user.userPassword, userPassword);
        if (!passCheck) {
            res.status(500).json({ message: "Wrong email or password bro" });

        }
        res.status(200).json({ message: "Login succuss" })
    } catch (err) {
        res.status(500).json({ message: "Wrong email or password bro", error: err.message });
    }
}