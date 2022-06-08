import React from "react";
import { useNavigate } from "react-router-dom";
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
      <div>Welcome {state.user.username}</div>
      <div className="div"></div>
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
