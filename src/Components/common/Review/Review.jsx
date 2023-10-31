import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "swiper/swiper-bundle.css";
import "swiper/swiper.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper";
import "./Review.css";

const Review = () => {
  return (
    <>
      <section className="reviews">
        <h1 className="heading"> Client Reviews </h1>
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
                  <p>
                    Rug came up like new which was better than I expected as it
                    was well used. The whole process was very easy and organised
                    with the pick up and drop off service.
                    <br />
                    <br />
                    <a
                      className="read-more-button"
                      href="https://goo.gl/maps/fL5bc7b41P2zee9T6"
                    ></a>
                  </p>
                  <div className="user">
                    <div className="info">
                      <h3>Cassie</h3>
                      <div className="stars">
                        <FontAwesomeIcon
                          icon={faStar}
                          style={{ color: "#f5bf23", fontSize: 15 }}
                        />
                        <FontAwesomeIcon
                          icon={faStar}
                          style={{ color: "#f5bf23", fontSize: 15 }}
                        />
                        <FontAwesomeIcon
                          icon={faStar}
                          style={{ color: "#f5bf23", fontSize: 15 }}
                        />
                        <FontAwesomeIcon
                          icon={faStar}
                          style={{ color: "#f5bf23", fontSize: 15 }}
                        />
                        <FontAwesomeIcon
                          icon={faStar}
                          style={{ color: "#f5bf23", fontSize: 15 }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide slide">
                  <p>
                    I had my large rug cleaned and was very pleased with the
                    service. The pickup and drop off option were a lifesaver and
                    the rug came back beautifully clean.
                    <br />
                    <br />
                    <a
                      className="read-more-button"
                      href="https://goo.gl/maps/fL5bc7b41P2zee9T6"
                    ></a>
                  </p>
                  <div className="user">
                    <div className="info">
                      <h3>Phoebe</h3>
                      <div className="stars">
                        <FontAwesomeIcon
                          icon={faStar}
                          style={{ color: "#f5bf23", fontSize: 15 }}
                        />
                        <FontAwesomeIcon
                          icon={faStar}
                          style={{ color: "#f5bf23", fontSize: 15 }}
                        />
                        <FontAwesomeIcon
                          icon={faStar}
                          style={{ color: "#f5bf23", fontSize: 15 }}
                        />
                        <FontAwesomeIcon
                          icon={faStar}
                          style={{ color: "#f5bf23", fontSize: 15 }}
                        />
                        <FontAwesomeIcon
                          icon={faStar}
                          style={{ color: "#f5bf23", fontSize: 15 }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide slide">
                  <p>
                    Just had my rug cleaned and the result is fantastic. Wool
                    rug with pet stains couldn’t stand it another minute. Now it
                    looks and feels great. Service was great too.
                    <br />
                    <br />
                    <a
                      className="read-more-button"
                      href="https://goo.gl/maps/fL5bc7b41P2zee9T6"
                    ></a>
                  </p>
                  <div className="user">
                    <div className="info">
                      <h3>Afinial</h3>
                      <div className="stars">
                        <FontAwesomeIcon
                          icon={faStar}
                          style={{ color: "#f5bf23", fontSize: 15 }}
                        />
                        <FontAwesomeIcon
                          icon={faStar}
                          style={{ color: "#f5bf23", fontSize: 15 }}
                        />
                        <FontAwesomeIcon
                          icon={faStar}
                          style={{ color: "#f5bf23", fontSize: 15 }}
                        />
                        <FontAwesomeIcon
                          icon={faStar}
                          style={{ color: "#f5bf23", fontSize: 15 }}
                        />
                        <FontAwesomeIcon
                          icon={faStar}
                          style={{ color: "#f5bf23", fontSize: 15 }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          </div>
        </Swiper>
      </section>
    </>
  );
};

export default Review;
