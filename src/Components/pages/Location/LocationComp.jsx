import { SlideshowLightbox } from "lightbox.js-react";
import { Helmet } from "react-helmet";
import Banner from "../../common/Banner/Banner";
import ContactComp from "../../common/Contact/ContactComponent";
import Footer from "../../common/Footer/Footer";
import Navbar from "../../common/navbar/navbar";
import NavMain from "../../common/navbar/NavMain";
import "./LocationComp.css";

const LocationComp = (props) => {
  document.title = props.pagetitle;
  return (
    <>
      <Helmet>
        <meta name="description" content={props.desc} />
        <meta name="keywords" content="" />
      </Helmet>
      <NavMain />
      <Navbar />
      <Banner sublink="Locations" sublink2={props.title} />
      <div className="location-comp">
        <div className="heading">
          <h2>{props.title}</h2>
        </div>
        <div className="content">{props.content}</div>
        {console.log(props.images)}
        {props.images ? (
          <div className="gallery-sub">
            <div className="gallery-sub-title">
              <p>Checkout Out Our Recent</p>
              <h2> Before / After Cleaning Cleaning Work</h2>
            </div>
            <div className="gallery-sub-imgs">
              <div className="gallery-sub-img">
                <SlideshowLightbox
                  images={props.images}
                  showThumbnails={true}
                  className="container grid grid-cols-3 gap-2 mx-auto"
                ></SlideshowLightbox>
              </div>
            </div>
          </div>
        ) : null}
      </div>
      <ContactComp />
      <Footer />
    </>
  );
};

export default LocationComp;
