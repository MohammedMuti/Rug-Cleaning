import Banner from "../../common/Banner/Banner";
import ContactComp from "../../common/Contact/ContactComponent";
import Footer from "../../common/Footer/Footer";
import Navbar from "../../common/navbar/navbar";
import "./Services.css";
import ServiceComp from "./ServiceComp";
import { Link } from "react-router-dom";
import NavMain from "../../common/navbar/NavMain";
import { Helmet } from "react-helmet";

const Services = () => {
  document.title = "Rug Cleaning Melbourne";
  return (
    <>
      <Helmet>
        <meta name="description" content="Rug CLeaning Melbourne" />
        <meta name="keywords" content="" />
      </Helmet>
      <Navbar />
      <NavMain />
      <Banner
        img={require("../../../Assets/Images/Banner/service-banner.jpg")}
        sublink="Services"
        slogan="We Provide the Best Services"
      />
      <div className="services">
        <div className="heading">
          <h2>Our Services</h2>
        </div>
        <div className="content">
          <Link to={"/services/carpet-cleaning-melbourne"}>
            <ServiceComp
              title="Carpet Cleaning"
              info="CARPET CLEANING MELBOURNE Pure N Bright Carpet Cleaning"
              img={require("../../../Assets/Images/Services/carpet.webp")}
            />
          </Link>
          <Link to={"/services/rug-cleaning-melbourne"}>
            <ServiceComp
              title="Rug Cleaning"
              info="RUG CLEANING MELBOURNE Pure N Bright Carpet Cleaning"
              img={require("../../../Assets/Images/Services/rug.webp")}
            />
          </Link>
          <Link to={"/services/upholstery-cleaning-melbourne"}>
            <ServiceComp
              title="Upholstery Cleaning"
              info="UPHOLSTERY/SOFA CLEANING MELBOURNE Pure N Bright Carpet Cleaning"
              img={require("../../../Assets/Images/Banner/Upholstery-banner.jpeg")}
            />
          </Link>
          <Link to={"/services/ndis-house-cleaning-australia"}>
            <ServiceComp
              title="NDIS House Cleaning"
              info="UPHOLSTERY/SOFA CLEANING MELBOURNE Pure N Bright Carpet Cleaning"
              img={require("../../../Assets/Images/Banner/Upholstery-banner.jpeg")}
            />
          </Link>
        </div>
      </div>
      <ContactComp />
      <Footer />
    </>
  );
};

export default Services;
