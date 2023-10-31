import { Link } from "react-router-dom";

const GalleryComp = (props) => {
  return (
    <>
      <div className="gallery_box">
        <Link to={props.link}>
          <div className="gallery_img">
            <img src={props.img} alt="" />
          </div>
          <div className="gallery_title">
            <h2>{props.title}</h2>
          </div>
        </Link>
      </div>
    </>
  );
};

export default GalleryComp;
