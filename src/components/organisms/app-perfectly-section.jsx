import TitleParent from "../atoms/parent-title";
import ImgVideo from "../../../public/img/img-video.png";
import SvgVideo from "../../../public/svg/video-fill.svg"
import {
  CardParentOurReativeTeam1,
  CardParentOurReativeTeam2,
  CardParentOurReativeTeam3,
} from "../moleculs/card-our-reative-team";

const AppPerfectlySetion = () => {
  return (
    <section>
      <div className="relative bg-[url(/img/Background-img.png)] w-full h-fit bg-cover bg-center pt-20 md:pt-28 pb-[130px] md:pb-[190px] lg:pb-[220px]">
        <TitleParent
          textColor={false}
          title={"how to use the app perfectly"}
          paragraf={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus."
          }
        />
        <div className="absolute -bottom-[17%] md:-bottom-[24%] left-1/2 -translate-x-1/2 w-full h-[150px] md:w-[570px] md:h-[231px] lg:-bottom-[40%] lg:w-[770px] lg:h-[319px]">
          <div className="relative px-4 md:px-0">
            <img
              className="rounded-xl h-[150px] md:h-[231px] lg:w-[770px] lg:h-[319px]"
              src={ImgVideo}
              alt="img video"
            />
            <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
              <img
                className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] lg:w-[60px] lg:h-[60px]"
                src={SvgVideo}
                alt="svg video"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-28 md:mt-44 lg:mt-60">
        <TitleParent
          title={"Our reative team"}
          paragraf={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae."
          }
        />
      </div>
      <div className="mt-10 mx-4 flex flex-col gap-7 pb-20 md:pb-28 md:flex-row md:mx-10 lg:mx-[135px]">
        <CardParentOurReativeTeam1 />
        <CardParentOurReativeTeam2 />
        <CardParentOurReativeTeam3 />
      </div>
    </section>
  );
};

export default AppPerfectlySetion;
