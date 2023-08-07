import React from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const WithAuth = (Component) => {
  const AuthenticatedComponent = (props) => {

 
    const authToken = Cookies.get("userToken");
    if (!authToken) {
       return <Navigate to={'/login'}/>
    }

    return <Component {...props} />;
  };

  return AuthenticatedComponent;
};

export default WithAuth;