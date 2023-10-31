import "./GallerySubComp.css";
import { SlideshowLightbox } from "lightbox.js-react";
import "lightbox.js-react/dist/index.css";

const GallerySubComp = (props) => {
  return (
    <>
      <div className="gallery-sub">
        <div className="gallery-sub-title">
          <h2>{props.title} Cleaning Gallery Album</h2>
          <p>
            Checkout Out Our Recent Before / After {props.title} Cleaning Work
          </p>
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
    </>
  );
};

export default GallerySubComp;
