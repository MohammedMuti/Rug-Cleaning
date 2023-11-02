import Banner from "../../common/Banner/Banner";
import ContactComp from "../../common/Contact/ContactComponent";
import Footer from "../../common/Footer/Footer";
import Navbar from "../../common/navbar/navbar";
import NavMain from "../../common/navbar/NavMain";
import ReCAPTCHA from "react-google-recaptcha";
import "./Contact.css";
import { useState } from "react";
import axios from "axios";
import schema from "../../common/Contact/validate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMailReply,
  faLocationDot,
  faPhone,
  faMailBulk,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [fullNameError, setFullNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState();
  const [messageError, setMessageError] = useState("");
  const [errorMessage, setErrorMessage] = useState(true);
  const [verfied, setVerfied] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(false);

  const [mailerState, setMailerState] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const submitEmail = async (e) => {
    e.preventDefault();
    // console.log({ mailerState });
    const validation = await validate(mailerState);
    console.log(validation);
    // console.log(mailerState);

    if (validation === true) {
      console.log("You're good!");
      alert("Message Sent Successfully!!");
      setMailerState({
        fullName: "",
        email: "",
        phone: "",
        message: "",
      });
    }

    if (validation === true) {
      const responsetoself = await axios(
        "https://purenbright-backend.onrender.com/sendToUser",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          data: mailerState,
        }
      )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      const responseToMuti = await axios(
        "https://purenbright-backend.onrender.com/sendToMuti",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          data: mailerState,
        }
      )
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            console.log("Message Sent");
          } else if (res.status === 402) {
            console.log("Message failed to send");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  function handleStateChange(e) {
    setMailerState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  const validate = (mailerState) => {
    const result = schema.validate(
      {
        fullName: mailerState.fullName,
        email: mailerState.email,
        number: mailerState.phone,
        message: mailerState.message,
      },
      { abortEarly: false }
    );
    if (!result.error) {
      setFullNameError("");
      setPhoneError("");
      setMessageError("");
      setEmailError("");
      setErrorMessage(false);
      return true;
    }
    for (let i in result.error.details) {
      if (result.error.details[i].context.label === "Name") {
        setFullNameError(result.error.details[i].message);
        setErrorMessage(true);
        break;
      } else setFullNameError("");
      setErrorMessage(false);
    }
    for (let i in result.error.details) {
      if (result.error.details[i].context.label === "Email") {
        setEmailError(result.error.details[i].message);
        setErrorMessage(true);
        break;
      } else setEmailError("");
      setErrorMessage(false);
    }
    for (let i in result.error.details) {
      if (result.error.details[i].context.label === "Number") {
        setPhoneError(result.error.details[i].message);
        setErrorMessage(true);
        break;
      } else setPhoneError("");
      setErrorMessage(false);
    }
    for (let i in result.error.details) {
      if (result.error) {
        if (result.error.details[i].context.label === "Message") {
          setMessageError(result.error.details[i].message);
          setErrorMessage(true);
          break;
        }
      } else setMessageError("");
      setErrorMessage(false);
    }
    if (!result.error) {
      setFullNameError("");
      setPhoneError("");
      setMessageError("");
      setEmailError("");
      setErrorMessage(false);
      return true;
    } else {
      return false;
    }
  };

  function onChange(value) {
    if (value) setVerfied(true);
    // console.log("Captcha value:", value);
  }

  return (
    <>
      <Navbar />
      <NavMain />
      <Banner
        img={require("../../../Assets/Images/Banner/contact-banner.jpg")}
        sublink={"Contact"}
        slogan="Connect with us right now"
      />
      <div className="contactMain">
        <div className="form-wrapper">
          <h2>
            <span>SEND US </span>A MESSAGE
          </h2>
          <form onSubmit={submitEmail} action="">
            <div className="name">
              <input
                type="text"
                placeholder="First Name*"
                name="fullName"
                className="box"
                value={mailerState.fullName}
                onChange={handleStateChange}
              />
              {fullNameError ? (
                <p className="errorMessage">{fullNameError}</p>
              ) : null}
              <input
                type="text"
                placeholder="Last Name*"
                name="fullName"
                className="box"
                value={mailerState.fullName}
                onChange={handleStateChange}
              />
              {fullNameError ? (
                <p className="errorMessage">{fullNameError}</p>
              ) : null}
            </div>

            <div className="name">
              <input
                type="number"
                placeholder="Phone Number*"
                name="phone"
                className="box"
                value={mailerState.phone}
                onChange={handleStateChange}
              />
              {phoneError ? <p className="errorMessage">{phoneError}</p> : null}

              <input
                type="email"
                placeholder="E-mail*"
                name="email"
                className="box"
                value={mailerState.email}
                onChange={handleStateChange}
              />
              {emailError ? <p className="errorMessage">{emailError}</p> : null}
            </div>

            <textarea
              name="message"
              placeholder="Message..."
              className="box"
              id=""
              cols="30"
              rows="10"
              value={mailerState.message}
              onChange={handleStateChange}
            />
            {messageError ? (
              <p className="errorMessage">{messageError}</p>
            ) : null}

            <div
              style={{ transformOrigin: "0 0", width: "100%" }}
              className="captcha"
            >
              <ReCAPTCHA
                sitekey="6LePrU4kAAAAAJtpRmNFy9i-u7PNdMnjp-PIeAsP"
                onChange={onChange}
              />
            </div>

            <button type="submit" className="submit">
              <span>Submit</span>
              <img
                src={require("../../../Assets/Images/Icons/enquire-blue.png")}
                alt=""
              />
            </button>
          </form>
        </div>

        <div className="info-wrapper">
          <h2>CONTACT</h2>
          <p className="info-p">
            If you have questions, or would like more information, please leave
            your name and contact information.
          </p>
          <div className="info-box">
            <div className="icon">
              <FontAwesomeIcon icon={faLocationDot} />
            </div>
            <div className="content">
              <span>ADDRESS</span>
              <p style={{ color: "gray" }}>
                6 Achieve Way, Pakenham Vic 3810,Australia
              </p>
            </div>
          </div>
          <div className="info-box">
            <div className="icon">
              <FontAwesomeIcon icon={faPhone} />
            </div>
            <div className="content">
              <span>PHONE</span>
              <p>1300 360 274</p>
            </div>
          </div>
          <div className="info-box">
            <div className="icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div className="content">
              <span>E-MAIL</span>
              <p>info@purenbrightcleaning.com.au</p>
            </div>
          </div>
        </div>
      </div>

      <div className="melborne">
        <h1>Serving All Melbourne Suburbs</h1>
        <img
          src={require("../../../Assets/Images/Banner/Melbourne.webp")}
          alt=""
        />
      </div>
      <Footer />
    </>
  );
};

export default Contact;
