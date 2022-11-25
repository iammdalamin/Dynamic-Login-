import React, { useState } from "react";
import "./SignUpPage.css";
const SignUpPage = () => {
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
  console.log(user);
  return (
    <>
      <div className="card">
        <h2>Sign Up</h2>
        <form method="POST">
          <input
            type="text"
            name="name"
            value={user.name}
            placeholder="Fullname"
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
