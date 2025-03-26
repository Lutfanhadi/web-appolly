import AppDesign from "../../../public/img/img-AppDesign.png"
import TitleParent from "../atoms/parent-title";
import { CardAbout1, CardAbout2, CardAbout3 } from "../moleculs/card-about";


const AboutSection = () => {
    return (
      <section className="font-lato py-20 md:py-28">
        <TitleParent
          title={"About Our App"}
          paragraf={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat."
          }
        />

        <div className="mt-10 mx-4 flex flex-col gap-10 md:flex-row md:gap-14 md:mx-10 md:items-center md:mt-20 lg:mx-[135px]">
          <img
            className="h-[356px] w-fit mx-auto lg:h-[526px]"
            src={AppDesign}
            alt="img app design"
          />
          <div className="flex flex-col gap-5">
            <CardAbout1 />
            <CardAbout2 />
            <CardAbout3 />
          </div>
        </div>
      </section>
    );
}

export default AboutSection;