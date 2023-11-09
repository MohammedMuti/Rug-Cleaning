import { useState } from "react";
import { Link } from "react-router-dom";
import Banner from "../../common/Banner/Banner";
import ContactComp from "../../common/Contact/ContactComponent";
import Footer from "../../common/Footer/Footer";
import Navbar from "../../common/navbar/navbar";
import NavMain from "../../common/navbar/NavMain";
import Benefit from "../Services/Benefit";
import "./NDIS.css";

const content = [
  {
    rug: {
      title: "Rug Cleaning Melbourne",
      info: "Rug Cleaning Melbourne Pick Up And Drop Off Service Rug Cleaning Melbourne – Cleaning the rugs using the DIY methods only cleans the surface, leaving behind a mix of soil and chemical residue. The best way to clean a rug is to get it cleaned professionally from the rug cleaning experts in order to achieve the best results. Whether your",
    },

    carpet: {
      title: "Carpet Cleaning Melbourne",
      info: "CARPET CLEANING MELBOURNE Pure N Bright Carpet Cleaning Melbourne, a professional carpet steam cleaning company in Melbourne, uses the latest and best Eco friendly cleaning solutions for the health of our technicians and clients. We strive to provide a highly professional service beyond our competitors. Our systems are in line with highly advanced innovative technologies in carpet cleaning Melbourne. Get",
    },
  },
];

