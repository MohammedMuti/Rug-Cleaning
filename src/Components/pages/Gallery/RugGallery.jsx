import Banner from "../../common/Banner/Banner";
import ContactComp from "../../common/Contact/ContactComponent";
import Footer from "../../common/Footer/Footer";
import Navbar from "../../common/navbar/navbar";
import GallerySubComp from "./GallerySubComp";

const RugGallery = () => {
  return (
    <>
      <Navbar />
      <Banner sublink="Gallery" sublink2="Rug Cleaning Gallery" />
      <GallerySubComp
        title="Rug"
        images={[
          {
            src: require("../../../Assets/Images/Gallery/Rug/1.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Rug/2.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Rug/3.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Rug/4.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Rug/5.webp"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Rug/6.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Rug/7.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Rug/8.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Rug/9.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Rug/10.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Rug/11.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Rug/12.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Rug/13.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Rug/14.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Rug/15.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Rug/16.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Rug/17.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Rug/18.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Rug/19.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Rug/20.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Rug/21.jpeg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Rug/22.jpeg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Rug/23.jpeg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Rug/24.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Rug/25.jpeg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Rug/26.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Rug/27.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Rug/28.png"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Rug/29.png"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Rug/30.jpeg"),
          },
        ]}
      />
      <ContactComp />
      <Footer />
    </>
  );
};

export default RugGallery;
