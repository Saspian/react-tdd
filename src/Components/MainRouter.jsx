import React from "react";
import { Routes, Route } from "react-router-dom";
import AppLayout from "../Router";
import ProtectedRoute from "./Common/ProtectedRoute";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/login" exact element={<Login />} />
      <Route path="/signup" exact element={<Signup />} />
      <Route
        path="*"
        element={
          <ProtectedRoute>
            <AppLayout />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default MainRouter;
