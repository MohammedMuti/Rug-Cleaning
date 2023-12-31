import "./Home.css";
import React from "react";
import { Link } from "react-router-dom";
import ReactReadMoreReadLess from "react-read-more-read-less";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import Navbar from "../../common/navbar/navbar";
import NavMain from "../../common/navbar/NavMain";
const ContactComponent = React.lazy(() =>
  import("../../common/Contact/ContactComponent")
);
const Footer = React.lazy(() => import("../../common/Footer/Footer"));
const Review = React.lazy(() => import("../../common/Review/Review"));
const Works = React.lazy(() => import("../../common/Works/Works"));
// const MyComponent = React.lazy(() => import('./MyComponent'));
// import ContactComponent from "../../common/Contact/ContactComponent";
// import Footer from "../../common/Footer/Footer";
// import Review from "../../common/Review/Review";
// import Works from "../../common/Works/Works";

const Home = () => {
  // window.location.reload(false);
  document.title =
    "Rug Cleaning Melbourne | Hire Today - purenbrightcleaning.com.au";

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Steam Carpet Cleaning Melbourne - We offer cheap dry & steam carpet cleaning services in Pakenham & other Melbourne suburbs. Same day carpet cleaning services, Call 1300 360 274."
        />
        <meta name="keywords" content="" />
      </Helmet>
      <NavMain />
      <Navbar />
      <div className="home">
        <div className="main_banner">
          <div className="main_banner_content">
            <h1>
              PROFESSIONAL <br /> RUG CLEANING SERVICE <br />
              MELBOURNE
            </h1>
            {/* <h4>
              <Typewriter
                loop={true}
                speed={40}
                text="Trusted | 10+ Years of Experience | On-Time Delivery"
                delay={1000}
                random={100}
              />
            </h4> */}
            {/* <p>at Affordable Prices</p> */}
            <Link to={"/contact-us"}>
              <span>Enquire Now </span>

              <img
                src={require("../../../Assets/Images/Icons/enquire-blue.png")}
                alt=""
              />
            </Link>
          </div>
        </div>

        <div className="pick_up section">
          <div className="pick_up heading">
            <h2>Pick Up And Drop Off Service - We Serve All Suburbs</h2>
          </div>
          <div className="pick_up content">
            <div className="pick_up info">
              <p>
                Rug Cleaning Melbourne - Cleaning the rugs using the DIY methods
                only cleans the surface, leaving behind a mix of soil and
                chemical residue. The best way to clean a rug is to get it
                cleaned professionally from the rug cleaning experts in order to
                achieve the best results. Whether your rug is a treasured
                Persian or a modern machine-made creation, the care we take when
                cleaning and sanitizing it, remains the same.
              </p>
              <p>
                Whenever we take on a new rug cleaning project, we comply with
                the guidelines. We complete a detailed analysis of the rug
                before we begin our job to decide the ideal approach to clean
                it. Generally, pre-vacuuming lifts loose dirt and it allows us
                to attack the deeper-rooted grime. In order to ensure that they
                are fully removed during the washing, localized stains and spots
                require special pre-treatment.
              </p>
            </div>
            <div className="pick_up img">
              <img
                loading="lazy"
                src={require("../../../Assets/Images/Dilivery/1.webp")}
                alt=""
                width="100%"
              />
            </div>
          </div>
        </div>

        <div className="methods">
          <div className="methods-heading">
            <h2>TYPES OF RUG CLEANING</h2>
          </div>
          <div className="methods-content">
            <div className="methods-info">
              <div className="methods-type">
                <div className="methods-type-heading">
                  <h2>Factory Deep Washing</h2>
                </div>
                <div className="methods-type-img">
                  <img
                    src={require("../../../Assets/Images/Methods/FactoryDeepWashing.webp")}
                    alt=""
                    loading="lazy"
                    width="100%"
                  />
                </div>
                <div className="methods-type-info">
                  <ReactReadMoreReadLess
                    charLimit={200}
                    readMoreText={"Read more ▼"}
                    readLessText={"Read less ▲"}
                  >
                    {/* {myLongText} */}
                    The most effective method to clean rugs thoroughly in order
                    to get rid of 100% dirt and bad odours is where the rugs get
                    submerged in a deep bath with delicate shampoos (Rug
                    Specific) and rinsed with running fresh water to make sure
                    no soap residue remains. This process makes the rugs look
                    like new and smell fresh. Please call us to know more.
                  </ReactReadMoreReadLess>
                </div>
              </div>

              <div className="methods-type">
                <div className="methods-type-heading">
                  <h2>Dry / Steam Cleaning</h2>
                </div>
                <div className="methods-type-img">
                  <img
                    src={require("../../../Assets/Images/Methods/StemCleaning.jpg")}
                    alt=""
                    loading="lazy"
                    width="100%"
                  />
                </div>
                <div className="methods-type-info">
                  <ReactReadMoreReadLess
                    charLimit={200}
                    readMoreText={"Read more ▼"}
                    readLessText={"Read less ▲"}
                  >
                    {/* {myLongText} */}
                    For refreshing lightly soiled rugs, we use an advanced steam
                    cleaning method in our rug cleaning service. This process
                    includes pre-spray, agitation, scrubbing and hot water
                    extraction, followed by sanitising which allows us to safely
                    remove dirt and stains, leaving behind a clean area rug and
                    no residue. For more information feel free to send us an
                    email at info@purenbrightcleaning.com.au
                  </ReactReadMoreReadLess>
                </div>
              </div>

              <div className="methods-type">
                <div className="methods-type-heading">
                  <h2> Hand Cleaning</h2>
                </div>
                <div className="methods-type-img">
                  <img
                    src={require("../../../Assets/Images/Methods/HandWash.webp")}
                    alt=""
                    loading="lazy"
                    width="100%"
                  />
                </div>
                <div className="methods-type-info">
                  <ReactReadMoreReadLess
                    charLimit={200}
                    readMoreText={"Read more ▼"}
                    readLessText={"Read less ▲"}
                  >
                    For delicate rugs, we use our traditional and time-tested
                    hand cleaning of rugs. Our expert rug cleaners first analyse
                    the material, detect the damage, stubborn stains and the
                    areas requiring more attention. A gentle yet thorough
                    handling ensures the rug’s shape and colour is maintained
                    while cleaning. Feel free to call us on 1300360274 for more
                    info.
                  </ReactReadMoreReadLess>
                  {/* <Link to={"tel:1300360274"}>
                    <span> 1300360274</span>{" "}
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="types section">
          <div className="types content">
            <div className="types info">
              <h2>We Clean All Types Of Rugs</h2>
              <p>
                Wool | Jute | Turkish | Viscouse | Art Silk | Silk | Moroccan |
                Sheep Skin | Cow Hide | Dhurrie | Silk | Oriental | Persian |
                Antique | Indian Rugs & Many More…
              </p>
            </div>
            <div className="types img">
              <img
                src={require("../../../Assets/Images/Types/all types.webp")}
                alt=""
                loading="lazy"
                width="100%"
              />
            </div>
          </div>
        </div>

        <div className="review section">
          <Review />
        </div>

        <div className="choose_us section">
          <div className="choose_us heading">
            <h2>Why Choose Us?</h2>
          </div>
          <div className="choose_us content">
            <div className="choose_us info">
              <ul>
                <li>
                  <img
                    src={require("../../../Assets/Images/Icons/sheild.png")}
                    alt=""
                    width="100%"
                  />{" "}
                  HASSLE FREE PICKUP & DROP OFF
                </li>
                <li>
                  <img
                    src={require("../../../Assets/Images/Icons/check.png")}
                    alt=""
                    width="100%"
                  />{" "}
                  QUALITY SERVICES
                </li>
                <li>
                  <img
                    src={require("../../../Assets/Images/Icons/dollar.png")}
                    alt=""
                    width="100%"
                  />{" "}
                  ECONOMICAL
                </li>
              </ul>
              <ul>
                <li>
                  <img
                    src={require("../../../Assets/Images/Icons/sanitization.png")}
                    alt=""
                    width="100%"
                  />{" "}
                  SANITIZATION & DISINFECTION
                </li>
                <li>
                  <img
                    src={require("../../../Assets/Images/Icons/health.png")}
                    alt=""
                    width="100%"
                  />{" "}
                  HEALTHY ENVIRONMENT
                </li>
                <li>
                  <img
                    src={require("../../../Assets/Images/Icons/plant.png")}
                    alt=""
                    width="100%"
                  />{" "}
                  NEW LOOK
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="extra">
          <div className="extra1">
            <img
              src={require("../../../Assets/Images/Icons/satisfaction.png")}
              alt=""
            />
            <h2>Satisfaction Guarantee</h2>
            <p>
              We are passionate about rugs and work hard to beat all our
              customers' expectations. Let our experts clean your rugs and
              provide the shine they deserve.{" "}
            </p>
          </div>
          <div className="extra2 section">
            <div className="heading">
              <h1>Rug Repair Service</h1>
            </div>
            <div className="extra2-wrapper">
              <div className="extra2-info">
                <p>
                  Our Rug Cleaning Service Also Provides Repairs & Restoration
                  For Your Valuable & Precious Rugs. All rugs come with age
                  related issues. We can help to restore rugs with our Fringe
                  repair, Hole repair, Moth damage, Patching, Side Repair,
                  Binding, Color fading, Repairing tears, Backing repair and
                  much more.
                </p>
              </div>
              <div className="extra2-img">
                <img
                  src={require("../../../Assets/Images/RugRepair/repair-rug-melbourne.webp")}
                  alt=""
                  loading="lazy"
                  width="100%"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="work section">
          <div className="work heading">
            <h2>Check Out Our Recent</h2>
          </div>
          <div className="work content">
            <Works />
          </div>
        </div>

        <div className="frequency-wrapper">
          <div className="frequency">
            <h1>Frequency Of Rug Cleaning</h1>
            <p>
              The rug cleaning needs to be done at regular intervals in order to
              enhance the life and appearance of the rug.
            </p>
            <div className="frequency-content">
              <div className="frequency-box">
                <img
                  src={require("../../../Assets/Images/Frequency/frequency1.png")}
                  alt=""
                  width="100%"
                />
                <h2>6 TO 8 MONTHS</h2>
              </div>
              <div className="frequency-box">
                <img
                  src={require("../../../Assets/Images/Frequency/frequency2.png")}
                  alt=""
                  width="100%"
                />
                <h2>8 TO 10 MONTHS</h2>
              </div>
              <div className="frequency-box">
                <img
                  src={require("../../../Assets/Images/Frequency/frequency3.png")}
                  alt=""
                  width="100%"
                />
                <h2>12 MONTHS</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="protect section">
          <div className="protect heading"></div>
          <div className="protect content">
            <div className="protect info">
              <h2>Protect</h2>
              <h3>Your Valuable Rug</h3>
              <p>
                After cleaning, we recommend applying stains protectors to avoid
                further staining and to stay rugs cleaner for a longer period.
              </p>
            </div>
            <div className="protect img">
              <img
                src={require("../../../Assets/Images/Pets/pet.webp")}
                alt=""
                loading="lazy"
                width="100%"
              />
            </div>
          </div>
        </div>

        <ContactComponent />

        <Footer />
      </div>
    </>
  );
};

export default Home;
