import { Navigate } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";
import React, { ReactElement } from "react";

interface WithProps {
    children: ReactElement;
}

export const AuthRoute: React.FC<WithProps> = ({ children }) => {
    const { handleSubmit } = useLogin();
    const isAuth = handleSubmit()
    return isAuth ? <Navigate to="/" replace /> : children;
};

export const ProtectedRoute: React.FC<WithProps> = ({ children }) => {
    const { validateSession } = useLogin();
    const isAuth = validateSession()
    return isAuth ? children : <Navigate to="/login" replace />;
};