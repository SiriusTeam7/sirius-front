import { useGetChallenge } from "@/modules/core/hooks/useApiHooks";
import {
  GetChallengeRequest,
  GetFeedbackRequest,
} from "@/modules/core/interfaces/Api.interface";
import { Challenge } from "@/modules/core/interfaces/Shared.interface";
import { useEffect, useState } from "react";

export function useStateChallenge(
  student_id: number,
  course_id: number,
  moment: number,
  initialTime: number,
  submitFeedback: (feedbackRequest: GetFeedbackRequest) => void
) {
  const [inputMode, setInputMode] = useState<"text" | "audio" | "code">("code");
  const [audioBlob, setAudioBlob] = useState<Blob>(new Blob());
  const [response, setResponse] = useState("");
  const [submitStatus, setSubmitStatus] = useState<
    "challenge" | "loading" | "feedback"
  >("challenge");
  const { mutate } = useGetChallenge();
  const [challenge, setChallenge] = useState<Challenge | null>(null);
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    if (!challenge) {
      const challengeData: GetChallengeRequest = { student_id, course_id };
      mutate(challengeData, {
        onSuccess: (data) => {
          initialTime = data.is_code_challenge ? 40 * 60 : 15 * 60;
          setChallenge(data);
        },
      });
    }
  }, [mutate, challenge]);

  useEffect(() => {
    if (challenge?.is_code_challenge) {
      setTimeLeft(40 * 60);
    } else {
      setTimeLeft(15 * 60);
    }
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

  const handleCodeEditor = (code: string) => {
    setResponse(code);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setSubmitStatus("loading");
    let feedbackRequest: GetFeedbackRequest;
    if (challenge?.is_code_challenge) {
      feedbackRequest = {
        challenge_id: challenge.id,
        answer_type: "code",
        answer_text: response as string,
        student_id: student_id,
        moment: moment,
      };
    } else if (inputMode === "audio") {
      const audioFile = new File([audioBlob], "response.mp3", {
        type: "audio/mp3",
      });
      feedbackRequest = {
        student_id: 1,
        challenge_id: challenge?.id,
        answer_type: "audio",
        answer_audio: audioFile,
        moment: moment,
      };
    } else {
      feedbackRequest = {
        answer_type: inputMode,
        answer_text: response as string,
        student_id: student_id,
        challenge_id: challenge?.id,
        moment: moment,
      };
    }
    
    submitFeedback(feedbackRequest);
  };

  const isSubmitDisabled =
    (inputMode === "text" && !response) ||
    (inputMode === "audio" && !audioBlob);

  return {
    formatTime,
    timeLeft,
    borderColor,
    inputMode,
    handleCodeEditor,
    submitStatus,
    setInputMode,
    handleSubmit,
    audioBlob,
    handleAudioRecorded,
    response,
    setResponse,
    isSubmitDisabled,
    challenge,
    setSubmitStatus
  };
}
