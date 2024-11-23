import { useEffect, useState } from "react";

export function useStateChallenge(
  onSubmit: (
    inputMode: "text" | "audio" | "code",
    response: string | Blob
  ) => void,
  initialTime: number
) {
  const [inputMode, setInputMode] = useState<"text" | "audio" | "code">("code");
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [response, setResponse] = useState("");
  const [timeLeft, setTimeLeft] = useState(initialTime); 
  const [submitStatus, setSubmitStatus] = useState<"challenge" | "loading" | "feedback">("challenge");
  const [feedback, setFeedback] = useState(""); // Feedback recibido


  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => Math.max(prevTime - 1, 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(
      2,
      "0"
    )}`;
  };

  const borderColor = timeLeft > 60 ? "border-green-500" : "border-red-500";

  const handleAudioRecorded = (blob: Blob) => {
    setAudioBlob(blob);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!response.trim()) {
      //alert("Por favor ingresa tu respuesta antes de enviar.");
      //return;
    }
    if (inputMode === "audio") {
        onSubmit(inputMode, audioBlob!);
      } else {
        onSubmit(inputMode, response);
      }

    setSubmitStatus("loading");

    // Simular la llamada al API para enviar la respuesta
    setTimeout(() => {
      const simulatedFeedback = "¡Buena respuesta! Intenta mejorar tu gramática.";
      setFeedback(simulatedFeedback);
      setSubmitStatus("feedback"); 
    }, 5000); 
  };


  const isSubmitDisabled =
    (inputMode === "text" && !response) ||
    (inputMode === "audio" && !audioBlob);

  return {
    formatTime,
    timeLeft,
    borderColor,
    inputMode,
    feedback,
    submitStatus,
    setInputMode,
    handleSubmit,
    audioBlob,
    handleAudioRecorded,
    response,
    setResponse,
    isSubmitDisabled,
  };
}
