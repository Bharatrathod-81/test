import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "atoms/hooks/useAuth";

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();
  return (
    <Choose>
      <When condition={isLoggedIn}>{children}</When>
      <Otherwise>
        <Navigate replace to="/login" />;
      </Otherwise>
    </Choose>
  );
};

export default ProtectedRoute;
