import "./FAQ.css";
import Banner from "../../common/Banner/Banner";
import Footer from "../../common/Footer/Footer";
import Navbar from "../../common/navbar/navbar";
import FAQComp from "./FAQComp";
import ContactComp from "../../common/Contact/ContactComponent";
import NavMain from "../../common/navbar/NavMain";

const FAQ = () => {
  return (
    <>
      <Navbar />
      <NavMain />
      <Banner
        img={require("../../../Assets/Images/Banner/faq-banner.webp")}
        sublink={"FAQ"}
        slogan="Frequently Asked Questions"
      />
      <div className="faq">
        <div className="faq-heading">
          <h1>Frequently</h1>
          <h2>Asked Questions</h2>
        </div>
        <div className="lists">
          <FAQComp
            question="Can We Walk On The Carpet After It Has Been Cleaned?"
            answer="Yes, but we recommend outdoor shoes are not used."
          />
          <FAQComp
            question="How Often Should I Have My Carpets And Upholstery Professionally Cleaned?"
            answer="All home/work environments are different. This depends on each individual customers particular needs and requirements. Some experts recommend as often as every six months, most manufacturers recommend that carpets are professionally cleaned every 12 to 18 months. However it is entirely up to you. Allowing soil to build up will matt the pile together and significantly reduce the life of a carpet. Carpets should be cleaned on a regular basis and before they become heavily soiled for hygiene reasons and to prolong the carpets life."
          />
          <FAQComp
            question="How Long Will It Take My Carpets And Upholstery To Dry?"
            answer="Drying times depend on many conditions including, how soiled the item is, how much water is needed to clean it, weather conditions, indoor temperature and the atmosphere. However when we clean a carpet/fabric by our hot water extraction process they should be dry within 4 to 12 hours."
          />
          <FAQComp
            question="What Are The Benefits Of Carpet And Upholstery Cleaning Maintenance?"
            answer="Thorough care and maintenance of you carpets and upholstery can preserve their appearance and increase there longevity in both domestic homes and commercial premises for years and years. Cleaning will also brighten colours and provide a cleaner, safer and healthier indoor environment. Failure to take care of your carpets and upholstery will result in premature wear and damage. In essence professional carpet and upholstery cleaning cares for your investment and makes the life of your investment last longer."
          />
          <FAQComp
            question="I Have Children/Pets Will They Be Affected By The Cleaning Process Or Chemicals?"
            answer="NO. Health and safety is of paramount importance to us. Professional cleaning solutions are tested for there effects on the environment and occupants of areas in which they are used. Cleaners Pure N Bright Cleaning use only the best and latest environmentally green products, however it is recommended that children and pets stay off a damp carpet until it is completely dry, to prevent slipping and falling hazards and tracking in fresh soil."
          />
          <FAQComp
            question="Will My Carpets/Upholstery Become Re-Soiled Quicker Following Cleaning?"
            answer="NO. The chemicals and detergents that Pure N Bright Cleaning use are manufactured to the highest specifications for quality and effectiveness. We only use detergents designed for the removal of soil from carpets and upholstery. All chemicals applied in the cleaning process are the very best on the market and are also all completely rinsed out during the cleaning process. Because we use the best machinery and chemicals there are no sticky residues left in your carpet/fabric that other companies may use which attract re-soiling."
          />
          <FAQComp
            question="Can I Get A Free Quote Over The Phone?"
            answer="Yes. We can normally give a free quote going off specific questions that we ask as long as the customer can give us an idea of approximate room sizes. Large office areas are normally required to have a site visit."
          />
          <FAQComp
            question="Do Fabric Protectors Really Work?"
            answer="Fabric protectors will not prevent your carpet from getting dirty, unfortunately nothing will. Their purpose is to protect your carpet from stains and to prolong the life of the fabric, which they do well when applied properly."
          />
          <FAQComp
            question="How Are Pet Stains And Odours Treated?"
            answer="Pet urine never really dries, because dogs and cats don’t sweat their urine contains alkaline salts which absorb moisture out of the air. This becomes a fedding ground for bacteria which causes odour staining and discolouration. Minor conditions are treated with germicidal and enzyme surface treatments. Major conditions may require pad replacement on upholstery, floor and backing treatment and underlay replacement on carpeted areas."
          />
        </div>
      </div>
      <ContactComp />
      <Footer />
    </>
  );
};

export default FAQ;
