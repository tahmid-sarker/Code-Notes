import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = use(AuthContext);
  //   console.log(user);
  const location = useLocation(); 
  // console.log(location)
  // console.log(location.pathname)


  if (loading) { // If loading is true, show a loading spinner. Otherwise, show the children components.
    return (
      <div className="flex place-content-center">
        <span className="loading loading-dots loading-xs"></span>
        <span className="loading loading-dots loading-sm"></span>
        <span className="loading loading-dots loading-md"></span>
        <span className="loading loading-dots loading-lg"></span>
        <span className="loading loading-dots loading-xl"></span>
      </div>
    );
  }

  if (!user) { // If user is not logged in, redirect to login page
    return <Navigate state={location?.pathname} to="/login"></Navigate>;
  } else {
    return children;
  }
};

export default PrivateRoutes;