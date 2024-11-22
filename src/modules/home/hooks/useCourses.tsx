import { useGetCourses } from "@/modules/core/hooks/useApiHooks";
import { GetFeedbackRequest } from "@/modules/core/interfaces/Api.interface";
import { Challenge } from "@/modules/core/interfaces/Shared.interface";
import { useEffect, useState } from "react";

export function useCourses() {

    const [openDialog, setOpenDialog] = useState(false);
    const [selectedChallenge, setSelectedChallenge] = useState<Challenge | null>(null);
    const [dialogStatus, setDialogStatus] = useState<'challenge' | 'loading' | 'feedback' | 'error'>('challenge')
    const { data: courses } = useGetCourses();

    console.log('courses', courses);
    

    const handleCloseDialog = () => {
        setOpenDialog(false);
        setSelectedChallenge(null);
        setDialogStatus('challenge');
    }

    const handleChallengeSubmit = (inputType: string, response: string | Blob) => {
        setDialogStatus('loading');


        if (inputType === 'text') {
            const feedbackRequest: GetFeedbackRequest = {
                student_id: 1,
                challenge_id: selectedChallenge?.id as number,
                answer_type: 'text',
                answer_text: response as string,
            };
         //   mutation.mutate(feedbackRequest);
        } else if (inputType === 'audio') {

            const audioFile = new File([response], 'response.mp3', { type: 'audio/mp3' })
            const feedbackRequest: GetFeedbackRequest = {
                student_id: 1,
                challenge_id: selectedChallenge?.id as number,
                answer_type: 'audio',
                answer_audio: audioFile,
            };
          //  mutation.mutate(feedbackRequest);
        }

    };


    const handleCardClick = (id: string | number) => {
        setOpenDialog(true);
       // setSelectedChallenge(challenges?.find((challenge) => challenge.id === id) || null);
    }

    const handleRetry = () => {
        setDialogStatus('challenge');
        setOpenDialog(true);
    }

    return {
        openDialog,
        selectedChallenge,
        dialogStatus,
        courses,
        handleCloseDialog,
        handleChallengeSubmit,
        handleCardClick,
        handleRetry,
    };
}
