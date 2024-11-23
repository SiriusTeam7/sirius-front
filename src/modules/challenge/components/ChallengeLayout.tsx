import { Button } from "@/modules/core/design-system/Button";
import { Textarea } from "@/modules/core/design-system/TextArea";
import { AudioRecorder } from "./AudioRecorder";
import { KeyboardIcon, Mic } from "lucide-react";
import { useState } from "react";
import CodeEditor from "./CodeEditor";
import { useStateChallenge } from "../hooks/useStateChallange";
import LoadingWithFeedback from "./Loading";
import FeedbackLayout from "@/modules/feedback/components/FeedbackLayout";
import Sidebar from "@/modules/home/components/SideBar";

export default function ChallengeLayout() {
  const isCodeChallenge = true;
  const [inputMode, setInputMode] = useState("text");
  const { formatTime, timeLeft, borderColor, submitStatus, handleSubmit } = useStateChallenge(
    () => { },
    600
  );

  const renderChallenge = () => {
    return (
      <div className="flex flex-col items-start justify-start w-full h-full p-6 rounded-lg  bg-gray-800">
        {isCodeChallenge ? (
          <CodeEditor />
        ) : (
          <>
            <p className="text-gray-300">
              Estás usando un bucle for para revisar una lista de nombres,
              pero notas que también procesa espacios en blanco. ¿En qué
              aspectos está la lista mal diseñada o el bucle mal configurado?
              ¿Cómo lo arreglarías?
            </p>
            <div className="mt-16 flex justify-center flex-col sm:flex-row">
              <div className="grid sm:grid-cols-3 grid-rows-3 gap-4 w-full ">
                <div className="p-2 bg-[#1F2127] rounded-lg text-center  border border-secondary shadow-lg">
                  <p className="font-bold">Flashcard 1</p>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nisi accusantium doloribus, commodi, molestiae earum
                    officiis iure autem cumque perferendis excepturi dolores
                    dolor
                  </p>
                </div>
                <div className="p-2 bg-[#1F2127] rounded-lg text-center border border-secondary shadow-lg">
                  <p className="font-bold">Flashcard 2</p>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nisi accusantium doloribus, commodi, molestiae earum
                    officiis iure autem cumque perferendis excepturi dolores
                    dolor
                  </p>
                </div>
                <div className="p-2 bg-[#1F2127] rounded-lg text-center  border border-secondary shadow-lg">
                  <p className="font-bold">Flashcard 3</p>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nisi accusantium doloribus, commodi, molestiae earum
                    officiis iure autem cumque perferendis excepturi dolores
                    dolor
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    );
  };

  const renderAnswer = () => {
    return (
      <div className="flex flex-col justify-center h-full bg-gray-800 rounded-lg p-6">
        <div className="flex justify-end">
          <div
            className={`border ${borderColor} px-4 py-2 rounded-lg text-white`}
          >
            {formatTime(timeLeft)}
          </div>
        </div>

        {/* Contenido principal: Reto o TextArea */}
        <div className="mt-4 flex flex-col items-center justify-content">
          {isCodeChallenge ? (
            // Descripción del reto para retos de código
            <div className="p-4 bg-[#1F2127] rounded-lg w-full shadow-md border border-white/70 mx-auto">
              <p className="text-gray-300">
                Estás usando un bucle for para revisar una lista de nombres,
                pero notas que también procesa espacios en blanco. ¿En qué
                aspectos está la lista mal diseñada o el bucle mal configurado?
                ¿Cómo lo arreglarías?
              </p>
            </div>
          ) : (
            <div className="relative w-full">
              {/* TextArea */}
              {inputMode === "audio" ? (
                <AudioRecorder onAudioRecorded={() => { }} />
              ) : (
                <Textarea
                  id="response"
                  value={undefined}
                  onChange={() => { }}
                  placeholder="¿Cómo resuelves este problema?"
                  className="w-full h-48 rounded-lg p-4"
                />
              )}

              {/* Botón Micrófono */}
              <div className="flex justify-end mt-2">
                <button
                  aria-label="Cambiar a grabar voz"
                  onClick={() => {
                    if (inputMode === "text") {
                      setInputMode("audio");
                    } else {
                      setInputMode("text");
                    }
                  }}
                  className="flex items-center justify-center p-2 bg-gray-700 rounded-full hover:bg-gray-600 focus:ring focus:ring-green-500"
                >
                  {inputMode === "text" ? (
                    <Mic className="h-5 w-5 text-white" />
                  ) : (
                    <KeyboardIcon className="h-5 w-5 text-white" />
                  )}
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-between mt-4">
          <Button type="submit" size="lg" variant="outline">
            Saltar reto
          </Button>
          <Button type="submit" size="lg" variant="secondary" onClick={handleSubmit}>
            Enviar
          </Button>
        </div>

        {/* Flashcards */}
        {isCodeChallenge && (
          <div className="mt-5 flex justify-center">
            <div className="grid sm:grid-cols-3 grid-rows-3 gap-4 w-full ">
              <div className="p-2 bg-[#1F2127] rounded-lg text-center  border border-secondary shadow-lg">
                <p className="text-sm font-bold">Flashcard 1</p>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  accusantium doloribus, commodi, molestiae earum officiis iure
                  autem cumque perferendis excepturi dolores dolor
                </p>
              </div>
              <div className="p-2 bg-[#1F2127] rounded-lg text-center border border-secondary shadow-lg">
                <p className="text-sm font-bold">Flashcard 2</p>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  accusantium doloribus, commodi, molestiae earum officiis iure
                  autem cumque perferendis excepturi dolores dolor
                </p>
              </div>
              <div className="p-2 bg-[#1F2127] rounded-lg text-center  border border-secondary shadow-lg">
                <p className="text-sm font-bold">Flashcard 3</p>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  accusantium doloribus, commodi, molestiae earum officiis iure
                  autem cumque perferendis excepturi dolores dolor
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="bg-primary w-full mx-auto flex  flex-col sm:flex-row">
      <Sidebar />
      <div className="bg-primary  w-full mx-auto flex flex-col p-2 mb-20">
        <div className="mt-12">
          <h1 className="text-2xl font-bold text-start">Título del Reto</h1>
        </div>
        <div className="bg-primary w-full mx-auto mt-4 grid sm:grid-cols-2 grid-rows-2 gap-4">
          {renderChallenge()}
          {/* Segunda división que es dinamica*/}

          {submitStatus === "challenge" && renderAnswer()}
          {submitStatus === "loading" && <LoadingWithFeedback />}
          {submitStatus === "feedback" && (
            <FeedbackLayout
              challengeTitle={""}
              feedbackText={""}
              followUpLinks={[]}
              onClose={function (): void {
                throw new Error("Function not implemented.");
              }}
              onRetake={function (): void {
                throw new Error("Function not implemented.");
              }}
              onGoHome={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
