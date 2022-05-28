import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/navigation.css";

const Navigation = (props) => {
  let location = useLocation();
  const [links, setLinks] = useState("");

  useEffect(() => {
    if (location.pathname === "/login") {
      setLinks("Login");
    } else if (location.pathname === "/signup") {
      setLinks("Sign Up");
    } else {
      setLinks("Welcome");
    }
  }, [location]);
  return <nav className="navbar">{links}</nav>;
};

export default Navigation;
