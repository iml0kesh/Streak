import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
    taskTitle: {
        type: String,
        required: true,
    },
    taskContent: {
        type: String,
        required: true,
    },
    taskCreatedOn: {
        type: Date,
        required: true
    },
    taskStartsOn: {
        type: Date,
        required: true
    },
    taskStreak: {
        type: Number,
        required: true
    },
    taskEndsOn: {
        type: Date,
        required: true,
    },
    taskStatus: {
        type: String,
        required: true
    }
})

export default mongoose.model("Task", taskSchema)