const NDIS = () => {
  const [active, setActive] = useState("rug");
  return (
    <>
      <NavMain />
      <Navbar />
      <Banner sublink="NDIS house cleaning" title="" />

      <div className="rug-service">
        <div className="rug-service-img">
          <h2>Welcome To Pure N Bright</h2>
          <h4>NDIS House Cleaning Services Australia</h4>

          <img
            src={require("../../../Assets/Images/Services/Rug/main/rug-cleaning1.webp")}
            alt=""
          />
        </div>
        <div className="rug-service-content">
          <h2>Welcome To Pure N Bright</h2>
          <h4>NDIS House Cleaning Services Australia</h4>
          <p>
            <strong style={{ fontSize: "inherit", color: "black" }}>
              {" "}
              Pure N Bright Cleaning
            </strong>{" "}
            understands that dealing with disabilities along with the physically
            taxing and repetitive cleaning tasks is not an easy-peasy job. As a
            homeowner, you cannot ignore the cleaning tasks as dust, bacteria
            and household rubbish might quickly start to accumulate.
            Housekeeping is considered an indispensable chore that is required
            to promote healthiness and to enhance the living standards.
          </p>
          {/* <Link>
            <span>Read More</span>
            <img
              src={require("../../../Assets/Images/Icons/enquire-blue.png")}
              alt=""
            />
          </Link> */}
        </div>
      </div>

      <div className="change-slide">
        <div className="container-1">
          <h2>NDIS Cleaning Services In Melbourne</h2>
          <p>
            With an efficient, affordable and a competent cleaning service in
            mind, we started Pure N Bright Cleaning. We knew it won't be
            possible without the help of a fully skilled technicians.
          </p>
        </div>

        <div className="container-2">
          <h2>NDIS CLEANING SERVICES</h2>
        </div>

        <div className="container-3">
          <div className="switch">
            <div
              onClick={() => setActive("rug")}
              className={active === "rug" ? "box active" : "box"}
            >
              <img
                src={require("../../../Assets/Images/Services/carpet-icon.png")}
                alt=""
              />
              <p>Rug Cleaning </p>
            </div>

            <div
              onClick={() => setActive("carpet")}
              className={active !== "rug" ? "box active" : "box"}
            >
              <img
                src={require("../../../Assets/Images/Services/carpet-icon.png")}
                alt=""
              />
              <p>Carpet Cleaning </p>
            </div>
          </div>

          <div className="content">
            <div className="info">
              {active === "rug" ? (
                <>
                  <h2>Rug Cleaning Melbourne</h2>
                  <p>
                    Welcome to Pure n Bright Carpet Cleaning Melbourne Pure N
                    Bright carpet steam cleaning operators use advanced
                    technology machines that will restore and maintain the look
                    and feel of your carpets. We have experienced technicians,
                    delivering Quality and affordable carpet cleaning services
                    at all time. Our friendly and professional staff handles our
                    carpet cleaning services and help your carpet return
                  </p>

                  <Link to={"/services/rug-cleaning-melbourne"}>
                    <span>Read More</span>
                    <img
                      src={require("../../../Assets/Images/Icons/enquire-white.png")}
                      alt=""
                    />
                  </Link>
                </>
              ) : (
                <>
                  <h2>Carpet Cleaning Melbourne</h2>
                  <p>
                    CARPET CLEANING MELBOURNE Pure N Bright Carpet Cleaning
                    Melbourne, a professional carpet steam cleaning company in
                    Melbourne, uses the latest and best Eco friendly cleaning
                    solutions for the health of our technicians and clients. We
                    strive to provide a highly professional service beyond our
                    competitors. Our systems are in line with highly advanced
                    innovative technologies in carpet cleaning Melbourne.
                  </p>

                  <Link to={"/services/carpet-cleaning-melbourne"}>
                    <span>Read More</span>
                    <img
                      src={require("../../../Assets/Images/Icons/enquire-white.png")}
                      alt=""
                    />
                  </Link>
                </>
              )}
            </div>
            <div className="img">
              <img
                src={
                  active === "rug"
                    ? require("../../../Assets/Images/Services/rug.webp")
                    : require("../../../Assets/Images/Services/carpet.webp")
                }
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="rug-service reverse">
        <div className="rug-service-img">
          <h2>Pure Bright Cleaning Is</h2>
          <h4>NDIS Approved House Cleaning Provider</h4>
          <img
            src={require("../../../Assets/Images/Services/Rug/main/rug-cleaning2.webp")}
            alt=""
          />
        </div>
        <div className="rug-service-content">
          <h2>Pure Bright Cleaning Is</h2>
          <h4>NDIS Approved House Cleaning Provider</h4>
          <p>
            <img
              src={require("../../../Assets/Images/Icons/ndis.png")}
              alt=""
            />
            We are an Australia based registered NDIS service provider,
            prestigious and renowned company with hands-on experience, along
            with our services, your safety and security are imperative to us.
            That's why we have a team of workers who have undergone our rigorous
            test and are trustworthy to rely on for all your housing chores
            requirements.
          </p>
          <br />
          <br />
          <br />
          <br />

          <p>
            We have an ethos to improve the lives of individuals by assisting
            them to provide an excellent range of services. Our NDIS cleaning
            services can be scheduled as per your requirements of daily, weekly,
            or monthly.
          </p>
          {/* <h3>
            We offer a comprehensive service to all domestic and commercial
            clients. We invite you to try our carpet cleaning services and
            become one of our many satisfied customers who choose to use us
            Again and Again.
          </h3> */}
        </div>
      </div>

      <div className="ndis-main-info">
        <div className="container-1-wrapper">
          <div className="container-1">
            <div className="heading">
              <p>Our Services Include</p>
            </div>
            <ul>
              <li>Upholstery cleaning</li>
              <li>Carpet Cleaning</li>
              <li>Pressure Cleaning</li>
              <li>Regular household cleaning</li>
              <li>Water and Floor Damage restoration</li>
              <li>End of lease cleaning</li>
              <li>Window Cleaning</li>
              <li>Leather cleaning</li>
              <li>Car and home upholstery cleaning</li>
              <li>Tiles and grout cleaning</li>
              <li>Pressure cleaning and others.</li>
            </ul>
          </div>
          <div className="container-1-img">
            <img
              src={require("../../../Assets/Images/NDIS/ndis-sub-banner-3.jpg")}
              alt=""
            />
          </div>
        </div>

        <div className="container-2-wrapper">
          <div className="heading">
            <p>Value for Money</p>
          </div>
          <div className="content">
            <p>
              All our staff has state-of-art equipment and is highly trained and
              experienced to do the best possible job. Our motto is to serve
              individuals with mobility restrictions and give them quality
              service to meet their everyday living needs.{" "}
            </p>
          </div>
        </div>

        <div className="container-3-wrapper">
          <div className="container-3">
            <div className="heading">
              <p>How to avail NDIS Cleaning services?</p>
            </div>
            <div className="content">
              <img
                src={require("../../../Assets/Images/NDIS/ndis-sub-banner-4.jpg")}
                alt=""
              />
              <p>
                The expenditure of cleaning is determined by the size of the
                room, material and various other factors. You must be registered
                under the NDIS norms to avail the services. The general rule
                applies under the scheme: whether it is reasonable or necessary
                and directly related to your disability. Such services include
                carpet cleaning, general house cleaning, and others. If you are
                not categorized to be approved for NDIS, you can stay privately
                to get housework and cleaning jobs.{" "}
              </p>
              <br />
              <br />
              <br />
              <p>
                The home is a reflection of a person’s personality and it is
                everyone’s duty to keep it healthy and aesthetically clean. Get
                the right solution from Pure and bright cleaning and take
                advantage of high-quality cleaning services to meet your
                specific requirements.
                <Link to={"/contact-us"}>
                  <span> Connect to our staff and get tailored solutions.</span>
                </Link>
              </p>
            </div>
          </div>
          {/* <div className="container-3-img"></div> */}
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

      <div className="stain">
        <div className="heading">
          <h1>Carpet Stain Protectors</h1>
          <h2>We Can Help You With Any Of Your Carpet Cleaning Needs</h2>
          <p>
            Protectors are invisible and don't disturb the touch or quality of
            the carpet or fabric. Professionally-applied carpet protectors help
            prevent permanent damage, blot up spills before they become stains,
            resist soiling and keep dirt from penetrating between the fibers and
            improve vacuuming efficiency.
          </p>
        </div>

        <div className="stain-wrapper">
          <div className="main-info">
            <img
              src={require("../../../Assets/Images/RugCLeaning/icons/clean.webp")}
              alt=""
            />
          </div>
          <div className="icon-info">
            <div className="icon-box-wrapper">
              <div className="icon-box1">
                <div className="icon">
                  <img
                    src={require("../../../Assets/Images/RugCLeaning/icons/1.webp")}
                    alt=""
                  />
                </div>
                <div className="info">
                  <h1>MOVE OUT/IN</h1>
                  <p>
                    Worried about your bond? our move out carpet cleaning helps
                    you to get your bond back as we take all the necessary
                    steps.
                  </p>
                </div>
              </div>
            </div>

            <div className="icon-box-wrapper">
              <div className="icon-box2">
                <div className="icon">
                  <img
                    src={require("../../../Assets/Images/RugCLeaning/icons/2.webp")}
                    alt=""
                  />
                </div>
                <div className="info">
                  <h1>FRESHENING UP</h1>
                  <p>
                    Getting your carpet cleaned every 4 months provides you the
                    fresh, healthy and safe environment.
                  </p>
                </div>
              </div>
            </div>

            <div className="icon-box-wrapper">
              <div className="icon-box3">
                <div className="icon">
                  <img
                    src={require("../../../Assets/Images/RugCLeaning/icons/3.webp")}
                    alt=""
                  />
                </div>
                <div className="info">
                  <h1>STAIN/SPILL REMOVAL</h1>
                  <p>
                    Small kids? pets? any party stains/spills? our fully trained
                    staff use the latest cleaning technology.
                  </p>
                </div>
              </div>
            </div>

            <div className="icon-box-wrapper">
              <div className="icon-box4">
                <div className="icon">
                  <img
                    src={require("../../../Assets/Images/RugCLeaning/icons/4.webp")}
                    alt=""
                  />
                </div>
                <div className="info">
                  <h1>FLOODED CARPET</h1>
                  <p>
                    Little delay to get your flooded carpet fixed can end up in
                    damaged carpet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ndis-img">
        <div className="img-1">
          <Link to={"/services/rug-cleaning-melbourne"}>
            <img
              src={require("../../../Assets/Images/NDIS/ndis-sub-banner-1.png")}
              alt=""
            />
          </Link>
        </div>

        <div className="img-2">
          <Link to={"/services/rug-cleaning-melbourne"}>
            <img
              src={require("../../../Assets/Images/NDIS/ndis-sub-banner-2.png")}
              alt=""
            />
          </Link>
          <h2>
            We specialize in Rug Cleaning and offer Pick up and Drop Off
            Service.
          </h2>
          <p>
            We clean all type of rugs. Your valuable rugs will be cleaned in our
            fully equipped factory with advanced technology machines where the
            rugs can be taken care of with love and attention and dried with in
            half an hour so they do not loose it’s beauty and color.
          </p>
        </div>

        <div className="melborne">
          <h1>Serving All Melbourne Suburbs</h1>
          <img
            src={require("../../../Assets/Images/Banner/Melbourne.webp")}
            alt=""
          />
        </div>
      </div>

      <div className="threeD">
        <div className="wrapper">
          <div className="container">
            <div className="comment-box">
              <img
                src={require("../../../Assets/Images/Banner/comment-box.webp")}
                alt=""
              />
            </div>
            <div className="comment-info">
              <h1>Let’s Shine!</h1>
              <p>
                Reduce the dust mite allergen levels in your home with quality
                steam carpet cleaning melbourne
              </p>

              <Link to={"/contact-us"}>
                <button className="submit">
                  <span>Enquire Now</span>
                  <img
                    src={require("../../../Assets/Images/Icons/enquire-blue.png")}
                    alt=""
                  />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <ContactComp />

      <Footer />
    </>
  );
};

export default NDIS;
