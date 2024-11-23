import { useState, useEffect } from "react";
import { loading, siriusImage } from "@/assets/images";

const LoadingWithFeedback  = ({
}) => {
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


    return () => {
      clearInterval(messageInterval); // Limpia el cambio de mensajes
    };
  }, [ messages]);

    return (
      <div className="flex flex-col items-center justify-center h-full bg-[#1F2127] text-white">
        {/* Logo animado */}
        <div className="animate-spinSlow">
          <img src={siriusImage} alt="Cargando feedback de la respuesta" className="h-40 w-40 " />
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
};

export default LoadingWithFeedback;
