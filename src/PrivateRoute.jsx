import React from "react";
import { Navigate, Route } from "react-router-dom";
import { useAuth } from "../AuthContext"; // Assuming AuthContext is in the same directory as PrivateRoute.jsx

const PrivateRoute = ({ path, ...props }) => {
    const { user } = useAuth();

    return user ? (
        <Route {...props} path={path} />
    ) : (
        <Navigate to="/login" replace />
    );
};

export default PrivateRoute;
