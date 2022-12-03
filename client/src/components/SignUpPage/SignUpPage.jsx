import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./SignUpPage.css";
const SignUpPage = () => {
  let history = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const userHandler = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user, //spread operator
      [name]: value,
    });
  };

  const postDataObj = async (e) => {
    e.preventDefault();

    const { name, email, password } = user;

    const res = await fetch("http://localhost:8080/api/v1/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });
    const data = await res.json();
    if (res.status === 400) {
      window.alert(data.status);
    } else {
      window.alert(data.status);
      history("/login");
    }
  };
  return (
    <>
      <div className="card">
        <h2>Sign Up</h2>
        <form method="POST" onSubmit={postDataObj}>
          <input
            type="text"
            name="name"
            value={user.name}
            placeholder="Full Name"
            required
            onChange={userHandler}
          />

          <input
            type="email"
            name="email"
            value={user.email}
            placeholder="Email"
            required
            onChange={userHandler}
          />

          <input
            type="password"
            name="password"
            value={user.password}
            placeholder="Password"
            required
            onChange={userHandler}
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </>
  );
};

export default SignUpPage;
