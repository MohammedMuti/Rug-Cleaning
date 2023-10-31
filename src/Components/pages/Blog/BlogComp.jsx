import "./Blog.css";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
const BlogComp = (props) => {
  return (
    <>
      <div className="blog">
        <div className="blog_img">
          <Link to={props.link}></Link>
          <img src={props.img} alt="" />
        </div>
        <div className="blog_info">
          <Link to={props.link}>
            <h4>{props.title}</h4>
          </Link>
          <Link state={{ image: props.img }} to={props.link}>
            <button>
              Know More <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default BlogComp;
