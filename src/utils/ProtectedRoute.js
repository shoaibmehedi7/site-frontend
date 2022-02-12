import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { routes } from "../constants/routes";
import { isLoggedIn } from "./isLoggedIn";

function ProtectedRoute({ Component }) {
  const location = useLocation();

  if (isLoggedIn()) {
    return <Component />;
  }

  return <Navigate to={routes.SIGNIN} replace state={{ from: location.pathname }} />;
}

export default ProtectedRoute;
