import React from 'react';

interface ChallengeCardProps {
    id: string | number;
    title: string;
    icon: string;
    color: string;
    onClick: (id: string | number) => void;
}

const ChallengeCard: React.FC<ChallengeCardProps> = ({ id, title, icon, color, onClick }) => {
    return (
        <div
            role="button"
            tabIndex={0}
            onClick={() => onClick(id)}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    onClick(id);
                }
            }}
            className={`flex items-center p-4 rounded-lg shadow-md w-80 h-40 cursor-pointer ${color}`}
        >
            <img
                src={icon}
                alt={title}
                className="w-16 h-16 rounded-lg mr-4 object-cover"
            />
            <h3 className="text-base font-semibold text-primary">{title}</h3>
        </div>
    );
};

export default ChallengeCard;