import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { UserContext } from "../../context/context-api";

const DashboardPage = () => {
  const navigate = useNavigate();
  const [state, setState] = useContext(UserContext);

  const { name } = state.user;

  const LogoutHandler = () => {
    window.localStorage.removeItem("Auth");
    setState(null);
    navigate("/login");
  };
  return (
    <div>
      <h2>Hello, Mr. {name}</h2>

      <button onClick={LogoutHandler}>Log Out</button>
    </div>
  );
};

export default DashboardPage;
