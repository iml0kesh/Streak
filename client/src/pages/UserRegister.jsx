import React, { useState } from "react";
import axios from "axios";

export const UserRegister = () => {
  const [user, setUser] = useState({
    userFirstName: "",
    userLastName: "",
    userEmail: "",
    userId: "",
    userPassword: "",
  });

  const handelChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const registerSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/user/register", {
        userFirstName: user.userFirstName,
        userLastName: user.userLastName,
        userEmail: user.userEmail,
        userId: user.userId,
        userPassword: user.userPassword,
      });

      setUser({
        userFirstName: "",
        userLastName: "",
        userEmail: "",
        userId: "",
        userPassword: "",
      });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <h1>User Register</h1>
      <form onSubmit={registerSubmit}>
        <input
          type="text"
          name="userFirstName"
          placeholder="FirstName"
          onChange={handelChange}
        />
        <input
          type="text"
          name="userLastName"
          placeholder="LastName"
          onChange={handelChange}
        />
        <input
          type="text"
          name="userEmail"
          placeholder="Email"
          onChange={handelChange}
        />
        <input
          type="text"
          name="userId"
          placeholder="userId"
          onChange={handelChange}
        />
        <input
          type="text"
          name="userPassword"
          placeholder="userPassword"
          onChange={handelChange}
        />
        <button type="submit">submit</button>
      </form>
    </>
  );
};
