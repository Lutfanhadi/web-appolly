import {
  Email,
  Facebook,
  Instagram,
  Phone,
  Twitter,
  Youtube,
} from "../atoms/icons";

const SosialMedia = () => {
  return (
    <div className="hidden text-white text-lg md:flex justify-between px-10 pt-6 lg:px-[135px]">
      <div className="flex gap-12">
        <div className="flex gap-4">
          <Email />
          <p>info@youremail.com</p>
        </div>
        <div className="flex gap-4">
          <Phone />
          <p>(480) 555-0103</p>
        </div>
      </div>
      <div className="flex gap-7">
        <Facebook />
        <Instagram />
        <Twitter />
        <Youtube />
      </div>
    </div>
  );
};

export default SosialMedia;
