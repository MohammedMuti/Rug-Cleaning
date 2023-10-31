import "./Terms.css";
import Navbar from "../../common/navbar/navbar";
import Banner from "../../common/Banner/Banner";
import Footer from "../../common/Footer/Footer";
import ContactComp from "../../common/Contact/ContactComponent";

const Terms = () => {
  return (
    <>
      <Navbar />
      <Banner sublink="Terms & Conditions" />
      <div className="terms section">
        <div className="terms heading">
          <h2>TERMS & CONDITIONS</h2>
        </div>
        <div className="terms info">
          <p>
            A 24 hours notice will be required for the cancellation of all the
            bookings. The bookings cancelled with less than 24 hours notice will
            incur a charge of $40 as a cancellation fee.
          </p>
          <p>
            The carpet cleaning $5 square meters, which includes pre-inspection,
            pre-spray, agitation, general stain removal, hot water extraction,
            deodorising and post inspection. Heavy duty starts from $8 per
            square meter.
          </p>
          <p>We charge $15 extra as an apartment fee.</p>
          <p>
            For more information please contact us <span>1300 360 274.</span>
          </p>
        </div>
      </div>
      <ContactComp />
      <Footer />
    </>
  );
};

export default Terms;
