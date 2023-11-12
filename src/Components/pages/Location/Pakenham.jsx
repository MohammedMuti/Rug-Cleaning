import { Link } from "react-router-dom";
import LocationComp from "./LocationComp";

const Pakenham = () => {
  return (
    <>
      <LocationComp
        title="Carpet Cleaning Pakenham"
        images={[
          {
            src: require("../../../Assets/Images/Location/Pakenham/1.webp"),
          },
          {
            src: require("../../../Assets/Images/Location/Pakenham/2.webp"),
          },
        ]}
        content={
          <>
            <p>
              We are your local cleaning company, serving in your area and
              bringing good health and happiness to lots of households every
              day. We offer a comprehensive service to all domestic and
              commercial clients in your area. We invite you to try our{" "}
              <Link> carpet cleaning services</Link> and become one of our many
              satisfied customers who choose to use us Again and Again.
            </p>
            <p>
              Pure N Bright Carpet Cleaning in Pakenham, a cheap carpet cleaning
              in Pakenham, uses the latest and best Eco friendly cleaning
              solutions for the health of our technicians and clients.
            </p>
            <p>
              We offer all diffrent types of Carpet steam cleaning services in
              Pakenham which includes End of Lease carpet steam cleaning,
              Freshening up carpet steam cleaning, Pet urine treatment, Spills,
              stains and spots removal, Flood damage restoration, and Carpet
              Sanitizing.
            </p>
            <p>
              Our highly discounted carpet cleaning includes carpet steam
              cleaning, stain removal and free deodorizing. We strive to provide
              a highly professional service beyond our competitors. Our systems
              are in line with highly advanced innovative technologies in carpet
              cleaning Pakenham.
            </p>
          </>
        }
      />
    </>
  );
};

export default Pakenham;
