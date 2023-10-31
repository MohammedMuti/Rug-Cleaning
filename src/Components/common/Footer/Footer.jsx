import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-1">
          <div className="footer-1-Links">
            <Link to={"/terms-and-conditions"}>Terms & Conditions</Link>
            <span>|</span>
            <Link>Privacy Policy </Link>
            <span>|</span>
            <Link to={"/contact-us"}>Contact Us</Link>
            <span>|</span>
            <Link>Sitemap</Link>
          </div>
          <div className="footer-1-icons">
            <i className="fa-brands fa-facebook-square"></i>

            <i className="fa-brands fa-instagram"></i>

            <i className="fa-brands fa-whatsapp"></i>

            <i className="fa-brands fa-youtube"></i>
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
