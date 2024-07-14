import axios from "axios";
import React, { useState } from "react";

// import { GetAllTasks } from "./GetAllTasks";

export const NewTask = () => {
  const [Task, setTask] = useState({
    userId: "iaml0kesh",
    taskTitle: "",
    taskContent: "",
    taskStreak: "",
  });

  const handelChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({    
      ...prevTask,
      [name]: value,
    }));
  };

  const newTaskSubmit = async (e) => {
    e.preventDefault();
    try {
        const res = await axios.post("task/newTask", {
            userId : Task.userId,
            taskTitle: Task.taskTitle,
            taskContent : Task.taskContent,
            taskStreak: Task.taskStreak,
            taskStartsOn : Task.taskStartsOn
        })
    } catch (error) {
        console.log(error);
    }
  };
  return (
    <>
      <h1>New Task</h1>
      <form onSubmit={newTaskSubmit}>
        <input
          type="text"
          name="taskTitle"
          placeholder="Title"
          onChange={handelChange}
        />
        <input
          type="text"
          name="taskContent"
          placeholder="why?"
          onChange={handelChange}
        />
        <input
          type="Date"
          name="taskStartsOn"
          placeholder="when to start?"
          onChange={handelChange}
        />
        <input
          type="text"
          name="taskStreak"
          placeholder="Streak For? days"
          onChange={handelChange}
        />
        <button type="submit">submit</button>
      </form>

      {/* <GetAllTasks/> */}
    </>
  );
};
