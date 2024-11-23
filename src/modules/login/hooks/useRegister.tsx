import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRegisterUser } from "@/modules/core/hooks/useApiHooks";
import { LoginRequest } from "@/modules/core/interfaces/Api.interface";

export function useRegister() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { mutate } = useRegisterUser();
  const navigate = useNavigate();

  const handleRegister = () => {
    setIsLoading(true);
    if (name && password && confirmPassword) {
      if (password !== confirmPassword) {
        setError("Las contraseñas no coinciden");
        setIsLoading(false);
      } else {
        const registerData: LoginRequest = { username: name, password };
        mutate(registerData, {
          onSuccess: () => {
            setIsLoading(false);
            setIsSuccess(true);
            navigate("/");
          },
          onError: (error) => {
            setIsLoading(false);
            setError(error.message);
          },
        });
      }
    } else {
      setIsLoading(false);
      setError("Por favor, llena todos los campos");
    }
  };

  return {
    name,
    setName,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    handleRegister,
    error,
    isLoading,
    isSuccess,
  };
}