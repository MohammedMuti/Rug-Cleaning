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
        <div className="heading">
          <h1> WHAT OUR CUSTOMERS HAVE TO SAY </h1>
          <img
            src={require("../../../Assets/Images/Icons/enquire-icon.png")}
            alt=""
          />
        </div>
        <div className="review-content">
          <div className="content-box">
            <p>
              Rug came up like new which was better than I expected as it was
              well used. The whole process was very easy with the pick up and
              drop off service
            </p>
            <span>Cassie</span>
            <div className="icons">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
          </div>
          <div className="content-box">
            <p>
              I had my large rug cleaned and was very pleased with the service.
              The pickup and drop off option were a lifesaver and the rug came
              back beautifully clean and odour-free. Will definitely use again.
            </p>
            <span>Phoebe</span>
            <div className="icons">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
          </div>
          <div className="content-box">
            <p>
              Just had my rug cleaned and the result is fantastic. Wool rug with
              pet stains couldn’t stand it another minute. Now it looks and
              feels great. Service was great too
            </p>
            <span>Afinial</span>
            <div className="icons">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
          </div>
        </div>
        <div className="more-review">
          <span>For More Reviews Click Here</span>
        </div>
      </section>
    </>
  );
};

export default Review;
