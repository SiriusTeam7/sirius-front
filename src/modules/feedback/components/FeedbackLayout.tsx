import { ThumbsUp, ThumbsDown } from "lucide-react"; // Íconos para "Me gusta" y "No me gusta"

import { FeedbackLayoutProps } from "@interfaces/FeedbackLayout.interface";
import { useRatingChallenge } from "@/modules/core/hooks/useApiHooks";
import { useState } from "react";
import { RatingChallengeRequest } from "@/modules/core/interfaces/Api.interface";

export default function FeedbackLayout({ feedback }: FeedbackLayoutProps) {
  const { mutate } = useRatingChallenge();
  const [successRat, setSuccesRat] = useState(false);

  const getScoreBorderColor = (score: number) => {
    if (score >= 8) return "border-green-500";
    if (score >= 5) return "border-yellow-500";
    return "border-red-500";
  };

  const extractUrl = (text: string): string | null => {
    const urlRegex = /(https?:\/\/[^\s]+)/g; // Expresión regular para capturar URLs
    const match = text.match(urlRegex);
    return match ? match[0] : null; // Devuelve la URL si se encuentra, de lo contrario `null`
  };

  return (
    <div className="flex flex-col justify-center h-full bg-gray-800 rounded-lg p-6">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold text-start">Feedback</h1>
        <div
          className={`px-4 py-2 rounded-lg text-white border ${getScoreBorderColor(
            feedback?.score_average || 0
          )}`}
        >
          {feedback?.score_average}/10
        </div>
      </div>

      {/* Contenido principal: Reto o TextArea */}
      <div className="mt-4 flex flex-col items-center justify-content">
        {/* Título del reto */}
        <div className="p-4 bg-[#1F2127] rounded-lg w-full shadow-md border border-white/70 mx-auto">
          <p className="text-gray-300 font-medium">{feedback?.feedback}</p>
        </div>
      </div>

      <div className="flex justify-end  mt-4 items-center ">
        <div className="flex flex-row items-center justify-center space-x-2 ">
          <p className="text-sm font-medium text-gray-300">
            {successRat ? "Gracias! Se ha guardado tu respuesta" : " ¿Te gustó este reto?"}
          </p>
          <button
            aria-label="Me gustó"
            onClick={() => {
              const challengeData: RatingChallengeRequest = {
                challenge_id: feedback?.challenge_id || 0,
                rating: 1,
              };
              mutate(challengeData, {
                onSuccess: () => {
                  setSuccesRat(true);
                },
              });
            }}
            disabled={successRat}
            className="flex flex-row items-center justify-center px-1 py-1 bg-green-600 text-white rounded-md hover:bg-green-500 focus:outline-none focus:ring focus:ring-green-400"
          >
            <ThumbsUp className="h-4 w-4 " />
          </button>

          <button
            aria-label="No me gustó"
            onClick={() => {
              const challengeData: RatingChallengeRequest = {
                challenge_id: feedback?.challenge_id || 0,
                rating: 0,
              };
              mutate(challengeData, {
                onSuccess: () => {
                  setSuccesRat(true);
                },
              });
            }}
            disabled={successRat}
            className="flex  p-1 bg-red-600 text-white rounded-md hover:bg-red-500 focus:outline-none focus:ring focus:ring-red-400"
          >
            <ThumbsDown className="h-4 w-4 " />
          </button>
        </div>
      </div>

      {/* Flashcards */}
      {feedback?.class_recommendations && (
        <div className="mt-5 flex-col justify-center">
          <h1>Refuerza con este contenido</h1>
          <div className="grid sm:grid-cols-3 grid-rows-3  gap-4 w-full mt-2">
            {feedback?.class_recommendations.map((flashcard, index) => (
              <div
                className="p-2 bg-[#1F2127] rounded-lg  border border-gray-300 shadow-lg"
                key={index}
              >
                <p className="text-sm	">Clase {index + 1} </p>
                <div className="flex justify-end mt-3">
                  <a
                    className="flex items-center space-x-2  hover:underline"
                    aria-label="Ir al reto"
                    target="_blank"
                    href={extractUrl(flashcard) || "#"}
                  >
                    <p className=" bg-[#133962] px-3 py-1 rounded-lg text-sm font-semibold text-[#6CC3EF]">
                      Repasar clase
                    </p>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
