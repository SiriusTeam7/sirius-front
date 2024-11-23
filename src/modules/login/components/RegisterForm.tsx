import { useRegister } from "../hooks/useRegister";
import ErrorMessage from "@/modules/core/design-system/Error";
import { Button } from "@/modules/core/design-system/Button";
import { loading } from "@/assets/images";
import { Dispatch, SetStateAction } from "react";

interface RegisterFormProps {
  setShowRegister: Dispatch<SetStateAction<boolean>>;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ setShowRegister }) => {
  const {
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
  } = useRegister();

  return (
    <div className="space-y-4">
      <h1 className="text-white text-xl text-center">
        {isSuccess
          ? "Cuenta creada con éxito, ya puedes iniciar sesión :)"
          : "Crea tu cuenta:"}
      </h1>
      {!isSuccess && (
        <>
          <input
            type="text"
            placeholder="Usuario"
            className="w-full bg-[#13161c] text-white py-3 px-4 rounded-md border border-white hover:border-[#0BE98B] focus:ring-2 focus:ring-[#0BE98B] focus:outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="password"
            placeholder="Crea tu contraseña"
            className="w-full bg-[#13161c] text-white py-3 px-4 rounded-md border border-white hover:border-[#0BE98B] focus:ring-2 focus:ring-[#0BE98B] focus:outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirma tu contraseña"
            className="w-full bg-[#13161c] text-white py-3 px-4 rounded-md border border-white hover:border-[#0BE98B] focus:ring-2 focus:ring-[#0BE98B] focus:outline-none"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {error && <ErrorMessage message={error} />}
        </>
      )}

      <Button
        className="w-full bg-white hover:bg-gray-100 text-black flex items-center justify-center gap-2 py-6"
        onClick={
          isSuccess
            ? () => {
                setShowRegister(false);
              }
            : handleRegister
        }
        disabled={isLoading}
      >
        {isLoading ? (
          <img src={loading} alt="Loading" />
        ) : (
          <>{isSuccess ? "Inicia sesión" : "Registrarse"}</>
        )}
      </Button>
    </div>
  );
};

export default RegisterForm;
