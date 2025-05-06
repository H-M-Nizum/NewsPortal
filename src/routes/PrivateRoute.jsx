import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <progress className="progress w-56"></progress>
      </div>
    );
  } else if (user) {
    return children;
  } else {
    return <Navigate to={"/auth/login"}></Navigate>;
  }
};

export default PrivateRoute;
