import React from "react";
import { Navigate } from "react-router-dom";
import { auth, role } from "../Auth";

export const ProtectedRoute = ({ children }) => {
  console.log(role(), "@@role");
  if (!auth()) {
    return <Navigate to="/login" replace={true} />;
  } else if (role() === "admin") {
    return <Navigate to="/dashboard" replace={true} />;
  }
  return children;
};

export default ProtectedRoute;
