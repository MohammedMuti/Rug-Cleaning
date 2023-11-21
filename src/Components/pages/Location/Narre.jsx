import { Link } from "react-router-dom";
import LocationComp from "./LocationComp";

const Narre = () => {
  return (
    <>
      <LocationComp
        title="Carpet Cleaning Narre Warren"
        pagetitle="Carpet Cleaning Narre Warren, Call Your Nearest Carpet Cleaner in Narre Warren"
        desc="Carpet Cleaning Narre Warren - Call your nearest carpet cleaning specialists, for all your cheap carpet cleaning services in Narre Warren & surrounding areas."
        images={[
          {
            src: require("../../../Assets/Images/Location/Narre/1.webp"),
          },
          {
            src: require("../../../Assets/Images/Location/Narre/2.webp"),
          },
        ]}
        content={
          <>
            <p>Looking at getting your carpet or upholstery cleaned??</p>
            <p>
              Pure N Bright Cleaning is your local cleaning company, serving in
              your area and bringing good health and happiness to lots of
              households every day. We offer a comprehensive service to all
              domestic and commercial clients in your area. We invite you to try
              our carpet cleaning services and become one of our many satisfied
              customers who choose to use us Again and Again.
            </p>
            <p>
              We offer all different types of Carpet Steam Cleaning services in
              Narre Warren which includes End of Lease carpet steam cleaning,
              Freshening up carpet steam cleaning, Pet urine treatment, Spills,
              stains and spots removal, Flood damage restoration, and Carpet
              Sanitizing.
            </p>
            <p>
              The carpet in the house is subject to all types of spills and
              stains on a daily basis than any other items in the house and the
              dirt gets accumulated easily in the carpet fibers so it is
              necessary to get them cleaned periodically. Pure N Bright Cleaning
              is here to take the stress out of it for you and can provide cost
              efficient service to help keep your house nice, clean and fresh.
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

export default Narre;
