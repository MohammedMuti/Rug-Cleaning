import "./Thank.css";
import Navbar from "../../common/navbar/navbar";
import Banner from "../../common/Banner/Banner";
import Footer from "../../common/Footer/Footer";
import NavMain from "../../common/navbar/NavMain";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const Thank = () => {
  const navigate = useNavigate();

  useEffect(() => {
    function navigation() {
      setTimeout(() => {
        navigate("/");
      }, 7000);
    }
    // window.location.reload(false);
    navigation();
  }, []);

  document.title = "Thank You";
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Thanks for your enquiry. One of our staff member will contact you soon."
        />
        <meta name="keywords" content="" />
      </Helmet>
      <NavMain />
      <Navbar />
      <Banner sublink="Thank-You" />
      <div className="thank">
        <h1>Thank you</h1>
        <h2>We have recieved your request. We will connect with you ASAP.</h2>
      </div>
      <Footer />
    </>
  );
};

export default Thank;
