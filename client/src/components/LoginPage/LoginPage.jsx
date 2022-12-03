import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { UserContext } from "../../context/context-api";
import "./LoginPage.css";
const LoginPage = () => {
  let history = useNavigate();

  const [state, setState] = useContext(UserContext);

  const [user, setUser] = useState({
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

    const { email, password } = user;

    const res = await fetch("http://localhost:8080/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();

    setState({
      user: data.data,
      token: data.token,
    });

    window.localStorage.setItem("Auth", JSON.stringify(data));

    console.log(data.data);
    if (res.status === 400 || res.status === 401 || !data) {
      window.alert(data.status);
    } else {
      window.alert(data.status);
      history("/");
    }
  };

  return (
    <div className="card">
      <h2>Login</h2>
      <form method="POST" onSubmit={postDataObj}>
        <input
          type="email"
          name="email"
          value={user.email}
          placeholder="Email"
          onChange={userHandler}
          required
        />
        <input
          type="password"
          name="password"
          value={user.password}
          placeholder="Password"
          onChange={userHandler}
          required
        />
        <button type="submit">Login</button>
      </form>

      <p>
        If you have no accoutn, <a href="/signup"> Sign Up Now</a>
      </p>
    </div>
  );
};

export default LoginPage;
