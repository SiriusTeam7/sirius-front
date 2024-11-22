import { Navigate, useNavigate } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";
import React, { ReactElement, useEffect, useState } from "react";

interface WithProps {
    children: ReactElement;
}

export const ProtectedRoute: React.FC<WithProps> = ({ children }) => {
    const [isAuth, setIsAuth] = useState<boolean | null>(null); // Use null to indicate loading state
    const navigate = useNavigate();
    const { validateSession } = useLogin();

    useEffect(() => {
        const checkAuth = async () => {
            const authorized = await validateSession();
            setIsAuth(authorized);
            if (!authorized) {
                navigate('/login');
            }
        };

        checkAuth();
    }, [navigate, validateSession]);

    if (isAuth === null) {
        // Render a loading state while checking authentication
        return <div>Loading...</div>;
    }

    return isAuth ? children : <Navigate to="/login" />;
};