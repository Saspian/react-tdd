import React, { useState } from "react";
import { Navigate, Route } from "react-router-dom";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const [isAuth, setIsAuth] = useState(false);

  const authToken = localStorage.getItem("token");
  setIsAuth(authToken);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuth) {
          return <Component {...props} />;
        } else {
          return <Navigate replace to="/login" />;
        }
      }}
    />
  );
};

export default ProtectedRoute;
