import FactCard from "./FactsCard";
import { Trofeo, Timer, RetosAvailables } from '@/assets/images'
const FactsLayout = () => {

  return (
    <>
      <p className="text-lg ">{"Esto es lo que has repasado"}</p>
      <div className="flex mt-6 mb-10  gap-6 flex-wrap sm:flex-nowrap">
        <FactCard title={"2 retos"} subtitle={"Disponibles"} icon={RetosAvailables} iconBgColor={"#A59DD4"} />
        <FactCard title={"3d 12h"} subtitle={"Próximo reto"} icon={Timer} iconBgColor={"#F4B5DA"} />
        <FactCard title={"14 retos"} subtitle={"Completados"} icon={Trofeo} iconBgColor={"#B5E8B8"} />
      </div>
    </>
  );
};

export default FactsLayout;
