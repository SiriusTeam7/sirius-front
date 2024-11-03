import { FaSearch } from "react-icons/fa"; 
import siriusLogo from '../../../assets/sirius.png';
import Avatar from '../../../assets/avatar.png';


const Header = () => {
  return (
    <header className="bg-primary w-2000 p-4 flex items-center justify-between">
      <div className="flex items-center">
        <img
          src={siriusLogo}
          alt="Logo"
          className="h-20 w-auto"
        />
      </div>

      <div className="flex items-center space-x-4">
        <button className="text-white hover:text-secondary">
          <FaSearch className="h-5 w-5" />
        </button>
        
        <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
          <img
            src={Avatar}
            alt="User profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
