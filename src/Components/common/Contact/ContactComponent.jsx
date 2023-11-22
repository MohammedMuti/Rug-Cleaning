import { useState } from "react";
import "./ContactComponent.css";
import "../../pages/Home/Home.css";
import schema from "./validate";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ContactComp = () => {
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState();
  const [messageError, setMessageError] = useState("");
  const [errorMessage, setErrorMessage] = useState(true);
  const [verfied, setVerfied] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(false);
  const navigate = useNavigate();

  const [mailerState, setMailerState] = useState({
    firstName: "",
    lastName: "",
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
      navigate("/thank-you");
      // alert("Message Sent Successfully!!");
      setMailerState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    }

    if (validation === true) {
      const responsetoself = await axios(
        "https://rug-cleaning-service.onrender.com/sendToUser",
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
        "https://rug-cleaning-service.onrender.com/sendToMuti",
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
      const responseToAbuzar = await axios(
        "https://rug-cleaning-service.onrender.com/sendToAbuzar",
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
      const responseToClient = await axios(
        "https://rug-cleaning-service.onrender.com/sendToClient",
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
        firstName: mailerState.firstName,
        lastName: mailerState.lastName,
        email: mailerState.email,
        number: mailerState.phone,
        message: mailerState.message,
      },
      { abortEarly: false }
    );
    if (!result.error) {
      setFirstNameError("");
      setLastNameError("");
      setPhoneError("");
      setMessageError("");
      setEmailError("");
      setErrorMessage(false);
      return true;
    }
    for (let i in result.error.details) {
      if (result.error.details[i].context.label === "fisrtName") {
        setFirstNameError(result.error.details[i].message);
        setErrorMessage(true);
        break;
      } else setFirstNameError("");
      setErrorMessage(false);
    }
    for (let i in result.error.details) {
      if (result.error.details[i].context.label === "lastName") {
        setLastNameError(result.error.details[i].message);
        setErrorMessage(true);
        break;
      } else setLastNameError("");
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
      setFirstNameError("");
      setLastNameError("");
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
        <div className="contact content">
          <div className="contact img">
            <img
              src={require("../../../Assets/Images/Icons/contact-avatar.jpeg")}
              alt=""
            />
          </div>
          <div className="contact info">
            <section className="contact1" id="contact">
              <h2>We're Here To Help...</h2>
              <h1 className="heading"> Contact Us </h1>
              <form onSubmit={submitEmail} action="">
                <div className="name">
                  <div className="block">
                    <input
                      type="text"
                      placeholder="First Name*"
                      name="firstName"
                      className="box"
                      value={mailerState.firstName}
                      onChange={handleStateChange}
                    />
                    {firstNameError ? (
                      <p className="errorMessage">{firstNameError}</p>
                    ) : null}
                  </div>
                  <div className="block">
                    <input
                      type="text"
                      placeholder="Last Name*"
                      name="lastName"
                      className="box"
                      value={mailerState.lastName}
                      onChange={handleStateChange}
                    />
                    {lastNameError ? (
                      <p className="errorMessage">{lastNameError}</p>
                    ) : null}
                  </div>
                </div>

                <div className="name">
                  <div className="block">
                    <input
                      type="number"
                      placeholder="Phone Number*"
                      name="phone"
                      className="box"
                      value={mailerState.phone}
                      onChange={handleStateChange}
                    />
                    {phoneError ? (
                      <p className="errorMessage">{phoneError}</p>
                    ) : null}
                  </div>
                  <div className="block">
                    <input
                      type="email"
                      placeholder="E-mail*"
                      name="email"
                      className="box"
                      value={mailerState.email}
                      onChange={handleStateChange}
                    />
                    {emailError ? (
                      <p className="errorMessage">{emailError}</p>
                    ) : null}
                  </div>
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

                <button type="submit" className="submit" id="submit">
                  <span>Submit</span>
                  <img
                    className="submit"
                    src={require("../../../Assets/Images/Icons/enquire-blue.png")}
                    alt=""
                  />
                </button>
              </form>
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
