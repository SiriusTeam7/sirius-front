import React, { useState, useEffect } from "react";
import { loading } from "@/assets/images";
interface LoadingWithFeedbackProps {
  loading: boolean;
  logo: string;
  onComplete: () => void;
}

const LoadingWithFeedback: React.FC<LoadingWithFeedbackProps> = ({
  logo,
  onComplete,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const messages = [
    "La IA esta analizando tu respuesta... 🤖",
    "Desafiando las leyes del algoritmo... 💡",
    "Esto podría ser revolucionario... 🚀",
  ];
  const [currentMessage, setCurrentMessage] = useState(messages[0]);

  useEffect(() => {
    // Cambia el mensaje cada 2 segundos
    const messageInterval = setInterval(() => {
      setCurrentMessage((prev) => {
        const nextIndex = (messages.indexOf(prev) + 1) % messages.length;
        return messages[nextIndex];
      });
    }, 2000);

    // Simula el tiempo de carga
    const timer = setTimeout(() => {
      setIsLoading(false);
      if (onComplete) onComplete();
    }, 6000); // Duración del loading en milisegundos (6s)

    return () => {
      clearTimeout(timer); // Limpia el temporizador de carga
      clearInterval(messageInterval); // Limpia el cambio de mensajes
    };
  }, [onComplete, messages]);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-full bg-[#1F2127] text-white">
        {/* Logo animado */}
        <div className="animate-spinSlow">
          <img src={logo} alt="Logo del proyecto" className="h-40 w-40 " />
        </div>

        {/* Mensaje dinámico */}
        <p className="text-xl font-semibold mb-2">{currentMessage}</p>
        <p className="text-sm text-gray-400">
          Esto puede tardar unos segundos.
        </p>

        <div className="animate-spinSlow">
          <img src={loading} alt="Logo del proyecto" className="mt-4 " />
        </div>
      </div>
    );
  }

  // Retorna el componente de feedback después de cargar
  return <div className="h-full">Feedback</div>;
};

export default LoadingWithFeedback;
