import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleUp,
  faArrowRight,
  faBars,
  faEnvelope,
  faMessage,
  faMinus,
  faMultiply,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../../Assets/Images/Logo/Pure-N-Bright-Logo.png.webp";
import "./navbar.css";
import React from "react";
import SubBars from "./SubBars";

const Navbar = () => {
  const [click, setClick] = useState(true);
  const [navbar, setNavbar] = useState(false);
  // const [lastScrollY, setLastScrollY] = useState(50);
  const [fade, setFade] = useState(true);
  const [meanNav, setMeanNav] = useState(false);
  const [services, setServices] = useState(false);
  const [why, setWhy] = useState(false);

  const handleClick = () => {
    console.log(click);
    setClick(!click);
  };

  const path = useLocation().pathname;
  console.log(services);
  console.log(why);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY < 300) {
        setNavbar(false);
      } else {
        setNavbar(true);
      }
      // setLastScrollY(window.scrollY);
    });
  });

  // useEffect(() => {
  //   const handleFade = (event) => {
  //     if (window.scrollY > 200) {
  //       setFade(false);
  //     } else setFade(true);
  //   };
  //   window.addEventListener("scroll", handleFade);

  //   return () => {
  //     window.removeEventListener("scroll", handleFade);
  //   };
  // });

  return (
    <>
      <div id="top"></div>
      <div className={navbar ? "navbar active" : "navbar"}>
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
                <span> Contact us</span>
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
                icon={meanNav ? faMultiply : faBars}
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
                      name: "Upholstery Cleaning Melbourne",
                      link: "/services/upholstery-cleaning-melbourne",
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
                <FontAwesomeIcon className="rightIcon" icon={faArrowRight} />{" "}
                HOME
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
                <FontAwesomeIcon className="rightIcon" icon={faArrowRight} />{" "}
                CARPET CLEANING
              </li>
            </Link>
            <Link
              to={"/services"}
              className={path === "/services" ? "link active" : "link"}
            >
              <li className="plus">
                <div>
                  <FontAwesomeIcon
                    style={{ marginRight: "5px" }}
                    className="rightIcon"
                    icon={faArrowRight}
                  />
                  SERVICES
                </div>
                <Link to={"#"}>
                  {!services ? (
                    <FontAwesomeIcon
                      onClick={() => setServices(!services)}
                      className="plusicon"
                      icon={faPlus}
                    />
                  ) : (
                    <FontAwesomeIcon
                      onClick={() => setServices(!services)}
                      className="plusicon"
                      icon={faMinus}
                    />
                  )}
                </Link>
              </li>
              <ul className={services ? "sub-mean servi" : "sub-mean"}>
                <Link
                  to={"/services/carpet-cleaning-melbourne"}
                  className={
                    path === "/services/carpet-cleaning-melbourne"
                      ? "link active"
                      : "link"
                  }
                >
                  <li>
                    <FontAwesomeIcon
                      className="rightIcon"
                      icon={faArrowRight}
                    />{" "}
                    Carpet Cleaning Melbourne
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
                    <FontAwesomeIcon
                      className="rightIcon"
                      icon={faArrowRight}
                    />{" "}
                    Carpet Cleaning Melbourne
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
                    <FontAwesomeIcon
                      className="rightIcon"
                      icon={faArrowRight}
                    />{" "}
                    Carpet Cleaning Melbourne
                  </li>
                </Link>
              </ul>
            </Link>

            <Link
              to={"/gallery"}
              className={path === "/gallery" ? "link active" : "link"}
            >
              <li>
                <FontAwesomeIcon className="rightIcon" icon={faArrowRight} />{" "}
                GALLERY
              </li>
            </Link>
            <Link
              to={"/why-us"}
              className={path === "/why-us" ? "link active" : "link"}
            >
              <li className="plus">
                <div>
                  <FontAwesomeIcon className="rightIcon" icon={faArrowRight} />{" "}
                  WHY US?
                </div>
                <Link to={"#"}>
                  {!why ? (
                    <FontAwesomeIcon
                      onClick={() => setWhy(!why)}
                      className="plusicon"
                      icon={faPlus}
                    />
                  ) : (
                    <FontAwesomeIcon
                      onClick={() => setWhy(!why)}
                      className="plusicon"
                      icon={faMinus}
                    />
                  )}
                </Link>
              </li>
              <ul className={why ? "sub-mean why" : "sub-mean"}>
                <Link
                  to={"/blog"}
                  className={path === "/blog" ? "link active" : "link"}
                >
                  <li>
                    <FontAwesomeIcon
                      className="rightIcon"
                      icon={faArrowRight}
                    />{" "}
                    Blog
                  </li>
                </Link>
                <Link
                  to={"/faq"}
                  className={path === "/faq" ? "link active" : "link"}
                >
                  <li>
                    <FontAwesomeIcon
                      className="rightIcon"
                      icon={faArrowRight}
                    />{" "}
                    FAQ
                  </li>
                </Link>
                <Link
                  to={"/terms-and-conditions"}
                  className={
                    path === "/terms-and-conditions" ? "link active" : "link"
                  }
                >
                  <li>
                    <FontAwesomeIcon
                      className="rightIcon"
                      icon={faArrowRight}
                    />{" "}
                    Terms & Conditions
                  </li>
                </Link>
              </ul>
            </Link>
            <Link
              to={"/contact-us"}
              className={path === "/contact-us" ? "link active" : "link"}
            >
              <li>
                <FontAwesomeIcon className="rightIcon" icon={faArrowRight} />{" "}
                CONTACT US
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
