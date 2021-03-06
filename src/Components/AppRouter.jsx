import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
    </Routes>
  );
};

export default AppRouter;
