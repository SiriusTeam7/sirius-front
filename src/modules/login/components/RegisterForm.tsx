import React, { useState } from "react";

interface RegisterFormProps {
  email: string;
}

const RegisterForm: React.FC<RegisterFormProps> = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = () => {
    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden");
    } else {
      alert(`Usuario ${name} registrado exitosamente`);
    }
  };

  return (
    <div className="space-y-4">
      <h1 className="text-white text-xl text-center">Crea tu cuenta:</h1>
      <input
        type="text"
        placeholder="Nombre"
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
      <button
        className="w-full bg-[#0BE98B] text-black py-3 px-4 rounded-md hover:bg-[#0AE08A]"
        onClick={handleRegister}
      >
        Registrar
      </button>
    </div>
  );
};

export default RegisterForm;
