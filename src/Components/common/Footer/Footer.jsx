import {
  faAngleDoubleRight,
  faAngleDoubleUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const [toTop, setToTop] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY < 100) {
        setToTop(false);
      } else {
        setToTop(true);
      }
    });
  });

  return (
    <>
      <footer className="footer">
        <div className="footer-1">
          <div className="links">
            <div className="heading">
              <h1>USEFUL LINKS</h1>
            </div>
            <div className="content">
              <ul>
                <li>
                  <Link to={"/services"}>
                    <FontAwesomeIcon icon={faAngleDoubleRight} /> Services
                  </Link>
                </li>
                <li>
                  <Link to={"/special-deals"}>
                    <FontAwesomeIcon icon={faAngleDoubleRight} /> Specials
                  </Link>
                </li>
                <li>
                  <Link to={"/gallery"}>
                    <FontAwesomeIcon icon={faAngleDoubleRight} /> Gallery
                  </Link>
                </li>
                <li>
                  <Link to={"/why-us"}>
                    <FontAwesomeIcon icon={faAngleDoubleRight} /> Why Us?
                  </Link>
                </li>
                <li>
                  <Link to={"/sitemap"}>
                    <FontAwesomeIcon icon={faAngleDoubleRight} /> Sitemap
                  </Link>
                </li>
                <li>
                  <Link to={"/contact-us"}>
                    <FontAwesomeIcon icon={faAngleDoubleRight} /> Contact Us
                  </Link>
                </li>
                <li>
                  <Link to={"/blog"}>
                    <FontAwesomeIcon icon={faAngleDoubleRight} /> Blog
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="service-off">
            <div className="heading">
              <h1>SERVICES WE OFFER</h1>
            </div>
            <div className="content">
              <ul>
                <li>
                  <Link to={"/services/carpet-cleaning-melbourne"}>
                    <FontAwesomeIcon icon={faAngleDoubleRight} /> Carpet
                    Cleaning
                  </Link>
                </li>
                <li>
                  <Link to={"/services/rug-cleaning-melbourne"}>
                    <FontAwesomeIcon icon={faAngleDoubleRight} /> Rug Cleaning
                  </Link>
                </li>
                <li>
                  <Link to={"/services/upholstery-cleaning-melbourne"}>
                    <FontAwesomeIcon icon={faAngleDoubleRight} /> Upholstery
                    Cleaning
                  </Link>
                </li>
                <li>
                  <Link to={"/services/ndis-house-cleaning-australia"}>
                    <FontAwesomeIcon icon={faAngleDoubleRight} /> NDIS House
                    Cleaning
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* 
          <div className="newsletter">
            <div className="heading">
              <h1>NEWSLETTER</h1>
            </div>
            <div className="news-content">
              <p>You will be notified when something new will appear.</p>
              <form onSubmit={submitEmail} action="">
                <input
                  type="text"
                  name="email"
                  placeholder="Enter your e-mail"
                  id=""
                  value={email}
                  onChange={(e) => setEmail(e.currentTarget.value)}
                />
                {emailError ? (
                  <p className="errorMessage">{emailError}</p>
                ) : null}
                <Link type="submit" onClick={submitEmail}>
                  <span>Subscribe</span>
                  <img
                    src={require("../../../Assets/Images/Icons/enquire-white.png")}
                    alt=""
                  />
                </Link>
              </form>
            </div>
          </div> */}

          <div className="contact-info">
            <div className="info-box">
              <img
                src={require("../../../Assets/Images/Icons/footer-location.webp")}
                alt=""
              />
              <span>Melbourne Australia</span>
            </div>
            <Link to={"tel:1300 360 274"}>
              <div className="info-box">
                <img
                  src={require("../../../Assets/Images/Icons/footer-phone.webp")}
                  alt=""
                />
                <span>1300 360 274</span>
              </div>
            </Link>
            <Link to={"mailto:info@purenbrightcleaning.com.au"}>
              <div className="info-box">
                <img
                  src={require("../../../Assets/Images/Icons/footer-mail.webp")}
                  alt=""
                />
                <span>info@purenbrightcleaning.com.au</span>
              </div>
            </Link>
          </div>
        </div>

        <div className="footer-2">
          <p>
            Copyright © Pure N Bright Carpet Cleaning 2023. All rights reserved.
          </p>
        </div>

        <div
          onClick={scrollToTop}
          className={toTop ? "fixed-top active" : "fixed-top"}
        >
          <FontAwesomeIcon icon={faAngleDoubleUp} />
        </div>

        <div className="whatsapp-button">
          <Link target={"_blank"} to={"https://wa.me/61424130610"}>
            <i class="fa-brands fa-whatsapp"></i>
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;
