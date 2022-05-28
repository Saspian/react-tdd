import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "../Components/Navigation";
import Login from "../Components/Pages/Login";
import Signup from "../Components/Pages/Signup";
import Welcome from "../Components/Welcome";

const NavRouter = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/login" exact element={<Login />} />
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/welcome/:username" exact element={<Welcome />} />
      </Routes>
    </>
  );
};

export default NavRouter;
