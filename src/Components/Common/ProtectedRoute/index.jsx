import React from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../Auth";

export const ProtectedRoute = ({ children }) => {
  if (!auth()) {
    return <Navigate to="/login" replace={true} />;
  }
  return children;
};

export default ProtectedRoute;
