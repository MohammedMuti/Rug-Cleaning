import "./Works.css";
import { Link } from "react-router-dom";

const Works = () => {
  return (
    <>
      <section className="works">
        <h1 className="heading">Before & After Rug Cleaning Work</h1>
        <div className="works-content-wrapper">
          <div className="works-content">
            <img
              src={require("../../../Assets/Images/Gallery/Rug/20.webp")}
              alt=""
            />
            <img
              src={require("../../../Assets/Images/Gallery/Rug/1.webp")}
              alt=""
            />
            <img
              src={require("../../../Assets/Images/Gallery/Rug/6.webp")}
              alt=""
            />
          </div>
        </div>
        <Link to={"/gallery/rug-cleaning-gallery"}>
          <div className="more-images">
            <h1>FOR MORE IMAGES CHECK OUT OUR GALLERY</h1>
            <img
              src={require("../../../Assets/Images/Icons/enquire-icon.png")}
              alt=""
            />
          </div>
        </Link>
      </section>
    </>
  );
};

export default Works;
