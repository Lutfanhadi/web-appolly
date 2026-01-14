import ParentOurHappyCustomers from "../atoms/parent-our-happy-customers";
import TitleParent from "../atoms/parent-title";

import ImageAnn from "../../../public/img/profil-image-ann.png";
import ImageMarcus from "../../../public/img/profil-image-marcus.png"
import ImageSarah from "../../../public/img/profil-image-sarah.png";
import ImageDavid from "../../../public/img/profil-image-david.png";
import ImageElena from "../../../public/img/profil-image-elena.png";

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
        <div className="max-w-6xl mx-auto px-4 md:px-10">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView="auto"
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              0: { slidesPerView: 1, centeredSlides: true },
              640: { slidesPerView: 2, centeredSlides: false },
              1024: { slidesPerView: 3, centeredSlides: true },
            }}
            className="pagination-swiper max-w-6xl mx-auto mt-8 md:mt-10 lg:mt-16 pb-16"
          >
            <SwiperSlide className="flex justify-center cursor-pointer">
              <ParentOurHappyCustomers
                img={ImageAnn}
                name={"Ann Lubin"}
                position={"CO-FUNDER"}
                comment={
                  "A perfect blend of aesthetics and functionality. The design system is flexible enough to accommodate our complex needs while maintaining a clean, modern professional look."
                }
              />
            </SwiperSlide>

            <SwiperSlide className="flex justify-center cursor-pointer">
              <ParentOurHappyCustomers
                img={ImageMarcus}
                name={"Marcus Chen"}
                position={"CHIEF TECHNOLOGY OFFICER"}
                comment={
                  "Excellence in every detail. The integration process was seamless, and the results exceeded our quarterly projections. Truly a transformative experience for our engineering team."
                }
              />
            </SwiperSlide>

            <SwiperSlide className="flex justify-center cursor-pointer">
              <ParentOurHappyCustomers
                img={ImageSarah}
                name={"Sarah Jenkins"}
                position={"MARKETING DIRECTOR"}
                comment={
                  "The visual consistency and user experience provided here are top-notch. It has significantly improved our brand positioning and customer engagement metrics across all platforms."
                }
              />
            </SwiperSlide>

            <SwiperSlide className="flex justify-center cursor-pointer">
              <ParentOurHappyCustomers
                img={ImageDavid}
                name={"David Rivera"}
                position={"SENIOR DEVELOPER"}
                comment={
                  "From a technical standpoint, the architecture is robust. Implementing these solutions saved us hundreds of man-hours. Highly recommended for scalable enterprise projects."
                }
              />
            </SwiperSlide>

            <SwiperSlide className="flex justify-center cursor-pointer">
              <ParentOurHappyCustomers
                img={ImageElena}
                name={"Elena Rossi"}
                position={"PRODUCT LEAD"}
                comment={
                  "Strategic, efficient, and reliable. The attention to user feedback and iterative improvements makes this the best choice for any product-focused organization in the current market."
                }
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default OurHappyCustomersSetion;
