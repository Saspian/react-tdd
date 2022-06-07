import React from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../Auth";

const AuthRoute = ({ children }) => {
  if (!auth()) {
    return children;
  }
  return <Navigate to="/" replace />;
};

export default AuthRoute;
