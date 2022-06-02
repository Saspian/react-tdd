import React from "react";
import AppRouter from "../Components/AppRouter";
import Navigation from "../Components/Navigation";

const AppLayout = () => {
  return (
    <>
      <Navigation />
      <AppRouter />
    </>
  );
};

export default AppLayout;
