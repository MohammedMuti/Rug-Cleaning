import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Banner from "../../common/Banner/Banner";
import ContactComp from "../../common/Contact/ContactComponent";
import Footer from "../../common/Footer/Footer";
import Navbar from "../../common/navbar/navbar";
import "./CarpetService.css";

const CarpetService = () => {
  return (
    <>
      <Navbar />
      <Banner sublink="Services" sublink2="Carpet Cleaning Melbourne" />
      <div className="carpet_service">
        <div className="main_info">
          <h2>CARPET CLEANING MELBOURNE</h2>
          <p>
            Pure N Bright Carpet Cleaning Melbourne, a professional carpet steam
            cleaning company in Melbourne, uses the latest and best Eco friendly
            cleaning solutions for the health of our technicians and clients. We
            strive to provide a highly professional service beyond our
            competitors. Our systems are in line with highly advanced innovative
            technologies in carpet cleaning Melbourne. Get the best carpet
            cleaning services in competitive prices.
          </p>
          <h3>OUR CARPET CLEANING PROCESS</h3>
          <h4>With Advanced Technology Machines</h4>
          <p>
            Our expert technicians follow an extensive 8 steps process
            (Conditions Apply) to ensure your carpet springs back to life and
            looks like new again. We inspect the carpet first to decide the
            course of cleaning required, then the pre-vacuuming, pre spotting
            and pre-spraying is done which is followed by the pre agitation of
            the carpet and then the hot water extraction is required to get rid
            of the dirt, dust and residues from the carpet.
          </p>
          <p>
            The carpet is then deodorized followed by sanitizing if required.
            Our expert technicians carry out a post inspection to ensure the
            cleaning is done up to the required standard.
          </p>
          <span>
            Carpet can be thoroughly cleaned using different processes depending
            upon the requirement.
          </span>
        </div>
      </div>

      <div className="solution">
        <div className="solution_heading">
          <h2>We Have The Solution For</h2>
          <h3>ALL YOUR CARPET CLEANING PROBLEMS</h3>
        </div>
        <div className="solution_content">
          <div className="solution_box">
            <h2>FLEA TREATMENT</h2>
            <img
              src={require("../../../Assets/Images/CarpetService/1.webp")}
              alt=""
            />
            <h3>WORRIED ABOUT THE FLEA TREATMENT?</h3>
            <p>
              Leave all your worry to us. Our technicians use all natural
              products on the carpet to make it flea free and hence looking
              after the health of everyone at home.
            </p>
          </div>
          <div className="solution_box">
            <h2>PET ODOUR TREATMENT</h2>
            <img
              src={require("../../../Assets/Images/CarpetService/2.webp")}
              alt=""
            />
            <h3>DO YOU LOVE PETS?</h3>
            <p>
              We love them too that is why we have the solution for all types of
              pet odors. We specialize in pet odor treatment with the techniques
              that are proven to be highly effective.
            </p>
          </div>
          <div className="solution_box">
            <h2>RED WINE SPILL</h2>
            <img
              src={require("../../../Assets/Images/CarpetService/3.jpg")}
              alt=""
            />
            <h3>OOPS...SPILT RED WINE ON THE CARPET?</h3>
            <p>
              Don't panic, we understand how eager you are to see it all gone,
              leave it to us we will take care of it! Call now{" "}
              <span> 1300 360 274</span>
            </p>
          </div>
        </div>
      </div>

      <div className="carpet_service">
        <div className="review_info">
          <h2>See Our Customer Reviews on Carpet Cleaning</h2>
          <div className="review_videos">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/5ol5QRYZpp0?si=8g6GpxYAAVDU2Mx8"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>

            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/-0kgA9iFkRM?si=AUkwysiPacWuktKD"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>

        <div className="cleaning_info">
          <h2>Check Our Recent Work</h2>
          <h3>Before & After Cleaning Carpets</h3>
          <div className="imgs">
            <div className="img-content">
              <img
                src={require("../../../Assets/Images/CarpetService/1.jpg")}
                alt=""
              />
            </div>
            <div className="img-content">
              <img
                src={require("../../../Assets/Images/CarpetService/1.jpg")}
                alt=""
              />
            </div>
          </div>
          <Link to={"/gallery/carpet-cleaning-gallery"}>
            <h4>
              Check Out the Gallery for more Images
              <FontAwesomeIcon icon={faChevronCircleRight} />
            </h4>
          </Link>
        </div>
      </div>

      <ContactComp />
      <Footer />
    </>
  );
};

export default CarpetService;
