
interface ChallengeCardProps {
    id: string | number;
    title: string;
    icon: string;
    color: string;
    onClick: (id: string | number) => void;
}

const ChallengeCard: React.FC<ChallengeCardProps> = ({ id, title, icon, color, onClick } : ChallengeCardProps) => {
    return (
        <div className="bg-[#0F172A] text-white rounded-lg shadow-md p-4 w-80">
 <div className="text-sm text-red-500 font-semibold mb-2">RUTA</div>
      <h3 className="text-xl font-bold mb-4">English Learning</h3>
      <div className="flex items-center space-x-2">
        {/* Íconos */}
        {/* Texto de progreso */}
        <span className="text-sm">6% Completada</span>
      </div>        </div>
    );
};

export default ChallengeCard;