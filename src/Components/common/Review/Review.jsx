import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Review.css";
import { Link } from "react-router-dom";

const Review = () => {
  return (
    <>
      <section className="reviews">
        <div className="heading">
          {/* <Link to={"https://www.productreview.com.au/listings/pure-n-bright"}> */}
          <h1> WHAT OUR CUSTOMERS HAVE TO SAY </h1>
          {/* </Link> */}
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
        <Link to={"https://www.productreview.com.au/listings/pure-n-bright"}>
          <div className="more-review">
            <span>For More Reviews Click Here</span>
          </div>
        </Link>
      </section>
    </>
  );
};

export default Review;
