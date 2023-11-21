import { Helmet } from "react-helmet";
import Banner from "../../common/Banner/Banner";
import ContactComp from "../../common/Contact/ContactComponent";
import Footer from "../../common/Footer/Footer";
import Navbar from "../../common/navbar/navbar";
import NavMain from "../../common/navbar/NavMain";
import GallerySubComp from "./GallerySubComp";

const MattressGallery = () => {
  document.title = "Mattress Cleaning Gallery Album - Pure N Bright Cleaning";
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Mattress Cleaning Gallery Album- Checkout Our Recent Before / After Carpet Cleaning Work."
        />
        <meta name="keywords" content="" />
      </Helmet>
      <Navbar />
      <NavMain />
      <Banner
        img={require("../../../Assets/Images/Banner/gallery-sub-banner.jpg")}
        sublink="Gallery"
        sublink2="Mattress Cleaning Gallery"
      />
      <GallerySubComp
        title="Mattress"
        images={[
          {
            src: require("../../../Assets/Images/Gallery/Mattress/1.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Mattress/2.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Mattress/3.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Mattress/4.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Mattress/5.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Mattress/6.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Mattress/7.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Mattress/8.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Mattress/9.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Mattress/10.jpg"),
          },
        ]}
      />
      <ContactComp />
      <Footer />
    </>
  );
};

export default MattressGallery;
