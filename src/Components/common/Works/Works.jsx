import "swiper/swiper-bundle.css";
import "swiper/swiper.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper";
import "./Works.css";

const Works = () => {
  return (
    <>
      <section className="work">
        <h1 className="heading"> Before and After Rug Cleaning. </h1>
        <Swiper
          loop={true}
          grabCursor={true}
          spaceBetween={20}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          modules={[Autoplay]}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            991: {
              slidesPerView: 3,
            },
          }}
        >
          <div className="swiper reviews-slider">
            <div className="swiper-wrapper">
              <SwiperSlide>
                <div className="swiper-slide slide">
                  <img
                    src={require("../../../Assets/Images/Work/work1.png")}
                    alt=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide slide">
                  <img
                    src={require("../../../Assets/Images/Work/work2.jpeg")}
                    alt=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide slide">
                  <img
                    src={require("../../../Assets/Images/Work/work3.png")}
                    alt=""
                  />
                </div>
              </SwiperSlide>
            </div>
          </div>
        </Swiper>
      </section>
    </>
  );
};

export default Works;
