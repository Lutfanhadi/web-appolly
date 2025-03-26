import TitleParent from "../atoms/parent-title";
import AppFeaturesImg from "../../../public/img/img-App-features.png";
import { Comment, Browser, EyeScanner, MaleTelemarketer, SmartPhone, Vector } from "../moleculs/component-app-features";

const AppFeaturesSection = () => {
    return (
      <section>
        <div className="w-full h-fit bg-[url(/img/Background-img.png)] bg-cover bg-center py-20 md:py-28">
          <TitleParent
            text={false}
            title={"App features"}
            paragraf={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae."
            }
          />

          {/*smartphone  */}
          <div className="flex flex-col gap-10 items-center mt-8 md:hidden lg:hidden">
            <Comment />
            <Browser />
            <Vector />
            <img
              className="h-[468px] drop-shadow-2xl"
              src={AppFeaturesImg}
              alt="img app features"
            />
            <SmartPhone />
            <EyeScanner />
            <MaleTelemarketer />
          </div>

          {/* tablet dan leptop */}
          <div className="relative md:grid grid-cols-3 md:gap-[70px] mt-8 mx-10 hidden lg:gap-24 lg:mx-[135px]">
            <div className="col-start-2">
              <Comment />
            </div>
            <div className="col-start-1">
              <Browser />
            </div>
            <div className="col-end-4">
              <SmartPhone />
            </div>
            <div>
              <Vector />
            </div>
            <div className="col-end-4">
              <EyeScanner />
            </div>
            <div className="col-start-2">
              <MaleTelemarketer />
            </div>
            <img
              className="drop-shadow-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:h-[558px] lg:h-[612px]"
              src={AppFeaturesImg}
              alt="img app features"
            />
          </div>
        </div>
      </section>
    );

}

export default AppFeaturesSection;