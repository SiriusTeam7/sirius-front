import { twMerge } from "tailwind-merge";

interface FactCardProps {
  title: string;
  subtitle: string;
  icon: string;
  iconColor: string;
}

const FactCard = ({
  title,
  subtitle,
  icon,
  iconColor,

}: FactCardProps) => {
  return (
    <div className="flex items-center w-64 p-2 border border-gray-600 rounded-lg bg-[#1B1F24]">
      <div
        className={twMerge("flex items-center justify-center w-12 h-12 rounded-md")}
        style={{ backgroundColor: iconColor }}
      >
        <img src={icon} className="w-6 h-12" />
      </div>
      <div className="ml-4">
        <div className="text-white font-semibold">{title}</div>
        <div className="text-gray-400">{subtitle}</div>
      </div>
    </div >
  );
};

export default FactCard;
