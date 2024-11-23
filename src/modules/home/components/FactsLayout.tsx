import { Link } from "react-router-dom";
import FactCard from "./FactsCard";
import { Trofeo, Timer, RetosAvailables, ChartArea } from '@/assets/images'
const FactsLayout = () => {

  return (
    <>
      <p className="text-lg ">{"Esto es lo que has repasado"}</p>
      <div className="flex mt-6 mb-10 gap-6">
        <FactCard title={"2 retos"} subtitle={"Disponibles"} icon={RetosAvailables} iconColor={"#A59DD4"} />
        <FactCard title={"3d 12h"} subtitle={"Próximo reto"} icon={Timer} iconColor={"#F4B5DA"} />
        <FactCard title={"14 retos"} subtitle={"Completados"} icon={Trofeo} iconColor={"#B5E8B8"} />
        {/* Fact card with access to /leaderboard */}
        <Link to="/leaderboard" className="w-64">
          <FactCard title={"Ver leaderboard"} subtitle={"Ranking"} icon={ChartArea} iconColor={"#FABFA2"} />
        </Link>
      </div>
    </>
  );
};

export default FactsLayout;
