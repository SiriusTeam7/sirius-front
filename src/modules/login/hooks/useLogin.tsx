import { useState } from "react";
import { useGetLogin } from "@/modules/core/hooks/useApiHooks";
import { LoginRequest } from "@/modules/core/interfaces/Api.interface";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const { mutate } = useGetLogin();
  const navigate = useNavigate();


  const handleSubmit = () => {
    if (username && password) {
      setIsLoading(true);
      const loginData: LoginRequest = { username, password };
      mutate(loginData, {
        onSuccess: () => {
          setIsLoading(false);
          navigate("/");
        },
        onError: (error) => {
          setIsLoading(false);
          setError(error.message);
        },
      });
    } else {
      setError("Por favor, llena todos los campos");
    }
  };

  const validateSession = (): boolean => {
    const token = localStorage.getItem("authToken");
    return token ? true : false;
  };

  return {
    username,
    setUsername,
    password,
    setPassword,
    handleSubmit,
    isLoading,
    error,
    validateSession,
  };
}