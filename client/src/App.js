import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import DashboardPage from "./components/DashboardPage/DashboardPage";
import LoginPage from "./components/LoginPage/LoginPage";
import SignUpPage from "./components/SignUpPage/SignUpPage";


function App() {
  return (
    <Router>

      <Routes>
      <Route path="/" element={<SignUpPage />} /> 

      <Route path="/login" element={<LoginPage />} /> 
      <Route path="/menu-page" element={<DashboardPage />} /> 
      <Route path="*" element={"404 Not Found"} /> 
      

      </Routes>
      
      </Router>
  );
}

export default App;
