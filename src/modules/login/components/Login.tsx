import { useState } from "react";
import { siriusImage, loading } from "@/assets/images";
import { Button } from "../../core/design-system/Button";
import { useLogin } from "../hooks/useLogin";
import RegisterForm from "./RegisterForm";
import ErrorMessage from "@/modules/core/design-system/Error";

const Login = () => {
  const [showRegister, setShowRegister] = useState(false);

  const {
    username,
    setUsername,
    password,
    setPassword,
    handleSubmit,
    isLoading,
    error
  } = useLogin();

  return (
    <div className="min-h-screen bg-gradient flex items-center justify-center p-4">
      <div className="w-80 max-w-md">
        <div className="flex justify-center mb-6">
          <img src={siriusImage} alt="Sirius" className="w-32" />
        </div>
        {!showRegister ? (
          <div className="space-y-4">
            <h1 className="text-white text-xl text-center">
              {"Iniciar sesión"}
            </h1>
            <div className="relative space-y-4">
              
              <input
                type="email"
                placeholder="Username"
                className="w-full bg-[#13161c] text-white py-3 px-4 rounded-md border border-white hover:border-[#0BE98B] focus:ring-2 focus:ring-[#0BE98B] focus:outline-none"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />

              <input
                type="password"
                placeholder="Contraseña"
                className="w-full bg-[#13161c] text-white py-3 px-4 rounded-md border border-white hover:border-[#0BE98B] focus:ring-2 focus:ring-[#0BE98B] focus:outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              
            </div>
            {error && <ErrorMessage message={error} />}

            <Button
              className="w-full bg-white hover:bg-gray-100 text-black flex items-center justify-center gap-2 py-6"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              {isLoading ? <img src={loading} alt="Loading" /> : <>Continuar</>}
            </Button>
            
            <div className="flex justify-end">
              <p
                className=" hover:underline cursor-pointer"
                onClick={() => setShowRegister(true)}
              >
                Regístrate aquí
              </p>
            </div>
          </div>
        ) : (
          <RegisterForm setShowRegister={setShowRegister} />
        )}
      </div>
    </div>
  );
};

export default Login;
