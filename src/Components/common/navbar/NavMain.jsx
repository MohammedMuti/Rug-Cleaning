import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faBars,
  faMultiply,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../../Assets/Images/Logo/Pure-N-Bright-Logo.png.webp";
import "./NavMain.css";
import React from "react";
import SubBars from "./SubBars";

const Navbar = () => {
  const [click, setClick] = useState(true);
  const [meanNav, setMeanNav] = useState(false);

  const handleClick = () => {
    console.log(click);
    setClick(!click);
  };

  const path = useLocation().pathname;
  console.log(path);

  return (
    <>
      <div className={"navbarM"}>
        <div id="scroll-container">
          <div id="scroll-text">
            Pure N Bright Cleaning is taking all the necessary precautions and
            following safety guidelines for Covid19, which have been instructed
            by the Australian Government for our staff and clients. For more
            updates Click here
          </div>
        </div>

        <div className="navbar_wrapper">
          <div className="navbar_logo">
            <Link to={"/"}>
              <img src={logo} alt="" />
            </Link>
          </div>

          <div className="nav-content">
            <div className="nav-content-u">
              <Link className="nav-icon-wrapper">
                <div className="nav-icon">
                  <Link>
                    <img
                      src={require("../../../Assets/Images/Icons/mail-icon.webp")}
                      alt=""
                    />
                  </Link>
                </div>
                <span>Contact us</span>
              </Link>
              <Link className="nav-icon-wrapper">
                <div className="nav-icon">
                  <Link>
                    <img
                      src={require("../../../Assets/Images/Icons/phone-icon.png")}
                      alt=""
                    />
                  </Link>
                </div>
                <span>1300 360 274</span>
              </Link>
              <button>Enquire Now</button>
              <FontAwesomeIcon
                onClick={() => setMeanNav(!meanNav)}
                icon={faBars}
              />
            </div>
            <div className="nav-content-d">
              <ul>
                <Link
                  to={"/"}
                  className={path === "/" ? "link active" : "link"}
                >
                  <li>HOME</li>
                </Link>
                <Link
                  to={"/services/carpet-cleaning-melbourne"}
                  className={
                    path === "/services/carpet-cleaning-melbourne"
                      ? "link active"
                      : "link"
                  }
                >
                  <li>CARPET CLEANING</li>
                </Link>
                <SubBars
                  title="Services"
                  titlePath="/services"
                  height={14 + "rem"}
                  opt={[
                    {
                      name: "Carpet Cleaning Melbourne",
                      link: "/services/carpet-cleaning-melbourne",
                    },
                    {
                      name: "Rug Cleaning Melbourne",
                      link: "/services/rug-cleaning-melbourne",
                    },
                    {
                      name: "Rug Repair Melbourne",
                      link: "/services/rug-repair-melbourne",
                    },
                  ]}
                />
                <Link
                  to={"/gallery"}
                  className={path === "/gallery" ? "link active" : "link"}
                >
                  <li>GALLERY</li>
                </Link>
                <SubBars
                  title="Why Us?"
                  titlePath="/why-us"
                  height={14 + "rem"}
                  opt={[
                    {
                      name: "Blog",
                      link: "/blog",
                    },
                    {
                      name: "FAQ",
                      link: "/faq",
                    },
                    {
                      name: "Terms & Conditions",
                      link: "/terms-and-conditions",
                    },
                  ]}
                />
                <Link
                  to={"/contact-us"}
                  className={path === "/contact-us" ? "link active" : "link"}
                >
                  <li>CONTACT US</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <div className="MeanNav">
          <ul className={meanNav ? "mean-nav-list active" : "mean-nav-list"}>
            <Link to={"/"} className={path === "/" ? "link active" : "link"}>
              <li>
                <FontAwesomeIcon icon={faArrowRight} /> HOME
              </li>
            </Link>
            <Link
              to={"/services/carpet-cleaning-melbourne"}
              className={
                path === "/services/carpet-cleaning-melbourne"
                  ? "link active"
                  : "link"
              }
            >
              <li>
                <FontAwesomeIcon icon={faArrowRight} /> CARPET CLEANING
              </li>
            </Link>
            <Link
              to={"/services"}
              className={path === "/services" ? "link active" : "link"}
            >
              <li>
                <FontAwesomeIcon icon={faArrowRight} /> SERVICES
              </li>
            </Link>
            <Link
              to={"/gallery"}
              className={path === "/gallery" ? "link active" : "link"}
            >
              <li>
                <FontAwesomeIcon icon={faArrowRight} /> GALLERY
              </li>
            </Link>
            <Link
              to={"/why-us"}
              className={path === "/why-us" ? "link active" : "link"}
            >
              <li>
                <FontAwesomeIcon icon={faArrowRight} /> WHY US?
              </li>
            </Link>
            <Link
              to={"/contact-us"}
              className={path === "/contact-us" ? "link active" : "link"}
            >
              <li>
                <FontAwesomeIcon icon={faArrowRight} /> CONTACT US
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
