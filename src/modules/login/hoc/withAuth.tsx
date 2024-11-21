import { Navigate } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";
import React, { ReactElement } from "react";

interface WithProps {
    children: ReactElement;
}

export const ProtectedRoute: React.FC<WithProps> = ({ children }) => {
    const { validateSession } = useLogin();
    const isAuth = validateSession()
    return isAuth ? children : <Navigate to="/login" replace />;
};