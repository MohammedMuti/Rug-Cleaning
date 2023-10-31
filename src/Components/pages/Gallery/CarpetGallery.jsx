import Banner from "../../common/Banner/Banner";
import ContactComp from "../../common/Contact/ContactComponent";
import Footer from "../../common/Footer/Footer";
import Navbar from "../../common/navbar/navbar";
import GallerySubComp from "./GallerySubComp";

const CarpetGallery = () => {
  return (
    <>
      <Navbar />
      <Banner sublink="Gallery" sublink2="Carpet Cleaning Gallery" />
      <GallerySubComp
        title="Carpet"
        images={[
          {
            src: require("../../../Assets/Images/Gallery/Carpet/1.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Carpet/2.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Carpet/3.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Carpet/4.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Carpet/5.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Carpet/6.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Carpet/7.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Carpet/8.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Carpet/9.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Carpet/10.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Carpet/11.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Carpet/12.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Carpet/13.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Carpet/14.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Carpet/15.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Carpet/16.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Carpet/17.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Carpet/18.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Carpet/19.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Carpet/20.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Carpet/21.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Carpet/22.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Carpet/23.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Carpet/24.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Carpet/25.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Carpet/26.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Carpet/27.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Carpet/28.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Carpet/29.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Carpet/30.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Carpet/31.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Carpet/32.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Carpet/33.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Carpet/34.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Carpet/35.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Carpet/36.jpg"),
          },
        ]}
      />
      <ContactComp />
      <Footer />
    </>
  );
};

export default CarpetGallery;
