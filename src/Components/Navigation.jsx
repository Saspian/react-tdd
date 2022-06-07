import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/navigation.css";
import powerBtn from "../assets/power-btn.svg";

const Navigation = () => {
  let navigate = useNavigate();

  const handleClick = () => {
    localStorage.clear();
    navigate(`/login`);
  };
  return (
    <nav className="navbar">
      <div>Welcome</div>
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
