import { Link } from "react-router-dom";
import LocationComp from "./LocationComp";

const Cranbourne = () => {
  return (
    <>
      <LocationComp
        title="Carpet Cleaning Cranbourne"
        content={
          <>
            <p>
              Cranbourne is a quiet suburb around 43km from Melbourne’s Central
              Business District. With a population of 18, 000, it is one of the
              most populated suburbs down Melbourne CBD. The suburb is divided
              into 4 wards: Cranbourne East, Cranbourne West, Cranbourne North,
              and Cranbourne South.
            </p>
            <p>
              Pure N Bright is a Carpet Cleaner in Melbourne that provides cheap
              carpet cleaning in Cranbourne. Our Carpet cleaning services are
              available in Cranbourne East, Cranbourne West, Cranbourne North,
              and Cranbourne South.
            </p>
            <p>
              So if you live in Cranbourne and are looking for a professional
              carpet cleaner who serves in your area, then we are proud to
              announce that we offer carpet cleaning in Cranbourne.
            </p>
            <p>
              A dirty carpet at your place will be taken care of with utmost
              sincerity and determination. When you avail our services, one of
              the technicians from our team of carpet cleaning professionals
              will visit your place to examine the state of your carpet. Based
              on the state, the technician will provide you the detailed
              information of the service. Upon your thumbs up, he will get to
              the work.
            </p>
            <p>
              We will clean your carpet using a standard procedure as described
              in Pure N Bright manual of carpet cleaning. Our trained
              professionals, with utmost precaution, will clean every stain,
              piece of dirt in your carpet. Your carpet will come clean. It’ll
              be in the similar condition as it was when you bought it, and the
              cleaning exercise won’t take a toll on your carpet.
            </p>
            <p>
              For carpet cleaning purposes, we use a proprietary carpet shampoos
              (exclusive to Pure N Bright), which is hard on stains and soft on
              the fabric.
            </p>
            <p>
              To bring your carpet in a new-like condition, call this
              carpet-cleaning expert in Cranbourne East, West, North, and South.
            </p>
            <p>
              Call your nearest carpet cleaning specialists on{" "}
              <Link to={"tel:1300 360 274"}>
                <strong> 1300 360 274</strong>
              </Link>{" "}
              to get a free quote.
            </p>
          </>
        }
      />
    </>
  );
};

export default Cranbourne;
