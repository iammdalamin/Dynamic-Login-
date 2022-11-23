import React from "react";
import "./LoginPage.css";
const LoginPage = () => {
  return (
    <div className="card">
      <h2>Login</h2>
      <form method="POST">
        <input type="email" name="email" placeholder="Email" required />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
