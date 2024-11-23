import SideNav from "./SideNav";
import { Button } from "@/modules/core/design-system/Button";
import { Textarea } from "@/modules/core/design-system/TextArea";
import { AudioRecorder } from "./AudioRecorder";
import { KeyboardIcon, Mic } from "lucide-react";
import { useState } from "react";
import CodeEditor from "./CodeEditor";
import { useStateChallenge } from "../hooks/useStateChallange";
import LoadingWithFeedback from "./Loading";
import FeedbackLayout from "@/modules/feedback/components/FeedbackLayout";
import { useLocation } from "react-router-dom";
import {
  Feedback,
  GetFeedbackRequest,
} from "@/modules/core/interfaces/Api.interface";
import { useGetFeedback } from "@/modules/core/hooks/useApiHooks";
export default function ChallengeLayout() {
  const [inputMode, setInputMode] = useState("text");
  const location = useLocation();
  const { course_id, moment, student_id } = location.state || {};
  const [feedback, setFeedback] = useState<Feedback>();

  const { mutate } = useGetFeedback();


  const submitFeedback = (feedbackRequest: GetFeedbackRequest) => {
    mutate(feedbackRequest, {
      onSuccess: (data) => {
        data.challenge_id = challenge?.id || 0;
        setSubmitStatus("feedback");
        setFeedback(data);
      },
    });
  };

  const {
    formatTime,
    timeLeft,
    borderColor,
    submitStatus,
    handleSubmit,
    handleAudioRecorded,
    isSubmitDisabled,
    response,
    handleCodeEditor,
    challenge,
    setSubmitStatus,
  } = useStateChallenge(student_id, course_id, moment, 20 * 60, submitFeedback);

  const renderChallenge = () => {
    return (
      <div className="flex flex-col items-start justify-start ">
        <div className="w-full h-full p-6 rounded-lg  bg-gray-800">
          {challenge?.is_code_challenge ? (
            <CodeEditor onCodeChange={handleCodeEditor} />
          ) : (
            <>
              <p className="text-gray-300">{challenge?.challenge}</p>
              <div className="mt-16 flex justify-center">
                <div className="grid grid-cols-3 gap-4 w-full ">
                  {renderHints()}
                </div>
              </div>
            </>
          )}
        </div>
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

        <div className="mt-4 flex flex-col items-center justify-content">
          {challenge?.is_code_challenge ? (
            <div className="p-4 bg-[#1F2127] rounded-lg w-full shadow-md border border-white/70 mx-auto">
              <p className="text-gray-300">{challenge.challenge}</p>
            </div>
          ) : (
            <div className="relative w-full">
              {/* TextArea */}
              {inputMode === "audio" ? (
                <AudioRecorder onAudioRecorded={handleAudioRecorded} />
              ) : (
                <Textarea
                  id="response"
                  value={response}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                    handleCodeEditor(e.target.value)
                  }
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
          <Button
            type="submit"
            size="lg"
            variant="secondary"
            onClick={handleSubmit}
            disabled={isSubmitDisabled}
          >
            Enviar
          </Button>
        </div>

        {/* Flashcards */}
        <div className="mt-5 flex justify-center">
          <div className="grid grid-cols-3 gap-4 w-full ">
            {challenge?.is_code_challenge && renderHints()}
          </div>
        </div>
      </div>
    );
  };

  const renderHints = () => {
    return (
      <>
        {challenge &&
          challenge!.hints!.map((hint, index) => (
            <div
              key={index}
              className="p-2 bg-[#1F2127] rounded-lg text-center  border border-secondary shadow-lg"
            >
              <p className="text-sm font-bold">Tip {index + 1}</p>
              <p className="text-sm">{hint}</p>
            </div>
          ))}
      </>
    );
  };

  return (
    <div className="bg-primary w-full mx-auto flex  flex-col sm:flex-row">
      <SideNav />
      <div className="bg-primary  w-full mx-auto flex flex-col p-2">
        <div className="mt-12">
          <h1 className="text-2xl font-bold text-start">
            Práctica lo que has aprendido
          </h1>
        </div>
        <div className="bg-primary  w-full mx-auto mt-4 grid grid-cols-2 gap-4">
          {renderChallenge()}
          {/* Segunda división que es dinamica*/}

          {submitStatus === "challenge" && renderAnswer()}
          {submitStatus === "loading" && <LoadingWithFeedback />}
          {submitStatus === "feedback" && (
            <FeedbackLayout feedback={feedback} challenge_id={challenge?.id} />
          )}
        </div>
      </div>
    </div>
  );
}
