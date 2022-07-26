import { useLocation, Navigate } from "react-router-dom";

export function RequireAuth({ children }) {
    let location = useLocation();
  
    if (!localStorage.getItem('auth_token')) {
        return <Navigate to="/admin/login" state={{ from: location }} replace />;
    } else {
        return children;
    }
  }