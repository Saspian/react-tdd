import React from "react";
import { Navigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

export const ProtectedRoute = ({ children }) => {
  const auth = localStorage.getItem("twj");
  try {
    if (auth) {
      jwt_decode(JSON.parse(auth).token);
      return children;
    }
  } catch (err) {
    <Navigate to="/login" replace={true} />;
  }

  return <Navigate to="/login" replace={true} />;
};

export default ProtectedRoute;
