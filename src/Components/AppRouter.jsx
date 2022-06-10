import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Welcome from "./Pages/Welcome";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Welcome />} />
      <Route path="/dashboard" exact element={<Dashboard />} />
    </Routes>
  );
};

export default AppRouter;
