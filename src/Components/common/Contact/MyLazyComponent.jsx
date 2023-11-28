import React, { lazy, Suspense } from "react";
import { useState } from "react";
import { useEffect } from "react";

const LazyReCAPTCHA = lazy(() => import("react-google-recaptcha"));

const MyLazyComponent = () => {
  const [load, setLoad] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoad(true);
    }, 3000);
  }, []);
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        {load && (
          <LazyReCAPTCHA sitekey="6LePrU4kAAAAAJtpRmNFy9i-u7PNdMnjp-PIeAsP" />
        )}
      </Suspense>
    </>
  );
};

export default MyLazyComponent;
