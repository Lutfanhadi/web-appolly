import { Menu } from "lucide-react";
import Logo from "../../../public/img/logo-appolly.png";
import { useEffect, useState } from "react";
import StickyNavbar from "./StickyNavbar";
import { Link } from "react-router-dom";

const sections = ["home", "about", "features", "screenshot", "blog"];

const Navbar = ({ menuCLik }) => {
  const [showSticky, setShowSticky] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      // Sticky logic
      if (window.scrollY > 120) {
        setShowSticky(true);
      } else {
        setShowSticky(false);
      }

      // Active link logic
      const scrollPos = window.scrollY + 150;

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const offsetTop = section.offsetTop;
          const height = section.offsetHeight;

          if (scrollPos >= offsetTop && scrollPos < offsetTop + height) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (id) =>
    activeSection === id ? "text-secondary font-bold" : "hover:text-secondary";

  return (
    <div>
      {showSticky && (
        <StickyNavbar menuCLik={menuCLik} activeSection={activeSection} />
      )}

      <nav className="relative max-w-6xl mx-auto px-4 pt-10 md:px-10 font-lato">
        <div className="flex items-center justify-between bg-white p-1 xs:p-2 rounded-sm text-xl font-medium pl-2 lg:pl-12">
          <div>
            <Menu onClick={menuCLik} className="block w-3 xs:w-6 lg:hidden" />
            <ul className="hidden items-center gap-10 lg:flex">
              <Link className={linkClass("home")} to="/">Home</Link>
              <Link className={linkClass("about")} to="/about">About</Link>
              <Link className={linkClass("features")} to="/features">Features</Link>
            </ul>
          </div>

          <div className="flex items-center gap-10">
            <ul className="hidden items-center gap-10 lg:flex">
              <Link className={linkClass("features")} to="/features">Features</Link>
              <Link className={linkClass("screenshot")} to="/screenshot">Screenshot</Link>
              <Link className={linkClass("blog")} to="/blog">Blog</Link>
            </ul>

            <button className="bg-primary hover:bg-secondary rounded-sm text-white font-semibold text-[8px] xs:text-xs py-2 px-1 xs:py-3 xs:px-1.5 md:text-xl">
              Download
            </button>
          </div>
        </div>

        <div className="absolute top-8 xs:top-7 left-1/2 transform -translate-x-1/2 flex items-center w-fit py-4 px-1 xs:py-5 xs:px-1.5 bg-white rounded-lg md:py-7 md:px-2">
          <img className="h-5 xs:h-9" src={Logo} alt="logo appolly" />
          <h1 className="font-bold text-sm xs:text-lg md:text-2xl">APPOLLY</h1>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
