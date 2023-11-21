import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Banner from "../../common/Banner/Banner";
import ContactComp from "../../common/Contact/ContactComponent";
import Footer from "../../common/Footer/Footer";
import Frequency from "../../common/Frequency/Frequency";
import Navbar from "../../common/navbar/navbar";
import NavMain from "../../common/navbar/NavMain";
import Benefit from "./Benefit";
import "./CarpetService.css";

const CarpetService = () => {
  document.title =
    "Carpet Cleaning Melbourne | Cheap & Professional Steam Carpet Cleaning in Melbourne";
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Carpet Cleaning Melbourne - We offer cheap & professional carpet cleaning services in Melbourne. 3 rooms carpet steam cleaning at $59*. Call 1300 360 274."
        />
        <meta name="keywords" content="" />
      </Helmet>
      <Navbar />
      <NavMain />
      <Banner
        img={require("../../../Assets/Images/Banner/carpet-banner.jpg")}
        sublink="Services"
        sublink2="Carpet Cleaning Melbourne"
      />
      <div className="carpet_service">
        <div className="main_info">
          <h2>OUR CARPET CLEANING PROCESS</h2>
          <p>
            Pure N Bright Carpet Cleaning Melbourne, a professional carpet steam
            cleaning company in Melbourne, uses the latest and best Eco friendly
            cleaning solutions for the health of our technicians and clients. We
            strive to provide a highly professional service beyond our
            competitors. Our systems are in line with highly advanced innovative
            technologies in carpet cleaning Melbourne. Get the best carpet
            cleaning services in competitive prices.
          </p>
          <h4>With Advanced Technology Machines</h4>
          <div className="info">
            <div className="content">
              <p>
                Our expert technicians follow an extensive 8 steps process
                (Conditions Apply) to ensure your carpet springs back to life
                and looks like new again. We inspect the carpet first to decide
                the course of cleaning required, then the pre-vacuuming, pre
                spotting and pre-spraying is done which is followed by the pre
                agitation of the carpet and then the hot water extraction is
                required to get rid of the dirt, dust and residues from the
                carpet.
              </p>
              <p>
                The carpet is then deodorized followed by sanitizing if
                required. Our expert technicians carry out a post inspection to
                ensure the cleaning is done up to the required standard.
              </p>
            </div>
            <div className="img">
              <img
                src={require("../../../Assets/Images/Banner/truckmounted.jpg")}
                alt=""
              />
            </div>
          </div>
          <Link
            to={
              "/blog/what-is-best-for-you-rug-steam-dry-or-traditional-hand-cleaning"
            }
          >
            <span>
              Carpet can be thoroughly cleaned using different processes
              depending upon the requirement.
            </span>
          </Link>
        </div>
      </div>

      <div className="sub-banner">
        <img
          src={require("../../../Assets/Images/Banner/carpet-sub-banner.webp")}
          alt=""
        />
      </div>

      <div className="carpet_service">
        <div className="review_info">
          <h2>See Our Customer Reviews</h2>
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
          <h3>BEFORE / AFTER CARPET CLEANING WORK</h3>
          <div className="imgs">
            <div className="img-content">
              <img
                src={require("../../../Assets/Images/Gallery/Carpet/3.jpg")}
                alt=""
              />
            </div>
            <div className="img-content">
              <img
                src={require("../../../Assets/Images/Gallery/Carpet/5.jpg")}
                alt=""
              />
            </div>
          </div>
          <Link to={"/gallery/carpet-cleaning-gallery"}>
            <h4>Check Out the Gallery for more Images</h4>
            <img
              src={require("../../../Assets/Images/Icons/enquire-icon.png")}
              alt=""
            />
          </Link>
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
              <Link to={"tel:1300 360 274"}>
                <span> 1300 360 274</span>
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className="protected">
        <div className="heading">
          <h1>Get Your Carpets Protected</h1>
          <h2>AGAINST SPILLS AND STAIN !</h2>
        </div>
        <div className="main-content">
          <div className="content-u">
            <div className="info">
              <p>
                Protectors are invisible and don't affect the feel or texture of
                the carpet or fabric. Professionally-applied carpet protectors
                help prevent permanent damage, blot up spills before they become
                stains, resist soiling and keep dirt from penetrating between
                the fibers and improve vacuuming efficiency. This is advisable
                for cleaner and fresher carpets.
              </p>
              <h1>
                THE BEST WAY TO PROTECT YOUR CARPET, RUG AND UPHOLSTERY FABRIC
                (OPTIONAL BUT RECOMMENDED)
              </h1>
              <p>
                We offer a personalise carpet cleaning in Melbourne service to
                all of our customers and aim to build long lasting relationships
                as we are confident that you will want to use our services again
                and again.
              </p>
            </div>
            <div className="content">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/3LO8Rb8z-cY?si=3fx9AjMngKf45O6z"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>

          <div className="content-d">
            <div className="content">
              <img
                src={require("../../../Assets/Images/Banner/carpet-sub-banner4.jpg")}
                alt=""
              />
            </div>
            <div className="info">
              <h1>Keep Your Business</h1>
              <h2>Free Of STAINS & ODOUR</h2>
              <p>
                Carpets are a big investment in the commercial premises that
                needs to be protected. To maintain, protect and extend the life
                of your facility’s carpet, we also offer commercial carpet
                cleaning and maintenance service in Melbourne, scheduling at
                times that suits you best and your business. We feel proud in
                providing the most competent carpet, upholstery and window
                cleaning for all kinds of large and small commercial properties.
                With thorough and exceptional commercial carpet cleaning
                service, Pure N Bright Cleaning ensures your carpets will stay
                cleaner, longer and promote a healthier working and business
                environment for your clients and employees.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="benefits">
        <div className="benefits-wrapper">
          <div className="benefits-heading">
            <h2>Our Benefits of </h2>
            <h1>Clean Service</h1>
          </div>
          <div className="benefits-content">
            <Benefit
              title="New LOOK"
              info="Leaving carpets refreshed and enhanced appearance."
              img={require("../../../Assets/Images/Services/Rug/icons/new-look.png")}
            />

            <Benefit
              title="ELIMINATE ALLERGENS"
              info="Pollutants, bacteria, allergens, dust and mites and pet hair."
              img={require("../../../Assets/Images/Services/Rug/icons/eliminate-allergents.png")}
            />
            <Benefit
              title="STAIN REMOVAL"
              info="Spots, spills, stains and odours with our special techniques."
              img={require("../../../Assets/Images/Services/Rug/icons/stain-removal.png")}
            />

            <Benefit
              title="
            FRESHNESS"
              info="Omnipresent freshness with carpet
            cleaning and deodorising."
              img={require("../../../Assets/Images/Services/Rug/icons/freshness.png")}
            />

            <Benefit
              title="
            ORGANIC CLEANING"
              info="Organic, non-toxic compounds to
            protect the health of your family & pets."
              img={require("../../../Assets/Images/Services/Rug/icons/organic-cleaning.png")}
            />

            <Benefit
              title="A 100% GUARANTEE"
              info="On all of our work."
              img={require("../../../Assets/Images/Services/Rug/icons/gurantee.png")}
            />

            <Benefit
              title="
            SAVES MONEY"
              info="A softer, better carpet so that you don't have to think about replacing them anymore."
              img={require("../../../Assets/Images/Services/Rug/icons/saves-money.png")}
            />

            <Benefit
              title="PET ODOUR AND UNPLEASANT ODOUR REMOVALS"
              info="Guaranteed cure for pet accidents."
              img={require("../../../Assets/Images/Services/Rug/icons/pet-odour.png")}
            />
          </div>
        </div>
      </div>

      <Frequency />

      <div className="experience">
        <div className="content-u">
          <h1>OVER 15 YEARS EXPERIENCE IN</h1>
          <h2>
            Cleaning industry we understand how much you love your carpet so as
            we, our fully trained technicians bring your carpet back to life.
          </h2>
        </div>
        <div className="content-d">
          <div className="img">
            <img
              src={require("../../../Assets/Images/Icons/badge.png")}
              alt=""
            />
          </div>
          <div className="info">
            <h1>MOVING OUT?</h1>
            <h2>WORRIED ABOUT YOUR BOND?</h2>
            <p>
              - Our end of lease carpet cleaning gives 100% bond back guarantee.
            </p>
          </div>
        </div>
      </div>

      <div className="last-banner">
        <img
          src={require("../../../Assets/Images/Banner/carpet-sub-banner2.webp")}
          alt=""
        />
      </div>

      <ContactComp />
      <Footer />
    </>
  );
};

export default CarpetService;
