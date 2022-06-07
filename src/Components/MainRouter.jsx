import React from "react";
import { Routes, Route } from "react-router-dom";
import AppLayout from "../Router";
import ProtectedRoute from "./Common/ProtectedRoute";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import AuthRoute from "./Common/AuthRoute";

const MainRouter = () => {
  return (
    <Routes>
      <Route
        path="/login"
        exact
        element={
          <AuthRoute>
            <Login />
          </AuthRoute>
        }
      />
      <Route
        path="/signup"
        exact
        element={
          <AuthRoute>
            <Signup />
          </AuthRoute>
        }
      />
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
