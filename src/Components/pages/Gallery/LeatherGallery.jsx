import { Helmet } from "react-helmet";
import Banner from "../../common/Banner/Banner";
import ContactComp from "../../common/Contact/ContactComponent";
import Footer from "../../common/Footer/Footer";
import Navbar from "../../common/navbar/navbar";
import NavMain from "../../common/navbar/NavMain";
import GallerySubComp from "./GallerySubComp";

const LeatherGallery = () => {
  document.title = "Leather Cleaning Gallery Album - Pure N Bright Cleaning";
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Leather cleaning gallery album - Checkout Our Recent Before / After Carpet Cleaning Work."
        />
        <meta name="keywords" content="" />
      </Helmet>
      <Navbar />
      <NavMain />
      <Banner
        img={require("../../../Assets/Images/Banner/gallery-sub-banner.jpg")}
        sublink="Gallery"
        sublink2="Leather Cleaning Gallery"
      />
      <GallerySubComp
        title="Leather"
        images={[
          {
            src: require("../../../Assets/Images/Gallery/Leather/1.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Leather/2.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Leather/3.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Leather/4.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Leather/5.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Leather/6.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Leather/7.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Leather/8.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Leather/9.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Leather/10.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Leather/11.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Leather/12.jpg"),
          },
        ]}
      />
      <ContactComp />
      <Footer />
    </>
  );
};

export default LeatherGallery;
