import mongoose from "mongoose";

const connectDB = () => {
  const DBuri = "mongodb://127.0.0.1:27017/streak";
  mongoose
    .connect(DBuri)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log("Connection failed bro", err));
};

export default connectDB;
