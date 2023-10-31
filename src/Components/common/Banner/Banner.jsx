import {
  faChevronRight,
  faPaperPlane,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Banner.css";

const Banner = (props) => {
  const path = useLocation();

  const firstPath = path.pathname.split("/")[1];
  const secondPath = path.pathname.split("/")[2];

  return (
    <React.Fragment>
      <div
        className="banner"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),
          url(${
            props.background || require("../../../Assets/Images/Back/1.avif")
          })`,
        }}
      >
        <div className="banner-content">
          <div className="banner-title">
            <h2>{props.sublink2 ? props.sublink2 : props.sublink}</h2>
            <p>{props.slogan}</p>
            <div className="buttons">
              <button>
                <FontAwesomeIcon icon={faPaperPlane} />
                Make an Appointment
              </button>
              <button>
                <FontAwesomeIcon icon={faPhone} />
                Call Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="breadcrumbs">
        <div className="subs">
          <Link to="/">
            <p>Home</p>
          </Link>
          <FontAwesomeIcon icon={faChevronRight} />
          <Link to={`/${firstPath}`}>
            <p
              className="activeC"
              style={props.sublink2 ? { color: "black" } : null}
            >
              {props.sublink}
            </p>
          </Link>
          {props.sublink2 ? <FontAwesomeIcon icon={faChevronRight} /> : null}
          <Link to={`/${firstPath}/${secondPath}`}>
            <p className="activeC">{props.sublink2}</p>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Banner;
