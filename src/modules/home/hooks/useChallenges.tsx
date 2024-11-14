import { useGetFeedback } from "@/modules/core/hooks/useApiHooks";
import { GetFeedbackRequest } from "@/modules/core/interfaces/Api.interface";
import { Challenge } from "@/modules/core/interfaces/Shared.interface";
import { useState } from "react";

export function useChallenges(challenges: Challenge[]  = []) {
    
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedChallenge, setSelectedChallenge] = useState<Challenge | null>(null);
    const [dialogStatus, setDialogStatus] = useState<'challenge' | 'loading' | 'feedback' | 'error'>('challenge');
    const mutation = useGetFeedback(setDialogStatus);

    const handleCloseDialog = () => {
        setOpenDialog(false);
        setSelectedChallenge(null);
        setDialogStatus('challenge');
    };

    const handleChallengeSubmit = (inputType: string, response: string | Blob) => {
        setDialogStatus('loading');

        const feedbackRequest: GetFeedbackRequest = {
            student_id: 1,
            challenge_id: selectedChallenge?.id as number,
            answer_type: inputType,
            answer_text: inputType === 'text' ? (response as string) : undefined,
            answer_audio: inputType === 'audio' ? (response as Blob) : new Blob(),
        };
        mutation.mutate(feedbackRequest);
    };

    const handleCardClick = (id: string | number) => {
        setOpenDialog(true);
        setSelectedChallenge(challenges!.find((challenge) => challenge.id === id) || null);
    };

    const handleRetry = () => {
        setDialogStatus('challenge');
        setOpenDialog(true);
    };

    return {
        openDialog,
        selectedChallenge,
        dialogStatus,
        mutation,
        handleCloseDialog,
        handleChallengeSubmit,
        handleCardClick,
        handleRetry,
    };
}
