import { Helmet } from "react-helmet";
import Banner from "../../common/Banner/Banner";
import ContactComp from "../../common/Contact/ContactComponent";
import Footer from "../../common/Footer/Footer";
import Navbar from "../../common/navbar/navbar";
import NavMain from "../../common/navbar/NavMain";
import GallerySubComp from "./GallerySubComp";

const TilesGallery = () => {
  document.title =
    "Tile And Grout Cleaning Gallery Album - Pure N Bright Cleaning";
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Tile And Grout Cleaning Gallery Album - Checkout Our Recent Before / After Carpet Cleaning Work."
        />
        <meta name="keywords" content="" />
      </Helmet>
      <Navbar />
      <NavMain />
      <Banner
        img={require("../../../Assets/Images/Banner/gallery-sub-banner.jpg")}
        sublink="Gallery"
        sublink2="Tiles and Grout Cleaning Gallery"
      />
      <GallerySubComp
        title="Tiles and Grout"
        images={[
          {
            src: require("../../../Assets/Images/Gallery/Tiles/1.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Tiles/2.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Tiles/3.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Tiles/4.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Tiles/5.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Tiles/6.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Tiles/7.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Tiles/8.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Tiles/9.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Tiles/10.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Tiles/11.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Tiles/12.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Tiles/13.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Tiles/14.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Tiles/15.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Tiles/16.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Tiles/17.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Tiles/18.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Tiles/19.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Tiles/20.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Tiles/21.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Tiles/22.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Tiles/23.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Tiles/24.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Tiles/25.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Tiles/26.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Tiles/27.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Tiles/28.jpg"),
          },
        ]}
      />
      <ContactComp />
      <Footer />
    </>
  );
};

export default TilesGallery;
