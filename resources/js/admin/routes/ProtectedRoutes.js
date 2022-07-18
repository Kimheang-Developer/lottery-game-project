import React from 'react'
import { useLocation, Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
    let auth = useAuth();
    let location = useLocation();

    if (!auth.user) {
        return <Navigate to="/admin/login" state={{ from: location }} replace />;
    }
    return children;
}

export default ProtectedRoutes