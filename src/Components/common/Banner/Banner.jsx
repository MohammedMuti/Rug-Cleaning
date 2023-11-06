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
    // <>
    //   <div
    //     className="banner-new"
    //     style={{
    //       backgroundImage: `url(${props.img})`,
    //     }}
    //   ></div>
    // </>
    <React.Fragment>
      <div
        className="banner"
        style={{
          backgroundImage: `
          url(${require("../../../Assets/Images/Back/Main/1.jpg")})`,
        }}
      >
        <div className="banner-content">
          <div className="banner-title">
            <h2>{props.sublink2 ? props.sublink2 : props.sublink}</h2>
            {/* <p>{props.slogan}</p> */}
            <div className="buttons">
              <Link to={"/contact-us"}>
                <button>
                  <FontAwesomeIcon icon={faPaperPlane} />
                  Make an Appointment
                </button>
              </Link>
              <Link to={"tel:1300360274"}>
                <button>
                  <FontAwesomeIcon icon={faPhone} />
                  Call Now
                </button>
              </Link>
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
