import "./Blog.css";
import {
  faArrowRight,
  faChevronRight,
  faComment,
  faPerson,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
const BlogComp = (props) => {
  return (
    <>
      <div className="blog">
        <Link state={{ image: props.img }} to={props.link}>
          <div className="blog_img">
            <Link state={{ image: props.img }} to={props.link}>
              <img src={props.img} alt="" />
            </Link>
          </div>
        </Link>
        <div className="blog_info">
          <h4>{props.title}</h4>
          <div className="extras">
            <span>
              <FontAwesomeIcon icon={faUser} />
              by Pure N Bright Team
            </span>
            <span>
              <FontAwesomeIcon icon={faComment} />0 Comments
            </span>
          </div>
          <div className="desc">
            <p>{props.desc}</p>
          </div>
          <Link state={{ image: props.img }} to={props.link}>
            <div className="button">
              READ MORE <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default BlogComp;
