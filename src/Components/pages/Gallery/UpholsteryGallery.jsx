import Banner from "../../common/Banner/Banner";
import ContactComp from "../../common/Contact/ContactComponent";
import Footer from "../../common/Footer/Footer";
import Navbar from "../../common/navbar/navbar";
import GallerySubComp from "./GallerySubComp";

const UpholsteryGallery = () => {
  return (
    <>
      <Navbar />
      <Banner sublink="Gallery" sublink2="Upholstery Cleaning Gallery" />
      <GallerySubComp
        title="Upholstery"
        images={[
          {
            src: require("../../../Assets/Images/Gallery/Upholstery/1.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Upholstery/2.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Upholstery/3.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Upholstery/4.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Upholstery/5.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Upholstery/6.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Upholstery/7.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Upholstery/8.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Upholstery/8.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Upholstery/9.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Upholstery/10.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Upholstery/11.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Upholstery/12.jpg"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Upholstery/13.jpg"),
          },
        ]}
      />
      <ContactComp />
      <Footer />
    </>
  );
};

export default UpholsteryGallery;
