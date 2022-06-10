import React from "react";
import { Navigate } from "react-router-dom";
import { auth, role } from "../Auth";

export const AdminRoute = ({ children }) => {
  if (!auth()) {
    return <Navigate to="/login" replace={true} />;
  }
  if (auth() && role() === "admin") {
    return children;
  }
  return <Navigate to="/" replace={true} />;
};

export default AdminRoute;
