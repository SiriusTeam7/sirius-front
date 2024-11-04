import { useState } from 'react';
import curso1 from '@/assets/curso-conversacional.png';
import curso2 from '@/assets/course-english.png';
import curso3 from '@/assets/curso-java.png';
import ChallengeLayout from '@/modules/challenge/components/ChallengeLayout';
import ChallengeCard from './CallengeCard';


const challenges = [
    { id: 1, title: 'Curso: Conversaciones dificiles', icon: curso1, color: 'bg-[#CE3A40]' },
    { id: 2, title: 'Curso: Inglés básico', icon: curso2, color: 'bg-[#F3B3DA]' },
    { id: 3, title: 'Curso: Java', icon: curso3, color: 'bg-[#444C65]' },

];

const ChallengesAvailable = () => {
    const [openDialog, setOpenDialog] = useState(false);
    /*
    const [selectedChallenge, setSelectedChallenge] = useState(null);
    
    const handleCloseDialog = (dialogOpen: boolean) => {
        setOpenDialog(dialogOpen);
        //   setSelectedChallenge(null);
    };
    */

    const handleCardClick = () => {
        // setSelectedChallenge(challenge);
        setOpenDialog(true);
    };

    return (
        <div className="p-3 sm:p-4">
            <h2 className="title-large text-center sm:text-left">Retos disponibles</h2>
            <div className="flex flex-col gap-4 p-3 sm:p-5">
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
                {openDialog && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                        <div className="modal-container rounded-lg shadow-lg w-full max-w-md">
                            <ChallengeLayout setModalOpen={setOpenDialog} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ChallengesAvailable;
