import Banner from "../../common/Banner/Banner";
import ContactComp from "../../common/Contact/ContactComponent";
import Footer from "../../common/Footer/Footer";
import Navbar from "../../common/navbar/navbar";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="contact">
        <Banner sublink={"Contact"} slogan="Connect with us right now" />
        <ContactComp />

        <Footer />
      </div>
    </>
  );
};

export default Contact;
