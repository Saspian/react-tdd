import React from "react";
import { Routes, Route } from "react-router-dom";
import Welcome from "./Pages/Welcome";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Welcome />} />
    </Routes>
  );
};

export default AppRouter;
