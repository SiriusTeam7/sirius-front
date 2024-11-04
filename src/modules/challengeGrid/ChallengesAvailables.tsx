import { useState } from 'react';
import curso1 from '@/assets/curso-conversacional.png';
import curso2 from '@/assets/course-english.png';
import curso3 from '@/assets/curso-java.png'
import ChallengeLayout from '@/modules/challenge/components/ChallengeLayout';


const challenges = [
    { id: 1, title: 'Curso: Conversaciones dificiles', icon: curso1, color: 'bg-[#CE3A40]' },
    { id: 2, title: 'Curso: Inglés básico', icon: curso2, color: 'bg-[#F3B3DA]' },
    { id: 3, title: 'Curso: Java', icon: curso3, color: 'bg-[#444C65]' }
];

const ChallengesAvailable = () => {
    const [openDialog, setOpenDialog] = useState(false);
    /*
    const [selectedChallenge, setSelectedChallenge] = useState(null);

    const handleCloseDialog = () => {
        setOpenDialog(false);
     //   setSelectedChallenge(null);
    };
    */

    const handleCardClick = () => {
        // setSelectedChallenge(challenge);
        setOpenDialog(true);
    };

    return (
        <div className="p-4">
            <h2 className="title-large">Retos disponibles</h2>
            <div className="flex space-x-4 p-5 overflow-x-auto">
                {challenges.map((challenge) => (
                    <div
                        key={challenge.id}
                        onClick={() => { handleCardClick() }}
                        className={`flex items-center p-4 rounded-lg shadow-md w-80 h-40 cursor-pointer ${challenge.color}`}

                    >
                        <img
                            src={challenge.icon}
                            alt={challenge.title}
                            className="w-16 h-16 rounded-lg mr-4 object-cover"
                        />
                        <h3 className="text-base font-semibold text-primary">{challenge.title}</h3>
                    </div>
                ))}

                {openDialog && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                        <div className=" rounded-lg shadow-lg w-full max-w-md">
                            <ChallengeLayout />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ChallengesAvailable;
