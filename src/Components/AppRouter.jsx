import React from "react";
import { Routes, Route } from "react-router-dom";
import Welcome from "../Components/Welcome";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Welcome />} />
      <Route path="/welcome/:username" exact element={<Welcome />} />
    </Routes>
  );
};

export default AppRouter;