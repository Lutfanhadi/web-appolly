import { Menu } from "lucide-react";
import Logo from "../../../public/img/logo-appolly.png";

const StickyNavbar = ({ menuCLik, activeSection }) => {
  const linkClass = (id) =>
    activeSection === id ? "text-secondary font-bold" : "hover:text-secondary";

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md animate-slideDown">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Menu
            onClick={menuCLik}
            className="w-6 block lg:hidden cursor-pointer"
          />
          <img className="h-8" src={Logo} alt="logo" />
          <h1 className="font-bold text-xl">APPOLLY</h1>
        </div>

        <ul className="hidden lg:flex gap-8 font-medium">
          <li>
            <a className={linkClass("home")} href="#home">
              Home
            </a>
          </li>
          <li>
            <a className={linkClass("about")} href="#about">
              About
            </a>
          </li>
          <li>
            <a className={linkClass("features")} href="#features">
              Features
            </a>
          </li>
          <li>
            <a className={linkClass("screenshot")} href="#screenshot">
              Screenshot
            </a>
          </li>
          <li>
            <a className={linkClass("blog")} href="#blog">
              Blog
            </a>
          </li>
        </ul>

        <button className="py-2 px-4 bg-primary hover:bg-secondary rounded text-white font-semibold text-sm">
          Download
        </button>
      </div>
    </div>
  );
};


export default StickyNavbar;
