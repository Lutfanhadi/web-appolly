import Logo from "../../../public/img/logo-appolly.png"
import { Menu } from "../atoms/icons";


export const Navbar = () => {
    return (
      <nav className="relative px-4 pt-10">
        <div className="flex items-center justify-between bg-white p-2 rounded-sm">
          <Menu />
          <button className="py-3 px-1.5 bg-primary rounded-sm text-white font-semibold text-xs">
            Download
          </button>
        </div>
        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 flex items-center w-fit py-6 px-2.5 bg-white rounded-lg">
          <img className="h-9" src={Logo} alt="logo appolly" />
          <h1 className="font-bold text-xl">APPOLLY</h1>
        </div>
      </nav>
    );
}