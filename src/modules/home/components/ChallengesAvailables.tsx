import { useState } from 'react';
import curso1 from '@/assets/curso-conversacional.png';
import curso2 from '@/assets/course-english.png';
import curso3 from '@/assets/curso-java.png';
import siriusImage from '@/assets/sirius.png'; // Adjust the path as needed
import ChallengeLayout from '@/modules/challenge/components/ChallengeLayout';
import ChallengeCard from './CallengeCard';
import { Challenge } from '@interfaces/Shared.interface';
import FeedbackLayout from '@/modules/feedback/components/FeedbackLayout';
import Loader from '@/modules/core/components/Loader';


const challenges: Challenge[] = [
    { id: 1, title: 'Curso: Conversaciones dificiles', icon: curso1, color: 'bg-[#CE3A40]' },
    { id: 2, title: 'Curso: Inglés básico', icon: curso2, color: 'bg-[#F3B3DA]' },
    { id: 3, title: 'Curso: Java', icon: curso3, color: 'bg-[#444C65]' },

];

const ChallengesAvailable = () => {
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedChallenge, setSelectedChallenge] = useState<Challenge | null>(null);


    const [dialogStatus, setDialogStatus] = useState<'challenge' | 'loading' | 'feedback'>('challenge')

    const handleCloseDialog = () => {
        setOpenDialog(false);
        setSelectedChallenge(null);
        setDialogStatus('challenge');
    }

    const handleChallengeSubmit = () => {
        console.log('Challenge Submitted');
        setDialogStatus('loading');
        setTimeout(() => {
            setDialogStatus('feedback');
            console.log('Feedback Received');
        }, 2000);
    };


    const handleCardClick = (id: string | number) => {
        setOpenDialog(true);
        setSelectedChallenge(challenges.find((challenge) => challenge.id === id) || null);
    }

    const handleRetry = () => {
        setDialogStatus('challenge');
        setOpenDialog(true);
    }



    return (
        <div className="p-4">
            <h2 className="title-large">Retos disponibles</h2>
            <div className="flex space-x-4 p-5 overflow-x-auto">
                {challenges.map((challenge) => (
                    <ChallengeCard
                        id={challenge.id}
                        key={challenge.id}
                        title={challenge.title}
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
                            challengeTitle={selectedChallenge?.title || ''}
                            feedbackText="Feedback Text"
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
