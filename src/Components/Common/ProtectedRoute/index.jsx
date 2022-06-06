import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

export const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const auth = localStorage.getItem("twj");
  try {
    if (auth) {
      jwt_decode(JSON.parse(auth).token);
      if (navigate === "/login") {
        <Navigate to="/" replace={true} />;
      }
      return children;
    }
  } catch (err) {
    <Navigate to="/login" replace={true} />;
  }

  return <Navigate to="/login" replace={true} />;
};

export default ProtectedRoute;
