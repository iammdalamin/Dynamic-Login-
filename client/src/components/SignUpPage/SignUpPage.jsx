import React from "react";
import "./SignUpPage.css";
const SignUpPage = () => {
  return (
    <>
      <div className="card">
        <h2>Sign Up</h2>
        <form method="POST">
          <input
            type="text"
            name="firstname"
            placeholder="Firstname"
            required
          />
          <input type="text" name="lastname" placeholder="Lastname" required />
          <input type="email" name="email" placeholder="Email" required />
          <input type="text" name="username" placeholder="Username" required />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </>
  );
};

export default SignUpPage;
