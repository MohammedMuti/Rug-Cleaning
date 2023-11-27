import React, { lazy, Suspense } from "react";

const LazyReCAPTCHA = lazy(() => import("react-google-recaptcha"));

const MyLazyComponent = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyReCAPTCHA sitekey="6LePrU4kAAAAAJtpRmNFy9i-u7PNdMnjp-PIeAsP" />
      </Suspense>
    </>
  );
};

export default MyLazyComponent;
