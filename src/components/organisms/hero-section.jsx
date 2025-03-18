import { Navbar } from "../moleculs/navbar";
import PlayStore from "../../../public/img/img-playstore.png"
import AppleStore from "../../../public/img/img-applestore.png"

const HeroSection = () => {
    return (
      <section className="min-h-screen w-full">
        <div className="w-full h-full bg-[url(/img/Background-img.png)] bg-cover bg-center">
          <Navbar />
          <div className="relative px-4">
            <div className="w-[323px] h-[358px] m-auto mt-24 bg-secondary p-3.5">
              <div className="w-full h-full bg-primary"></div>
            </div>
            <div className="absolute top-8 w-[323px] h-fit py-6 px-4 bg-white">
              <h1 className="text-primary text-2xl font-bold w-5/6 mb-4 uppercase">
                A Great App Makes Your Life Better
              </h1>
              <p className="text-heading text-[16px] font-normala mb-3">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
              <h1 className="text-xl font-semibold mb-5">Download App Now</h1>
              <div className="flex items-center gap-2.5">
                <img src={PlayStore} alt="img playstore" />
                <img src={AppleStore} alt="img applestore" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default HeroSection;