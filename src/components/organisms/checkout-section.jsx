import TitleParent from "../atoms/parent-title";
import ImgCarousel1 from "../../../public/img/img-carousel1.png"
import ImgCarousel2 from "../../../public/img/img-carousel2.png"
import ImgCarousel3 from "../../../public/img/img-carousel3.png"
import PlayStore from "../../../public/img/img-playstore.png";
import AppleStore from "../../../public/img/img-applestore.png";
import { CardCheckout1, CardCheckout2, CardCheckout3 } from "../moleculs/card-checkout";
import TwoSmartPhoneImg from "../../../public/img/img-two-smartphone.png";

const CheckoutSetion = () => {
    return (
      <section className="py-20 md:py-28">
        <TitleParent
          title={"Checkout Our App Interface Look"}
          paragraf={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae."
          }
        />
        <div className="flex items-center gap-20 w-min-[400px] overflow-x-scroll px-20 mt-14 md:gap-0 md:justify-between md:w-min-[100%] md:overflow-x-visible md:px-0 md:mx-10 lg:mx-[135px] lg:justify-around">
          <img
            className="drop-shadow-xl w-[227px]"
            src={ImgCarousel2}
            alt="img caraousel"
          />
          <img
            className="drop-shadow-xl w-[227px]"
            src={ImgCarousel1}
            alt="img caraousel"
          />
          <img
            className="drop-shadow-xl w-[227px]"
            src={ImgCarousel3}
            alt="img caraousel"
          />
        </div>
        <div className="mt-14 flex flex-col md:flex-row md:items-center md:mx-10 md:justify-between lg:mt-20 lg:mx-[135px] lg:items-end">
          <div className="w-full md:w-[50%] lg:w-[50%]">
            <TitleParent
              text={false}
              title={"Download App Now"}
              paragraf={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim."
              }
            />
            <div className="flex items-center gap-6 mx-4 mt-8 md:mx-0">
              <img
                className="w-full lg:w-[149px]"
                src={PlayStore}
                alt="playstore"
              />
              <img
                className="w-full lg:w-[149px]"
                src={AppleStore}
                alt="Appstore"
              />
            </div>
            <div className="flex items-center justify-between mt-14 mx-4 md:mx-0">
              <CardCheckout1 />
              <CardCheckout2 />
              <CardCheckout3 />
            </div>
          </div>
          <div className="mt-14 mx-4 lg:mx-0 lg:mt-0">
            <img
              className="w-full h-fit md:w-[334px] lg:h-[450px] lg:w-[550px]"
              src={TwoSmartPhoneImg}
              alt="img two SmartPhone"
            />
          </div>
        </div>
      </section>
    );
}

export default CheckoutSetion;

