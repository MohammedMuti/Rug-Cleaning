import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Banner from "../../common/Banner/Banner";
import ContactComp from "../../common/Contact/ContactComponent";
import Footer from "../../common/Footer/Footer";
import Navbar from "../../common/navbar/navbar";
import NavMain from "../../common/navbar/NavMain";
import Benefit from "./Benefit";
import Helped from "./Helped";
import "./RugService.css";

const RugService = () => {
  document.title =
    "Rug Cleaning Melbourne: Professional rug Cleaners | Persian, Oriental rug";
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Rug Wash Melbourne - Our Dry/Steam Rug cleaning process not only removes dirt, allergens, and grime and leaves your Persian/Oriental rugs looking great."
        />
        <meta name="keywords" content="" />
      </Helmet>
      <Navbar />
      <NavMain />
      <Banner
        img={require("../../../Assets/Images/Banner/blog-sub-banner.jpg")}
        sublink={"Services"}
        sublink2={"Rug Cleaning Melbourne"}
      />
      <div className="rug-service">
        <div className="rug-service-img">
          <h2>Rug Cleaning Specialists</h2>

          <img
            src={require("../../../Assets/Images/Services/Rug/main/rug-cleaning1.webp")}
            alt=""
          />
        </div>
        <div className="rug-service-content">
          <h2>Rug Cleaning Specialists</h2>
          <p>
            Pure N Bright carpet steam cleaning operators use advanced
            technology machines that will restore and maintain the look and feel
            of your carpets. We have experienced technicians, delivering Quality
            and affordable carpet cleaning services at all time. Our friendly
            and professional staff handles our carpet cleaning services and help
            your carpet return to an almost as good as new condition
            guaranteeing best results and customer satisfaction.
          </p>
          <h3>
            Let our technicians bring your carpets back to life and make your
            home or workplace a more pleasant place to spend time
          </h3>
          {/* <Link>
            <span>Read More</span>
            <img
              src={require("../../../Assets/Images/Icons/enquire-blue.png")}
              alt=""
            />
          </Link> */}
        </div>
      </div>

      <div className="rug-service reverse">
        <div className="rug-service-img">
          <h2>Steam Carpet</h2>
          <h4>Cleaning Melbourne</h4>
          <img
            src={require("../../../Assets/Images/Services/Rug/main/rug-cleaning2.webp")}
            alt=""
          />
        </div>
        <div className="rug-service-content">
          <h2>Steam Carpet</h2>
          <h4>Cleaning Melbourne</h4>
          <p>
            Steam carpet cleaning Melbourne removes underlying dirt, allergens,
            pathogens, contaminants, soil, and bugs and brings around your
            carpet's presence in a clean condition. It is the best suggested way
            of carpet steam cleaning in Melbourne by carpet manufacturers as it
            does not wear down or damage the fibers of the carpet. Our Melbourne
            carpet steam cleaning process gives carpets a deep clean and they
            are usually dry within 2 hours. Pure N Bright recommends using
            carpet steam cleaner for most of the types of domestic carpet
            cleaning in Melbourne.
          </p>
          <h3>
            We offer a comprehensive service to all domestic and commercial
            clients. We invite you to try our carpet cleaning services and
            become one of our many satisfied customers who choose to use us
            Again and Again.
          </h3>
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

      <div className="helped">
        <div className="helped-heading">
          <h3>Industries We've Helped For Their </h3>
          <h2>Cleaning Needs</h2>
        </div>
        <div className="helped-wrapper">
          <div className="helped-container">
            <div className="help-one">
              <div className="section-1">
                <Helped
                  title={"Real Estate"}
                  img={require("../../../Assets/Images/Services/Rug/helped/1.webp")}
                />
                <Helped
                  title={"Health And Medical"}
                  img={require("../../../Assets/Images/Services/Rug/helped/2.webp")}
                />
              </div>
              <div className="section-1">
                <Helped
                  title={"Banking And Finance"}
                  img={require("../../../Assets/Images/Services/Rug/helped/3.webp")}
                />
                <Helped
                  title={"Education And Training"}
                  img={require("../../../Assets/Images/Services/Rug/helped/4.webp")}
                />
              </div>
            </div>

            <div className="help-two">
              <img
                src={require("../../../Assets/Images/Logo/Pure-N-Bright-Logo.png.webp")}
                alt=""
              />
            </div>

            <div className="help-one">
              <div className="section-1">
                <Helped
                  title={"Goverment"}
                  img={require("../../../Assets/Images/Services/Rug/helped/5.webp")}
                />
                <Helped
                  title={"Professional Services"}
                  img={require("../../../Assets/Images/Services/Rug/helped/6.webp")}
                />
              </div>
              <div className="section-1">
                <Helped
                  title={"Construction And Engineering"}
                  img={require("../../../Assets/Images/Services/Rug/helped/7.webp")}
                />
                <Helped
                  title={"Legal And Property"}
                  img={require("../../../Assets/Images/Services/Rug/helped/8.webp")}
                />
              </div>
            </div>
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

export default RugService;
