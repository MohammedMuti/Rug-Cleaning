import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
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
                  <Link to={""}>
                    <FontAwesomeIcon icon={faAngleDoubleRight} /> Services
                  </Link>
                </li>
                <li>
                  <Link to={""}>
                    <FontAwesomeIcon icon={faAngleDoubleRight} /> Specials
                  </Link>
                </li>
                <li>
                  <Link to={""}>
                    <FontAwesomeIcon icon={faAngleDoubleRight} /> Gallery
                  </Link>
                </li>
                <li>
                  <Link to={""}>
                    <FontAwesomeIcon icon={faAngleDoubleRight} /> Why Us?
                  </Link>
                </li>
                <li>
                  <Link to={""}>
                    <FontAwesomeIcon icon={faAngleDoubleRight} /> Sitemap
                  </Link>
                </li>
                <li>
                  <Link to={""}>
                    <FontAwesomeIcon icon={faAngleDoubleRight} /> ContactUs
                  </Link>
                </li>
                <li>
                  <Link to={""}>
                    <FontAwesomeIcon icon={faAngleDoubleRight} /> Blog
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="service-off">
            <div className="heading">
              <h1>SERVICE WE OFFER</h1>
            </div>
            <div className="content">
              <ul>
                <li>
                  <Link to={""}>
                    <FontAwesomeIcon icon={faAngleDoubleRight} /> Services
                  </Link>
                </li>
                <li>
                  <Link to={""}>
                    <FontAwesomeIcon icon={faAngleDoubleRight} /> Specials
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="newsletter">
            <div className="heading">
              <h1>NEWSLETTER</h1>
            </div>
            <div className="news-content">
              <p>You will be notified when somthing new will be appear.</p>
              <input
                type="text"
                name="email"
                placeholder="Enter your e-mail"
                id=""
              />
              <Link>
                <span>Subscribe</span>
                <img
                  src={require("../../../Assets/Images/Icons/enquire-white.png")}
                  alt=""
                />
              </Link>
            </div>
          </div>

          <div className="contact-info">
            <div className="info-box">
              <img
                src={require("../../../Assets/Images/Icons/footer-location.webp")}
                alt=""
              />
              <span>Melbourne Australia</span>
            </div>
            <div className="info-box">
              <img
                src={require("../../../Assets/Images/Icons/footer-phone.webp")}
                alt=""
              />
              <span>1300 360 274</span>
            </div>
            <div className="info-box">
              <img
                src={require("../../../Assets/Images/Icons/footer-mail.webp")}
                alt=""
              />
              <span>info@purenbrightcleaning.com.au</span>
            </div>
          </div>
        </div>

        <div className="footer-2">
          <p>
            Copyright © Pure N Bright Carpet Cleaning 2021. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
