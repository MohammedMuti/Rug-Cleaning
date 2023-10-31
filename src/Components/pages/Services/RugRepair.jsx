import Banner from "../../common/Banner/Banner";
import ContactComp from "../../common/Contact/ContactComponent";
import Footer from "../../common/Footer/Footer";
import Navbar from "../../common/navbar/navbar";
import Benefit from "./Benefit";
import Helped from "./Helped";
import "./RugService.css";

const RugRepair = () => {
  return (
    <>
      <Navbar />
      <Banner sublink={"Services"} sublink2={"Rug Repair Melbourne"} />
      <div className="rug-service">
        <div className="rug-service-img">
          <img
            src={require("../../../Assets/Images/Services/Rug/main/rug-cleaning1.webp")}
            alt=""
          />
        </div>
        <div className="rug-service-content">
          <h2>Welcome to Pure N Bright</h2>
          <h4>Rug Cleaning Melbourne</h4>
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
        </div>
      </div>
      <div className="rug-service .reverse">
        <div className="rug-service-content">
          <h4>Steam Carpet</h4>
          <h2>Cleaning Melbourne</h2>
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
        <div className="rug-service-img">
          <img
            src={require("../../../Assets/Images/Services/Rug/main/rug-cleaning2.webp")}
            alt=""
          />
        </div>
      </div>
      <div className="benefits">
        <div className="benefits-heading">
          <h2>Our Benefits of Clean Service</h2>
        </div>
        <div className="benefits-content">
          <Benefit
            title="New LOOK"
            info="Leaving carpets refreshed and enhanced appearance."
            img={require("../../../Assets/Images/Services/Rug/icons/new-look.png")}
            title_m="STAIN REMOVAL"
            info_m="Spots, spills, stains and odours with our special techniques."
            img_m={require("../../../Assets/Images/Services/Rug/icons/stain-removal.png")}
          />

          <Benefit
            title="ELIMINATE ALLERGENS"
            info="Pollutants, bacteria, allergens, dust and mites and pet hair."
            img={require("../../../Assets/Images/Services/Rug/icons/eliminate-allergents.png")}
            title_m="
            FRESHNESS"
            info_m="Omnipresent freshness with carpet
            cleaning and deodorising."
            img_m={require("../../../Assets/Images/Services/Rug/icons/freshness.png")}
          />
          <Benefit
            title="
            ORGANIC CLEANING"
            info="Organic, non-toxic compounds to
            protect the health of your family & pets."
            img={require("../../../Assets/Images/Services/Rug/icons/organic-cleaning.png")}
            title_m="A 100% GUARANTEE"
            info_m="On all of our work."
            img_m={require("../../../Assets/Images/Services/Rug/icons/gurantee.png")}
          />
          <Benefit
            title="
            SAVES MONEY"
            info="A softer, better carpet so that you don't have to think about replacing them anymore."
            img={require("../../../Assets/Images/Services/Rug/icons/saves-money.png")}
            title_m="PET ODOUR AND UNPLEASANT ODOUR REMOVALS"
            info_m="Guaranteed cure for pet accidents."
            img_m={require("../../../Assets/Images/Services/Rug/icons/pet-odour.png")}
          />
        </div>
      </div>

      <div className="helped">
        <div className="helped-heading">
          <h3>Industries We've Helped For Their Cleaning Needs</h3>
        </div>
        <div className="helped-container">
          <Helped
            title={"Real Estate"}
            img={require("../../../Assets/Images/Services/Rug/helped/1.webp")}
          />
          <Helped
            title={"Health And Medical"}
            img={require("../../../Assets/Images/Services/Rug/helped/2.webp")}
          />
          <Helped
            title={"Banking And Finance"}
            img={require("../../../Assets/Images/Services/Rug/helped/3.webp")}
          />
          <Helped
            title={"Education And Training"}
            img={require("../../../Assets/Images/Services/Rug/helped/4.webp")}
          />
          <Helped
            title={"Goverment"}
            img={require("../../../Assets/Images/Services/Rug/helped/5.webp")}
          />
          <Helped
            title={"Professional Services"}
            img={require("../../../Assets/Images/Services/Rug/helped/6.webp")}
          />
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
      <ContactComp />
      <Footer />
    </>
  );
};

export default RugRepair;
