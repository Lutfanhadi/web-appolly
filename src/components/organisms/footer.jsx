import { Email, Facebook, Instagram, Phone, Send, Twitter, Youtube } from "../atoms/icons";

const Footer = () => {
  return (
    <div className="bg-[#232233] relative mt-36">
      <div className="absolute left-0 right-0 -top-[15.5%] mx-auto max-w-6xl w-full px-4 md:px-10 md:-top-[17%]">
        <div className="flex flex-col bg-white rounded-xl text-center py-7 drop-shadow-2xl md:py-16 md:justify-center md:items-center md:flex-row md:w-full">
          <div className="flex flex-col items-center gap-5 md:flex-row md:border-r-4 md:pr-5 lg:pr-10">
            <div className="bg-primary p-[15px] rounded-full text-white">
              <Email />
            </div>
            <p className="text-xl font-medium border-b-4 pb-5 uppercase md:pb-0 md:border-b-0 md:text-[16px] lg:text-xl">
              info.design@gmail.com
            </p>
          </div>
          <div className="flex flex-col items-center gap-5 mt-7 md:mt-0 md:pl-5 md:flex-row lg:pl-10">
            <div className="bg-primary p-[15px] rounded-full text-white">
              <Phone />
            </div>
            <p className="text-xl font-medium md:text-[16px] lg:text-xl">
              +880 321 655 9985
            </p>
          </div>
        </div>
      </div>
      <div className="text-white pt-56 flex flex-col gap-14 max-w-6xl mx-auto px-4 md:flex-row md:px-10 md:justify-between md:pt-48">
        <div className="md:w-[213px] lg:w-[270px]">
          <h1 className="text-2xl font-bold">Logo</h1>
          <p className="font-normal text-[16px] pt-2.5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
          </p>
          <div className="flex gap-[30px] pt-9 md:gap-5 lg:gap-7">
            <div className="border-r-2 pr-[30px] md:pr-5 lg:pr-7">
              <Facebook />
            </div>
            <div className="border-r-2 pr-[30px] md:pr-5 lg:pr-7">
              <Instagram />
            </div>
            <div className="border-r-2 pr-[30px] md:pr-5 lg:pr-7">
              <Twitter />
            </div>
            <div>
              <Youtube />
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-bold">quick link</h1>
          <ul className="flex flex-col text-[16px] pt-2.5 gap-3">
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Features</a>
            </li>
            <li>
              <a href="">Screenshot</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
          </ul>
        </div>
        <div className="md:w-[213px] lg:w-[270px]">
          <h1 className="text-2xl font-bold">news letter</h1>
          <p className="font-normal text-[16px] pt-2.5 ">
            Subscribe our newsletter to get our latest update & news
          </p>

          <div className="relative flex mt-8">
            <input
              className="bg-white text-black w-full rounded-xl py-3.5 pl-4 border-2 border-white focus:border-primary focus:outline-none"
              type="text"
              placeholder="Your email address"
            />
            <div className="bg-primary w-fit py-2.5 px-3 rounded-xl absolute top-1/2 -translate-y-1/2 right-1">
              <Send />
            </div>
          </div>
        </div>
      </div>
      <footer className="mt-14 max-w-6xl mx-auto px-4 md:px-10">
        <p className="text-white text-center text-[16px] py-6 border-t-2">
          &copy; Copyright 2021 .APPOLLY. All Right Reserved.
        </p>
      </footer>
    </div>
  );
};


export default Footer;
