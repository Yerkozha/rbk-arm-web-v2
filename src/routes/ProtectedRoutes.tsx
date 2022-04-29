import React from "react";
import { Redirect, Route } from "react-router-dom";
import { RouteComponentProps } from '@reach/router';
interface RouteProps {
    path: string
  }
const ProtectedRoute: React.FC<any> = ({ component: Component, ...restOfProps }:any) => {
    
  // const isAuthenticated = localStorage.getItem("api_token");

  return (
  <Route
      {...restOfProps}
      render={(props: any) =>
        // isAuthenticated ? 
        <Component {...props} /> 
        // : <Redirect to="/login" />
      }
    />
  );
}
export default ProtectedRoute