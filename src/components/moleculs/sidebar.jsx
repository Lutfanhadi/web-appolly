import { useState } from "react";
import { X } from "lucide-react";
import Logo from "../../../public/img/logo-appolly.png";
import {
  Email,
  Facebook,
  Instagram,
  Phone,
  Twitter,
  Youtube,
} from "../atoms/icons";

const Sidebar = ({ isOpen, isClose }) => {
  const [activeMenu, setActiveMenu] = useState("home");

  const menus = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "features", label: "Features" },
    { id: "screenshot", label: "Screenshot" },
    { id: "blog", label: "Blog" },
  ];

  return (
    <div
      className={`bg-sidebar fixed inset-0 w-full z-50 backdrop-blur-sm ${
        isOpen ? "-translate-x-full" : "translate-x-0"
      } transition-transform duration-500 ease-in-out`}
    >
      <div className="bg-amber-100 h-full w-[70%]">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-black">
          <div className="flex items-center">
            <img className="h-9" src={Logo} alt="logo appolly" />
            <h1 className="font-bold text-lg md:text-2xl">APPOLLY</h1>
          </div>
          <div>
            <X
              onClick={isClose}
              className="w-6 block xl:hidden cursor-pointer"
            />
          </div>
        </div>

        {/* Menu */}
        <ul>
          {menus.map((menu) => (
            <li key={menu.id} className="text-lg">
              <a
                href={`#${menu.id}`}
                onClick={() => {
                  setActiveMenu(menu.id);
                  isClose(); // optional: tutup sidebar setelah klik
                }}
                className={`block p-2 xs:p-4 transition-all duration-300
                  ${
                    activeMenu === menu.id
                      ? "bg-secondary text-white font-semibold"
                      : "text-black hover:bg-blue-200"
                  }
                `}
              >
                {menu.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 px-2 py-3 space-y-3 xs:px-3 xs:py-6 xs:space-y-5">
          <div className="flex items-center gap-4 text-gray-600">
            <Email />
            <p className="text-sm">info@youremail.com</p>
          </div>

          <div className="flex items-center gap-4 text-gray-600">
            <Phone />
            <p className="text-sm">(480) 555-0103</p>
          </div>

          <div className="flex items-center gap-5 text-gray-600">
            <Facebook />
            <Instagram />
            <Twitter />
            <Youtube />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
