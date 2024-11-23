interface FactCardProps {
  title: string;
  subtitle: string;
  icon: string;
  iconBgColor: string;
}

const FactCard = ({
  title,
  subtitle,
  icon,
  iconBgColor,
}: FactCardProps) => {
  return (
    <div className="flex items-center w-64 p-2  bg-[#1B1F24] border border-gray-600 rounded-lg">
      <div
        className={`flex items-center justify-center w-12 h-12 bg-[${iconBgColor}] rounded-md`}
      >
        <img src={icon} className="w-6 h-12" />
      </div>
      <div className="ml-4">
        <div className="text-white font-semibold">{title}</div>
        <div className="text-gray-400">{subtitle}</div>
      </div>
    </div>
  );
};

export default FactCard;
