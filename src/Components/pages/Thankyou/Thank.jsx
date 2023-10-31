import "./Thank.css";
import Navbar from "../../common/navbar/navbar";
import Banner from "../../common/Banner/Banner";
import Footer from "../../common/Footer/Footer";

const Thank = () => {
  return (
    <>
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
