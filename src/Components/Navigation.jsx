import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/navigation.css";
import powerBtn from "../assets/power-btn.svg";

const Navigation = () => {
  let navigate = useNavigate();
  const state = JSON.parse(localStorage.getItem("perState"));

  const handleClick = () => {
    localStorage.clear();
    navigate(`/login`);
  };
  return (
    <nav className="navbar">
      <div className="flex text-white">
        <Link to="/" className="mr-8 cursor-pointer">Home</Link>
        {state.user.role === 'admin' && <Link to="/dashboard" className="mr-2 cursor-pointer">Dashboard</Link>}
      </div>
      <img
        src={powerBtn}
        alt="power off btn"
        width="15"
        onClick={handleClick}
        title="Logout"
        className="cursor-pointer"
      />
    </nav>
  );
};

export default Navigation;
