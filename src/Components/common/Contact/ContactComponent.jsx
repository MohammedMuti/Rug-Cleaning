import { useState } from "react";
import "./Contact.css";
import "../../pages/Home/Home.css";
import schema from "./validate";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";

const ContactComp = () => {
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
      <div className="contact section">
        <div className="contact heading">
          <h2>We're Here To Help...</h2>
        </div>
        <div className="contact content">
          <div className="contact img">
            <img
              src={require("../../../Assets/Images/Contact/contact.jpeg")}
              alt=""
            />
          </div>
          <div className="contact info">
            <section className="contact1" id="contact">
              <h1 className="heading"> Contact Us </h1>
              <div className="row">
                <form onSubmit={submitEmail} action="">
                  <input
                    type="text"
                    placeholder="Name"
                    name="fullName"
                    className="box"
                    value={mailerState.fullName}
                    onChange={handleStateChange}
                  />
                  {fullNameError ? (
                    <p className="errorMessage">{fullNameError}</p>
                  ) : null}

                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    className="box"
                    value={mailerState.email}
                    onChange={handleStateChange}
                  />
                  {emailError ? (
                    <p className="errorMessage">{emailError}</p>
                  ) : null}

                  <input
                    type="number"
                    placeholder="Phone"
                    name="phone"
                    className="box"
                    value={mailerState.phone}
                    onChange={handleStateChange}
                  />
                  {phoneError ? (
                    <p className="errorMessage">{phoneError}</p>
                  ) : null}

                  <textarea
                    name="message"
                    placeholder="Message"
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

                  <input type="submit" value="send message" className="btn" />
                </form>
              </div>
            </section>
          </div>
          {/* <div className="contact info"></div>
            <div className="contact img">

            </div> */}
        </div>
      </div>
    </>
  );
};

export default ContactComp;
