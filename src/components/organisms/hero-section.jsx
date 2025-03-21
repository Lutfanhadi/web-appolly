import Navbar from "../moleculs/navbar";
import PlayStore from "../../../public/img/img-playstore.png";
import AppleStore from "../../../public/img/img-applestore.png";
import Phone from "../../../public/img/img-phone.png";
import SosialMedia from "../moleculs/sosial-media";

const HeroSection = () => {
  return (
    <section className="min-h-screen w-full">
      <div className="w-full h-full bg-[url(/img/Background-img.png)] bg-cover bg-center md:h-[1024px] lg:h-[850px]">
        <SosialMedia />
        <Navbar/>
        <div className="flex flex-col gap-10 mt-24 mx-4 md:mx-10 md:flex-row md:items-end md:gap-24 md:mt-[240px] lg:mt-16 lg:mx-[135px] lg:gap-44">
          <div className="md:w-[55%] lg:w-[50%]">
            <div className="relative w-11/12 ml-auto h-[358px] bg-secondary p-3 md:ml-full lg:h-[435px]">
              <div className="w-full h-full bg-primary"></div>
              <div className="absolute top-1/2 -translate-y-1/2 right-5 w-full h-[89%] py-5 px-4 bg-white md:right-8 md:h-[83%] lg:right-12 lg:h-[80%]">
                <h1 className="text-primary text-xl font-bold w-[78%] mb-4 uppercase md:w-full md:text-3xl lg:text-4xl">
                  A Great App Makes Your Life Better 
                </h1>
                <p className="text-heading text-[16px] font-normala mb-3 lg:text-lg lg:mb-6">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
                <h1 className="text-xl font-semibold mb-5 lg:text-2xl">Download App Now</h1>
                <div className="flex items-center gap-2.5">
                  <img src={PlayStore} alt="img playstore" />
                  <img src={AppleStore} alt="img applestore" />
                </div>
              </div>
            </div>
          </div>
          <img
            className="w-fit h-fit m-auto md:m-0 md:h-[400px] lg:h-[525px]"
            src={Phone}
            alt="img phone"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
