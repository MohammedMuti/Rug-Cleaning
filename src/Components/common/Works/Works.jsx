import "swiper/swiper-bundle.css";
import "swiper/swiper.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper";
import "./Works.css";

const Works = () => {
  return (
    <>
      <section className="works">
        <h1 className="heading">Before & After Rug Cleaning Work</h1>
        <div className="works-content">
          <img
            src={require("../../../Assets/Images/Gallery/Rug/28.png")}
            alt=""
          />
          <img
            src={require("../../../Assets/Images/Gallery/Rug/29.png")}
            alt=""
          />
          <img
            src={require("../../../Assets/Images/Gallery/Rug/30.jpeg")}
            alt=""
          />
        </div>
        <div className="more-images">
          <h1>FOR MORE IMAGES CHECK OUT OUR GALLERY</h1>
          <img
            src={require("../../../Assets/Images/Icons/enquire-icon.png")}
            alt=""
          />
        </div>
      </section>
    </>
  );
};

export default Works;
