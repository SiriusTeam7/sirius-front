import { useState } from "react";
import { useGetLogin } from "@/modules/core/hooks/useApiHooks";
import { LoginRequest } from "@/modules/core/interfaces/Api.interface";

export function useLogin() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { mutate, isError, isSuccess } = useGetLogin();
  

  const handleSubmit = () => {
    if (username && password) {
        setIsLoading(true);
      const loginData: LoginRequest = { username, password };
      mutate(loginData);
      if (isSuccess){
        console.log('Login exitoso') 
      } else {
        console.error('Error en el inicio de sesión')
      }
      
    } else {
      console.error("Los campos de email y contraseña no deben estar vacíos");
    }
  };

  return {
    username,
    setUsername,
    password,
    setPassword,
    handleSubmit,
    isLoading,
    isError,
    isSuccess,
  };
}
