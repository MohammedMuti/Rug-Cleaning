import Banner from "../../common/Banner/Banner";
import ContactComp from "../../common/Contact/ContactComponent";
import Footer from "../../common/Footer/Footer";
import Navbar from "../../common/navbar/navbar";
import "./Services.css";
import ServiceComp from "./ServiceComp";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <>
      <Navbar />
      <Banner sublink="Services" slogan="We Provide the Best Services" />
      <div className="services">
        <div className="heading">
          <h2>Services</h2>
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
          <Link to={"/services/rug-cleaning-melbourne"}>
            <ServiceComp
              title="Rug Repair"
              info="RUG REPAIR MELBOURNE Pure N Bright Carpet Cleaning"
              img={require("../../../Assets/Images/Services/repair.webp")}
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
