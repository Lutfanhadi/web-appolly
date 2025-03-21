import Logo from "../../../public/img/logo-appolly.png"
import { Menu } from "../atoms/icons";


const Navbar = () => {
    return (
      <nav className="relative px-4 pt-10 md:px-10 lg:px-[135px]">
        <div className="flex items-center justify-between bg-white p-2 rounded-sm text-xl font-medium pl-2 lg:pl-12">
          <div>
            <Menu />
            <ul className="hidden items-center gap-10 lg:flex">
              <li>
                <a
                  className="hover:border-b-2 hover:border-secondary hover:text-secondary"
                  href=""
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="hover:border-b-2 hover:border-secondary hover:text-secondary"
                  href=""
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="hover:border-b-2 hover:border-secondary hover:text-secondary"
                  href=""
                >
                  Features
                </a>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-10">
            <ul className="hidden items-center gap-10 lg:flex">
              <li>
                <a
                  className="hover:border-b-2 hover:border-secondary hover:text-secondary"
                  href=""
                >
                  Screenshot
                </a>
              </li>
              <li>
                <a
                  className="hover:border-b-2 hover:border-secondary hover:text-secondary"
                  href=""
                >
                  Blog
                </a>
              </li>
            </ul>
            <button className="py-3 px-1.5 bg-primary hover:bg-secondary rounded-sm text-white font-semibold text-xs md:text-xl">
              Download
            </button>
          </div>
        </div>
        <div className="absolute top-7 left-1/2 transform -translate-x-1/2 flex items-center w-fit py-5 px-1.5 bg-white rounded-lg md:py-7 md:px-2">
          <img className="h-9" src={Logo} alt="logo appolly" />
          <h1 className="font-bold text-lg md:text-2xl">APPOLLY</h1>
        </div>
      </nav>
    );
}

export default Navbar;