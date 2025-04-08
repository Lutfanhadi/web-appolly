import { Facebook, Instagram, Twitter, Youtube } from "./icons";

const ParentOurReativeTeam = ({ img, name, job, description }) => {
  return (
    <div className="bg-white drop-shadow-lg rounded-xl text-center py-10 px-4">
      <div>
        <img
          className="outline-4 outline-offset-8 outline-dashed rounded-full w-fit h-fit mx-auto outline-primary md:w-40 md:h-40"
          src={img}
          alt="img card"
        />
      </div>
      <div className="mt-16">
        <h1 className="text-3xl uppercase font-bold text-[#232233] md:text-xl lg:text-3xl">
          {name}
        </h1>
        <h2 className="text-xl uppercase font-semibold text-[#6C6C72] md:text-lg lg:text-xl">
          {job}
        </h2>
        <p className="mt-3.5 text-[16px] text-[#6C6C72]">{description}</p>
      </div>
      <div className="flex items-center mt-7 justify-around">
        <div className="border-r-2 border-black pr-7 md:pr-3.5 lg:pr-7">
          <Facebook />
        </div>
        <div className="border-r-2 border-black pr-7 md:pr-3.5 lg:pr-7">
          <Instagram />
        </div>
        <div className="border-r-2 border-black pr-7 md:pr-3.5 lg:pr-7">
          <Twitter />
        </div>
        <div>
          <Youtube />
        </div>
      </div>
    </div>
  );
};
export default ParentOurReativeTeam;