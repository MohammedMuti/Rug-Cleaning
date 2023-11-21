import Footer from "../../common/Footer/Footer";
import Navbar from "../../common/navbar/navbar";
import NavMain from "../../common/navbar/NavMain";
import Banner from "../../common/Banner/Banner";
import "./Specials.css";
import { Link } from "react-router-dom";
import ContactComp from "../../common/Contact/ContactComponent";
import { Helmet } from "react-helmet";

const Specials = () => {
  document.title = "Cleaning Special Deals - Pure N Bright Cleaning";
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Check out the amazing special deals we have on carpet steam cleaning, tile and grout cleaning, upholstery cleaning and more. Call 1300 360 274."
        />
        <meta name="keywords" content="" />
      </Helmet>
      <NavMain />
      <Navbar />
      <Banner sublink="speacial deals" title="speacial deals" />
      <div className="specials">
        <div className="heading">
          <h2>
            SPRING <span> Specials</span>
          </h2>
        </div>
        <div className="content">
          <div className="img-container">
            <Link to={"/services/carpet-cleaning-melbourne"}>
              <img
                src={require("../../../Assets/Images/Specials/1.webp")}
                alt=""
              />
            </Link>
          </div>

          <div className="img-container">
            <Link to={"/"}>
              <img
                src={require("../../../Assets/Images/Specials/2.webp")}
                alt=""
              />
            </Link>
          </div>
          <div className="img-container">
            <Link to={"/"}>
              <img
                src={require("../../../Assets/Images/Specials/3.webp")}
                alt=""
              />
            </Link>
          </div>
          <div className="img-container">
            <Link to={"/services/upholstery-cleaning-melbourne"}>
              <img
                src={require("../../../Assets/Images/Specials/4.webp")}
                alt=""
              />
            </Link>
          </div>
          <div className="img-container">
            <Link to={"/"}>
              <img
                src={require("../../../Assets/Images/Specials/5.webp")}
                alt=""
              />
            </Link>
          </div>
          <div className="img-container">
            <Link to={"tel:1300360274"}>
              <img
                src={require("../../../Assets/Images/Specials/6.webp")}
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>

      <ContactComp />

      <Footer />
    </>
  );
};

export default Specials;
