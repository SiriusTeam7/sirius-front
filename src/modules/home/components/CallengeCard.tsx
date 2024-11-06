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
            className={`flex flex-row gap-2 items-center p-4 rounded-lg shadow-md w-full sm:w-96 h-40 sm:h-40 cursor-pointer bg-[${color}]`}
            style={{
                minWidth: '200px',
                minHeight: '160px',
            }}
        >
            <img
                src={icon}
                alt={title}
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg mb-2 sm:mb-0 mr-0 sm:mr-4 object-cover"
            />
            <h3 className="text-center sm:text-left text-base font-semibold text-primary">{title}</h3>
        </div>
    );
};

export default ChallengeCard;