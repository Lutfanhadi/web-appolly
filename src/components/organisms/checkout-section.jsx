import TitleParent from "../atoms/parent-title";

// Images
import ImgCarousel1 from "../../../public/img/img-carousel1.png";
import ImgCarousel2 from "../../../public/img/img-carousel2.png";
import ImgCarousel3 from "../../../public/img/img-carousel3.png";
import ImgCarousel4 from "../../../public/img/img-carousel4.png";
import PlayStore from "../../../public/img/img-playstore.png";
import AppleStore from "../../../public/img/img-applestore.png";
import TwoSmartPhoneImg from "../../../public/img/img-two-smartphone.png";

// Components
import {
  CardCheckout1,
  CardCheckout2,
  CardCheckout3,
} from "../moleculs/card-checkout";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation} from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const CheckoutSetion = () => {
  return (
    <section className="py-20 md:py-28">
      <TitleParent
        title={"Checkout Our App Interface Look"}
        paragraf={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae."
        }
      />

      {/* ===== CAROUSEL ===== */}
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={3}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pagination-swiper max-w-5xl mx-auto px-10 mt-14 pb-16"
      >
        <SwiperSlide className="flex justify-center items-center">
          <img
            className="drop-shadow-xl w-[227px] mx-auto"
            src={ImgCarousel1}
            alt="App Screen 1"
          />
        </SwiperSlide>

        <SwiperSlide className="flex justify-center items-center">
          <img
            className="drop-shadow-xl w-[227px] mx-auto"
            src={ImgCarousel2}
            alt="App Screen 2"
          />
        </SwiperSlide>

        <SwiperSlide className="flex justify-center items-center">
          <img
            className="drop-shadow-xl w-[227px] mx-auto"
            src={ImgCarousel3}
            alt="App Screen 3"
          />
        </SwiperSlide>

        <SwiperSlide className="flex justify-center items-center">
          <img
            className="drop-shadow-xl w-[227px] mx-auto"
            src={ImgCarousel4}
            alt="App Screen 4"
          />
        </SwiperSlide>

        <SwiperSlide className="flex justify-center items-center">
          <img
            className="drop-shadow-xl w-[227px] mx-auto"
            src={ImgCarousel3}
            alt="App Screen 5"
          />
        </SwiperSlide>
      </Swiper>

      {/* ===== DOWNLOAD SECTION ===== */}
      <div className="mt-14 flex flex-col max-w-6xl mx-auto md:flex-row md:items-center md:px-10 md:justify-between lg:mt-20 lg:items-end">
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
              alt="Playstore"
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
            alt="Two Smartphone"
          />
        </div>
      </div>
    </section>
  );
};

export default CheckoutSetion;
