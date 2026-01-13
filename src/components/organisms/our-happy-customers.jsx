import TitleParent from "../atoms/parent-title";
import { CardOurHappyCustomers } from "../moleculs/card-our-happy-customers";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const OurHappyCustomersSetion = () => {
  return (
    <section>
      <div className="bg-[url(/img/Background-img.png)] py-20 bg-cover bg-center md:py-28">
        <TitleParent
          textColor={false}
          title={"Our Happy Customers"}
          paragraf={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae."
          }
        />

        {/* ===== SLIDER ===== */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pagination-swiper max-w-5xl mx-auto mt-8 md:mt-10 lg:mt-16 px-4 pb-16"
        >
          <SwiperSlide className="flex justify-center">
            <CardOurHappyCustomers />
          </SwiperSlide>
 
          <SwiperSlide className="flex justify-center">
            <CardOurHappyCustomers />
          </SwiperSlide>

          <SwiperSlide className="flex justify-center">
            <CardOurHappyCustomers />
          </SwiperSlide>

          <SwiperSlide className="flex justify-center">
            <CardOurHappyCustomers />
          </SwiperSlide>

          <SwiperSlide className="flex justify-center">
            <CardOurHappyCustomers />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default OurHappyCustomersSetion;
