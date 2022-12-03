// import { useState } from "react";
import { useContext } from "react";
import { Navigate } from "react-router";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import DashboardPage from "./components/DashboardPage/DashboardPage";
import LoginPage from "./components/LoginPage/LoginPage";
import SignUpPage from "./components/SignUpPage/SignUpPage";
import { UserContext } from "./context/context-api";

function App() {
  const [state, setState] = useContext(UserContext);

  return (
    <Router>

      <Routes>
 
       <Route path="/signup" element={<SignUpPage /> } /> 
        <Route path="/login" element={state===null?<LoginPage />:<Navigate replace to="/" /> } />
         <Route path="/" element={state?<DashboardPage />:<Navigate replace to="/login" />} /> 
        <Route path="*" element={"404 Not Found"} /> 
      

      </Routes>
      
      </Router>
  );
}

export default App;
