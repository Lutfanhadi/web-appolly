import { Navbar } from "../moleculs/navbar";
import PlayStore from "../../../public/img/img-playstore.png"
import AppleStore from "../../../public/img/img-applestore.png"
import Phone from "../../../public/img/img-phone.png"


const HeroSection = () => {
    return (
      <section className="min-h-screen w-full">
        <div className="w-full h-full bg-[url(/img/Background-img.png)] bg-cover bg-center">
          <Navbar />
          <div className="flex flex-col gap-10">
            <div className="px-4">
              <div className="relative w-11/12 ml-auto h-[358px] mt-24 bg-secondary p-3">
                <div className="w-full h-full bg-primary"></div>
                <div className="absolute top-1/2 -translate-y-1/2 right-5 w-full h-[89%] py-5 px-4 bg-white">
                  <h1 className="text-primary text-xl font-bold w-[78%] mb-4 uppercase">
                    A Great App Makes Your Life Better
                  </h1>
                  <p className="text-heading text-[16px] font-normala mb-3">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </p>
                  <h1 className="text-xl font-semibold mb-5">
                    Download App Now
                  </h1>
                  <div className="flex items-center gap-2.5">
                    <img src={PlayStore} alt="img playstore" />
                    <img src={AppleStore} alt="img applestore" />
                  </div>
                </div>
              </div>
            </div>
            <img className="w-fit m-auto" src={Phone} alt="img phone" />
          </div>
        </div>
      </section>
    );
}

export default HeroSection;