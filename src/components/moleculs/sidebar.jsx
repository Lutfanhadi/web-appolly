import { X } from "lucide-react";
import Logo from "../../../public/img/logo-appolly.png";

const Sidebar = ({ isOpen, isClose }) => {
  return (
    <div className={`bg-sidebar fixed inset-0 w-full z-50 ${isOpen ? "-translate-x-full" : "translate-x-0"} transition-transform duration-500 ease-in-out`}>
      <div className="bg-amber-100 h-full w-[50%]">
        <div className="flex justify-between items-center p-4 border-b border-black">
          <div className="flex items-center">
            <img className="h-9" src={Logo} alt="logo appolly" />
            <h1 className="font-bold text-lg md:text-2xl">APPOLLY</h1>
          </div>
          <div>
            <X onClick={isClose} className="w-6 block xl:hidden" />
          </div>
        </div>
        <ul>
          <li className="text-lg p-4">
            <a href="">Home</a>
          </li>
          <li className="text-lg p-4">
            <a href="">About</a>
          </li>
          <li className="text-lg p-4">
            <a href="">Features</a>
          </li>
          <li className="text-lg p-4">
            <a href="">Screenshot</a>
          </li>
          <li className="text-lg p-4">
            <a href="">Blog</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
