import { ChallengeCover } from "../interfaces/Shared.interface";
import { completedIcon, Next, Time } from "@/assets/images";

interface ChallengeCardProps {
  challenge: ChallengeCover;
}

const ChallengeCard: React.FC<ChallengeCardProps> = ({
  challenge,
}: ChallengeCardProps) => {
  const renderHeader = () => {
    return (
      <div className="flex items-center justify-between mb-4">
        <div className=" bg-[#133962] px-3 py-1 rounded-lg text-sm font-semibold text-[#6CC3EF]">
          PRIMER REPASO
        </div>
        {challenge.status === 2 && (
          <div className=" bg-secondary px-3 py-1 rounded-lg text-sm font-semibold text-black">
            NUEVO
          </div>
        )}

        {challenge.status === 1 && (
          <div className=" bg-[#404451] px-3 py-1 rounded-lg text-sm  text-white">
            6.8/10
          </div>
        )}
      </div>
    );
  };

  const renderFooter = () => {
    if (challenge.status === 1) {
      return (
        <>
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center ">
              <img
                src={completedIcon}
                alt="Reto completado"
                className="w-4 h-4"
              />
              <p>Completado</p>
            </div>
            <button
              className="flex items-center  gap-2  hover:underline"
              aria-label="Ir al reto"
            >
              <p>IR AL RETO</p>
              <img src={Next} className="w-4 h-4" alt="Ir al reto" />
            </button>
          </div>
        </>
      );
    }

    if (challenge.status === 2) {
      return (
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center "></div>
          <button
            className="flex items-center space-x-2  hover:underline"
            aria-label="Ir al reto"
          >
            <p>IR AL RETO</p>
            <img src={Next} className="w-4 h-4" alt="Ir al reto" />
          </button>
        </div>
      );
    }

    return null;
  };

  if (challenge.status === 3) {
    return (
      <div className="bg-[#1F2127] text-white w-[300px] min-w-[300px] h-36 rounded-lg shadow-md p-6 w-80 flex items-center space-x-4 border border-white/70">
        <img src={Time} className="w-4 h-4" alt="Ir al reto" />
        <h1 className="font-bold">Proximo reto en 3d 12h</h1>
      </div>
    );
  }

  return (
    <div className="bg-[#1F2127] text-white w-[300px] min-w-[300px] rounded-lg shadow-md p-6 w-80 flex flex-col  border border-white/70">
      {renderHeader()}
      {renderFooter()}
    </div>
  );
};

export default ChallengeCard;
