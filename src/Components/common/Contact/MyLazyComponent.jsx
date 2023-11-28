import React, { lazy, Suspense, useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const MyLazyComponent = () => {
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js";
    script.async = true;
    script.onload = () => {
      setRecaptchaLoaded(true);
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <>
      {recaptchaLoaded ? (
        <ReCAPTCHA sitekey="6LePrU4kAAAAAJtpRmNFy9i-u7PNdMnjp-PIeAsP" />
      ) : (
        <div>Loading reCAPTCHA...</div>
      )}
    </>
  );
};

export default MyLazyComponent;
