import { Helmet } from "react-helmet";
import Banner from "../../common/Banner/Banner";
import ContactComp from "../../common/Contact/ContactComponent";
import Footer from "../../common/Footer/Footer";
import Navbar from "../../common/navbar/navbar";
import NavMain from "../../common/navbar/NavMain";
import "./Gallery.css";
import GalleryComp from "./GalleryComp";

const Gallery = () => {
  document.title =
    "Checkout Our Recent Before After Cleaning Work in Melbourne - Pure N Bright Cleaning";
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Checkout our recent before after cleaning work in Melbourne for Carpet cleaning, Mattress cleaning, Tile and Grout cleaning, Upholstery cleaning, Rug cleaning, Window cleaning and Leather cleaning."
        />
        <meta name="keywords" content="" />
      </Helmet>
      <Navbar />
      <NavMain />
      <Banner
        img={require("../../../Assets/Images/Banner/gallery-banner.jpg")}
        sublink="Gallery"
        slogan="Checkout Our Albums"
      />
      <div className="gallery">
        <div className="gallery-heading">
          <h1>Before/After Cleaning Gallery</h1>
        </div>
        <div className="gallery_wrapper">
          <GalleryComp
            title="Carpet Cleaning"
            img={require("../../../Assets/Images/Gallery/carpet-cleaning-album.webp")}
            link="/gallery/carpet-cleaning-gallery"
          />

          <GalleryComp
            title="RUG Cleaning"
            img={require("../../../Assets/Images/Gallery/rug-cleaning-album.webp")}
            link="/gallery/rug-cleaning-gallery"
          />
          <GalleryComp
            title="UPHOLSTERY Cleaning"
            img={require("../../../Assets/Images/Gallery/upholstery-cleaning-album.webp")}
            link="/gallery/upholstery-cleaning-gallery"
          />
          <GalleryComp
            title="leather Cleaning"
            img={require("../../../Assets/Images/Gallery/Leather-cleaning-album.webp")}
            link="/gallery/leather-cleaning-gallery"
          />
          <GalleryComp
            title="TILE AND GROUT Cleaning"
            img={require("../../../Assets/Images/Gallery/tile-cleaning-album.webp")}
            link="/gallery/tile-grout-cleaning-gallery"
          />
          <GalleryComp
            title="Mattress Cleaning"
            img={require("../../../Assets/Images/Gallery/tile-cleaning-album.webp")}
            link="/gallery/mattress-cleaning-gallery"
          />
        </div>
      </div>
      <ContactComp />
      <Footer />
    </>
  );
};

export default Gallery;
