import { LoaderProps } from '../interfaces/Loader.interface';

const Loader: React.FC<LoaderProps> = ({ text, image } : LoaderProps) => {
    return (
        <div className="flex flex-col items-center justify-center bg-[#13161D] text-white py-8 px-4 md:p-8 rounded-lg">
            <img
                src={image}
                alt="Loading..."
                className="w-32 h-32 mb-4 animate-opacity"
            />
            <p className="text-lg">{text}</p>
        </div>
    );
};

export default Loader;