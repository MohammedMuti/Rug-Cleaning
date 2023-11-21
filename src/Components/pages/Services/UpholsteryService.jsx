import { Link } from "react-router-dom";
import Banner from "../../common/Banner/Banner";
import ContactComp from "../../common/Contact/ContactComponent";
import Footer from "../../common/Footer/Footer";
import Navbar from "../../common/navbar/navbar";
import NavMain from "../../common/navbar/NavMain";
import "./UpholsteryService.css";
import ReactReadMoreReadLess from "react-read-more-read-less";
import { Helmet } from "react-helmet";

const UpholsteryService = () => {
  document.title = "Upholstery Cleaning Melbourne";
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Upholstery Cleaning Melbourne Pure n bright Melbourne offers the best solution for all your upholstery cleaning needs. Here at Pure N bright we have a team of highly professional and fully trained staff, fully equipped to fulfil all your upholstery cleaning needs. We provide satisfaction guaranteed service for all our clients."
        />
        <meta name="keywords" content="" />
      </Helmet>
      <NavMain />
      <Navbar />
      <Banner
        sublink="Services"
        sublink2="Upholstery Cleaning Melbourne"
        img={require("../../../Assets/Images/Banner/Upholstery-banner.jpeg")}
        bkg={require("../../../Assets/Images/Banner/Upholstery-banner.jpeg")}
      />
      <div className="upholstery">
        <div className="heading">
          <h1>Professional Upholstery Cleaning Melbourne</h1>
          <p></p>
        </div>

        <div className="info">
          <div className="img-container">
            <img
              src={require("../../../Assets/Images/UpholsteryCleaning/Upholstery1.jpg")}
              alt=""
            />
          </div>
          <div className="img-content">
            <p>
              Pure n bright Melbourne offers the best solution for all your
              upholstery cleaning needs. Here at Pure N bright we have a team of
              highly professional and fully trained staff, fully equipped to
              fulfil all your upholstery cleaning needs. We provide satisfaction
              guaranteed service for all our clients. The upholstery like
              couches, sofas, chairs, recliners and the furniture are the
              integral part of our home and as the time passes they start to
              show the signs of ageing and stop looking the way we bought them.
              The signs include dirt, pet hair, change in colour in some parts,
              stains and odours. Even if the upholstery does not look like it
              needs cleaning there is still a requirement of getting it washed
              after a certain period of time due to hygienic reasons as there
              might be germs or other pathogens residing in it. That is why it
              is very important to get some professional help to keep them
              looking like new.
            </p>
          </div>
        </div>
      </div>

      <div className="advantages">
        <div className="wrapper"></div>
        <div className="heading">
          <h1>Advantages Of Hiring</h1>
          <h2>Pure N Bright Team</h2>
        </div>

        <div className="content-container">
          <div className="content">
            <div className="img">
              <img
                src={require("../../../Assets/Images/Icons/tick.png")}
                alt=""
              />
            </div>
            <div className="info">
              <p>
                We do the pre inspection and perform an assessment of the
                upholstery that needs cleaning
              </p>
            </div>
          </div>

          <div className="content">
            <div className="img">
              <img
                src={require("../../../Assets/Images/Icons/tick.png")}
                alt=""
              />
            </div>
            <div className="info">
              <p>
                Our highly trained professionals are qualified to look at the
                stains and perform the cleaning in such an effective manner that
                gets rid of most of the stubborn stains
              </p>
            </div>
          </div>

          <div className="content">
            <div className="img">
              <img
                src={require("../../../Assets/Images/Icons/tick.png")}
                alt=""
              />
            </div>
            <div className="info">
              <p>
                After the assessment our highly trained technicians decide the
                type of the process and the shampoos required to perform the
                cleaning in order to get the perfect results
              </p>
            </div>
          </div>

          <div className="content">
            <div className="img">
              <img
                src={require("../../../Assets/Images/Icons/tick.png")}
                alt=""
              />
            </div>
            <div className="info">
              <p>
                We provide hassle free service to you. Once you book us and the
                technicians arrive at your place they take over and you don’t
                have to worry about anything. They leave you with the clean and
                nice smelling upholstery
              </p>
            </div>
          </div>

          <div className="content">
            <div className="img">
              <img
                src={require("../../../Assets/Images/Icons/tick.png")}
                alt=""
              />
            </div>
            <div className="info">
              <p>We use the most updated equipment to perform the cleaning</p>
            </div>
          </div>

          <div className="content">
            <div className="img">
              <img
                src={require("../../../Assets/Images/Icons/tick.png")}
                alt=""
              />
            </div>
            <div className="info">
              <p>
                We do provide the sanitising service as well so that the
                upholstery is left germ and pathogens free
              </p>
            </div>
          </div>

          <div className="content">
            <div className="img">
              <img
                src={require("../../../Assets/Images/Icons/tick.png")}
                alt=""
              />
            </div>
            <div className="info">
              <p>
                Our methods trusted and tested intensively so the upholstery
                does not suffer any damage during the cleaning process
              </p>
            </div>
          </div>

          <div className="content">
            <div className="img">
              <img
                src={require("../../../Assets/Images/Icons/tick.png")}
                alt=""
              />
            </div>
            <div className="info">
              <p>
                Protect your upholstery with scotchgard to avoid any stains and
                accidents
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="professional">
        <div className="professional_heading">
          <h2>How Do You Know</h2>
          <h3>When To Call For Professional Help</h3>
          <p>
            The upholstery in our house is an important part of our life. We
            spend a lot of time on our couches, recliners and chairs during the
            day and even at night when we are awake. That is why they require
            regular maintenance in order for us to stay healthy and germ free.
            There are a few things to look for to know when your furniture needs
            cleaning
          </p>
        </div>
        <div className="professional_content">
          <div className="professional_box">
            <h2>Visible Signs</h2>
            <img
              src={require("../../../Assets/Images/UpholsteryCleaning/Upholstery2.jpg")}
              alt=""
            />
            <p>
              <ReactReadMoreReadLess
                charLimit={200}
                readMoreText={"Read more ▼"}
                readLessText={"Read less ▲"}
              >
                {/* {myLongText} */}
                If your furniture starts looking patchy at places, it might be
                due to the dirt and dust accumulation in the fibres of the
                fabric. Sometimes it is not possible to get rid of the dirt with
                regular vacuuming. Even though we do perform the cleaning of our
                furniture after a regular interval of time we still need to get
                them professionally cleaned after a certain time period.
              </ReactReadMoreReadLess>
            </p>
          </div>
          <div className="professional_box">
            <h2>Spills/Accidents</h2>
            <img
              src={require("../../../Assets/Images/UpholsteryCleaning/Upholstery3.jpg")}
              alt=""
            />
            <p>
              <ReactReadMoreReadLess
                charLimit={200}
                readMoreText={"Read more ▼"}
                readLessText={"Read less ▲"}
              >
                {/* {myLongText} */}
                Sometimes our loved ones tend to spill food on the couches by
                accident. The most common spills that happen on the couches are
                tea/coffee. When we spill it the first instinct is to clean it
                ourselves quickly. So most people start to use home remedies
                like vinegar and baking soda etc to get rid of the stain. In
                reality that makes things even worse as these things react with
                the fibres and cause permanent discolouration.
              </ReactReadMoreReadLess>
            </p>
          </div>
          <div className="professional_box">
            <h2>Age Of The Furniture</h2>
            <img
              src={require("../../../Assets/Images/UpholsteryCleaning/Upholstery4.jpg")}
              alt=""
            />
            <p>
              <ReactReadMoreReadLess
                charLimit={200}
                readMoreText={"Read more ▼"}
                readLessText={"Read less ▲"}
              >
                {/* {myLongText} */}
                If you have had the furniture for a long time and never got it
                professionally cleaned you need to get it done due to hygienic
                reasons. The dirt and dust mites get accumulated in the fibres
                of the upholstery and can flare up the allergies. It is ideal to
                get the upholstery professionally cleaned once a year.
              </ReactReadMoreReadLess>
            </p>
          </div>
        </div>
      </div>

      <div className="carpet_service">
        <div className="cleaning_info">
          <h2>Check Our Recent Work</h2>
          <h3>BEFORE / AFTER COUCH CLEANING WORK</h3>
          <div className="imgs">
            <div className="img-content">
              <img
                src={require("../../../Assets/Images/Gallery/Upholstery/10.jpg")}
                alt=""
              />
            </div>
            <div className="img-content">
              <img
                src={require("../../../Assets/Images/Gallery/Upholstery/13.jpg")}
                alt=""
              />
            </div>
          </div>
          <Link to={"/gallery/upholstery-cleaning-gallery"}>
            <h4>Check Out the Gallery for more Images</h4>
            <img
              src={require("../../../Assets/Images/Icons/enquire-icon.png")}
              alt=""
            />
          </Link>
        </div>
      </div>

      <div className="experience">
        <div className="content-u">
          <h1>OVER 15 YEARS EXPERIENCE IN</h1>
          <h2>
            Cleaning industry we understand how much you love your sofa so as
            we, our fully trained technicians bring your sofa back to life.
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
              - Our end of lease sofa cleaning gives 100% bond back guarantee.
            </p>
          </div>
        </div>
      </div>

      <ContactComp />
      <Footer />
    </>
  );
};

export default UpholsteryService;
