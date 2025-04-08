import { Email, Facebook, Instagram, Phone, Send, Twitter, Youtube } from "../atoms/icons";

export const Footer = () => {
  return (
    <div className="bg-[#232233] relative mt-36">
      <div className="bg-white rounded-xl text-center w-fit left-1/2 -translate-x-1/2 px-12 py-7 drop-shadow-2xl absolute -top-[15.5%]">
        <div className="flex flex-col items-center gap-5">
          <div className="bg-primary p-[15px] rounded-full text-white">
            <Email />
          </div>
          <p className="text-xl font-medium border-b-4 pb-5 uppercase">
            info.design@gmail.com
          </p>
        </div>
        <div className="flex flex-col items-center gap-5 mt-7">
          <div className="bg-primary p-[15px] rounded-full text-white">
            <Phone />
          </div>
          <p className="text-xl font-medium">+880 321 655 9985</p>
        </div>
      </div>
      <div className="text-white pt-56 flex flex-col gap-14 mx-4">
        <div>
          <h1 className="text-2xl font-bold">Logo</h1>
          <p className="font-normal text-[16px] pt-2.5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
          </p>
          <div className="flex gap-[30px] pt-9">
            <div className="border-r-2 pr-[30px]">
              <Facebook />
            </div>
            <div className="border-r-2 pr-[30px]">
              <Instagram />
            </div>
            <div className="border-r-2 pr-[30px]">
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
        <div>
          <h1 className="text-2xl font-bold">news letter</h1>
          <p className="font-normal text-[16px] pt-2.5 ">
            Subscribe our newsletter to get our latest update & news
          </p>

          <div className="relative flex mt-8">
            <input
              className="bg-white text-black w-full rounded-xl py-3.5 pl-4"
              type="text"
              placeholder="Your email address"
            />
            <div className="bg-primary w-fit py-2.5 px-3 rounded-xl absolute top-1/2 -translate-y-1/2 right-1">
              <Send />
            </div>
          </div>
        </div>
      </div>
      <footer className="mt-14 mx-4">
        <p className="text-white text-center text-[16px] py-6 border-t-2">&copy; Copyright 2021 .Ojjomedia. All Right Reserved.</p>
      </footer>
    </div>
  );
};
