import { useState } from "react";
import { useGetLogin } from "@/modules/core/hooks/useApiHooks";
import { LoginRequest } from "@/modules/core/interfaces/Api.interface";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const { mutate, isError, isSuccess } = useGetLogin();

  const navigate = useNavigate();


  const handleSubmit = () => {
    if (username && password) {
      setIsLoading(true);
      const loginData: LoginRequest = { username, password };
      mutate(loginData, {

        onSuccess: () => {
          setIsLoading(false);
          console.log('Login exitoso')
          navigate('/');
        },
        onError: (error) => {
          setIsLoading(false);
          setError(error.message);
        },
      });
    }
    else {
      setError("Por favor, llena todos los campos");
    }
  };


  const validateSession = (): boolean => {
    // Check if cookies are present
    const cookies = document.cookie.split(";");
    console.log("🚀 ~ validateSession ~ cookies:", document)

    // Check if cookies "csrftoken" and "sessionid" are present
    const csrfToken = cookies.find((cookie) => cookie.includes("csrftoken"));
    console.log("🚀 ~ csrfToken:", csrfToken);
    const sessionId = cookies.find((cookie) => cookie.includes("sessionid"));
    console.log("🚀 ~ sessionId:", sessionId);
    const refresh_token = cookies.find((cookie) => cookie.includes("refresh_token"));
    console.log("🚀 ~ refresh_token:", refresh_token);

    // If both cookies are present, and values are not empty, and expiration date is in the future, return true
    if (
      csrfToken &&
      sessionId &&
      csrfToken.split("=")[1] &&
      sessionId.split("=")[1]
    ) {
      return true;
    }
    return false;
  }

  return {
    username,
    setUsername,
    password,
    setPassword,
    handleSubmit,
    validateSession,
    isLoading,
    isError,
    isSuccess,
    error,
  };
}
