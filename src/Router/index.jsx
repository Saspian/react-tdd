import React from "react";
import { Routes, Route } from "react-router-dom";
import Signup from "../Components/Signup";
import Welcome from "../Components/Welcome";

const NavRouter = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Signup />} />
      <Route path="/welcome/:username" exact element={<Welcome />} />
    </Routes>
  );
};

export default NavRouter;
