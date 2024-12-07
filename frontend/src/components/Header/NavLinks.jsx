import { Link } from "react-router-dom";
import Logo from "../../images/logo.png";
const NavLinks = () => {
  return (
    <div className="flex items-center space-x-6">
      <div className="w-full flex justify-between">
        <div>
          <Link
            to="/"
            className="text-xl text-white hover:text-blue-800 transition-all duration-200"
          >
            Logo
          </Link>
        </div>
        <div className="flex gap-10 justify-around">
          <Link
            to="/Dashboard"
            className="text-sm text-white hover:text-blue-600 transition duration-200"
          >
            Dashboard
          </Link>

          <Link
            to="/contact"
            className="text-sm text-white hover:text-blue-600 transition duration-200"
          >
            Contact
          </Link>

          <Link
            to="/login"
            className="text-sm text-white hover:text-blue-600 transition duration-200"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavLinks;
