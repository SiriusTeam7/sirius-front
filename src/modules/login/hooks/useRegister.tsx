import { useState } from "react";

export function useRegister() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleRegister = () => {
    setIsLoading(true);
    if (name && password && confirmPassword) {
      setIsLoading(false);
      if (password !== confirmPassword) {
        setError("Las contraseñas no coinciden");
        setIsLoading(false);
      } else {
        alert(`Usuario ${name} registrado exitosamente`);
        setIsSuccess(true);
        setIsLoading(false);
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
