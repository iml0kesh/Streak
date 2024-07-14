import axios from "axios";
import React, { useEffect, useState } from "react";

import { NewTask } from "../components/NewTask";

export const UserHome = () => {
  const [user, setUser] = useState("iaml0kesh")
  const [userTasks, setUserTasks] = useState([]);
  useEffect(() => {
    const getTasks = async (user) => {
      try {
        const res = await axios.get(`user/getTasks/${user}`);
        // console.log(res);
        setUserTasks(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getTasks(user);
  }, []);

  return (
    <>
    <NewTask />
      <div>
        <h1>All Tasks of User</h1>
        <table>
          <tr>
            <th>Task Title</th>
            <th>Task Content</th>
            <th>Start Date</th>
            <th>Streak</th>
            <th>End date</th>
            <th>Status</th>
          </tr>
          {userTasks.map((task) => (
            <tr>
              <td>{task.taskTitle}</td>
              <td>{task.taskContent}</td>
              <td>{task.taskStartsOn}</td>
              <td>{task.taskStreak}</td>
              <td>{task.taskEndsOn}</td>
              <td>{task.taskStatus}</td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
};
