import { useState } from 'react';
import siriusImage from '@/assets/sirius.png'; // Adjust the path as needed
import ChallengeLayout from '@/modules/challenge/components/ChallengeLayout';
import ChallengeCard from './CallengeCard';
import { Challenge } from '@interfaces/Shared.interface';
import FeedbackLayout from '@/modules/feedback/components/FeedbackLayout';
import Loader from '@/modules/core/components/Loader';
import { ChallengesAvailableProps } from '@/modules/core/interfaces/ChallengesAvailable.interface';
import { useGetFeedback } from '@/modules/core/hooks/useApiHooks';
import { GetFeedbackRequest } from '@/modules/core/interfaces/Api.interface';

const ChallengesAvailable = ({ challenges }: ChallengesAvailableProps) => {
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedChallenge, setSelectedChallenge] = useState<Challenge | null>(null);
    const [dialogStatus, setDialogStatus] = useState<'challenge' | 'loading' | 'feedback'>('challenge')
    const mutation = useGetFeedback();

    const handleCloseDialog = () => {
        setOpenDialog(false);
        setSelectedChallenge(null);
        setDialogStatus('challenge');
    }

    const handleChallengeSubmit = (inputType: string, response: string | Blob) => {
        // Call API to submit the challenge
        console.log('Submitted response:', response);
        setDialogStatus('loading');


        if (inputType === 'text') {
            const feedbackRequest: GetFeedbackRequest = {
                student_id: 1,
                challenge_id: selectedChallenge?.id as number,
                answer_type: 'text',
                answer_text: response as string,
            };
            mutation.mutate(feedbackRequest);
        } else if (inputType === 'audio') {
            const feedbackRequest: GetFeedbackRequest = {
                student_id: 1,
                challenge_id: selectedChallenge?.id as number,
                answer_type: 'audio',
                answer_audio: response as Blob,
            };
            mutation.mutate(feedbackRequest);
        }

        setDialogStatus('feedback');



    };


    const handleCardClick = (id: string | number) => {
        setOpenDialog(true);
        setSelectedChallenge(challenges?.find((challenge) => challenge.id === id) || null);
    }

    const handleRetry = () => {
        setDialogStatus('challenge');
        setOpenDialog(true);
    }



    return (
        <div className="p-3 sm:p-4">
            <h2 className="title-large text-center sm:text-left">Retos disponibles</h2>
            <div className="flex flex-col sm:flex-row justify-center sm:justify-start items-center gap-4 p-3 sm:p-5">
                {challenges?.map((challenge) => (
                    <ChallengeCard
                        id={challenge.id}
                        key={challenge.id}
                        title={challenge.course_title}
                        icon={challenge.icon}
                        color={challenge.color}
                        onClick={handleCardClick}
                    />
                ))}
            </div>
            {openDialog && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="modal-container rounded-lg shadow-lg w-full max-w-md">
                        {dialogStatus === 'challenge' && (<ChallengeLayout onClose={handleCloseDialog} selectedChallenge={selectedChallenge} onSubmit={handleChallengeSubmit} />)}
                        {dialogStatus === 'loading' && (<Loader text="Estamos procesando tu respuesta..." image={siriusImage} />)}
                        {dialogStatus === 'feedback' && (<FeedbackLayout
                            onClose={handleCloseDialog}
                            challengeTitle={selectedChallenge?.course_title || ''}
                            feedbackText={mutation.data?.feedback || ''}
                            followUpLinks={[
                                { title: "Link 1", url: "#" },
                                { title: "Link 2", url: "#" },
                                { title: "Link 3", url: "#" },
                            ]}
                            onRetake={handleRetry}
                            onGoHome={handleCloseDialog}
                        />)}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChallengesAvailable;
