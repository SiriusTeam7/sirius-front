import { Navigate, useNavigate } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";
import React, { ReactElement, useEffect } from "react";

interface WithProps {
    children: ReactElement;
}

export const ProtectedRoute: React.FC<WithProps> = ({ children }) => {

    const [isAuth, setIsAuth] = React.useState<boolean>(false);
    const navigate = useNavigate();
    const { validateSession } = useLogin();

    useEffect(() => {
        const checkAuth = async () => {
            const isAuth = await validateSession();
            setIsAuth(isAuth);
            if (!isAuth) {
                navigate('/login');
            }
        }
        checkAuth();

    }, [navigate]);

    return isAuth ? children : <Navigate to="/login" />;
};