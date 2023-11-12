import { Link } from "react-router-dom";
import LocationComp from "./LocationComp";

const Truganina = () => {
  return (
    <>
      <LocationComp
        title="Carpet Cleaning Truganina"
        content={
          <>
            <p>
              Pure N Bright is a provider of{" "}
              <strong> carpet cleaning services in Truganina</strong>. Truganina
              is a rural-urban prefecture 22km west of Melbourne’s Central
              Business District. The socio-economic conditions and the proximity
              to Melbourne’s CBD have brought many dwellers in the suburb over
              the past few years, leading to a fast growth in population.
              Various estimates show that the Truganina is expected to have a
              population of 39,951 by 2031, which would be an increase of
              1,350.6 percent, or 28,633 persons from what it was in 2006.
            </p>
            <p>
              Among the many problems that this emerging suburb in the west of
              the CBD is facing, is the lack of cleaning services in and around.
              For example, there isn’t a single reliable carpet cleaner in
              Truganina.
            </p>
            <p>
              Pure N Bright provides carpet cleaning services in Truganina. Our
              door-to-door{" "}
              <Link to={"/services/carpet-cleaning-melbourne"}>
                carpet cleaning service
              </Link>{" "}
              will have you covered whenever you’re going through the distress
              of a dirty carpet at your home that smells bad.
            </p>
            <p>
              Moreover, dirty carpets are a source of diseases and allergies.
              People who keep using their dirty carpets are more likely to
              develop allergic reaction. Not to mention, suspended particles,
              that dirty carpets dispatch, are of the biggest causes behind
              respiratory ailments, including bronchitis.
            </p>
            <p>
              Don’t put the health of your family in jeopardy. Call your nearest
              Carpet Cleaning specialists on{" "}
              <Link to={"tel:1300 360274"}>
                <strong> 1300 360274</strong>
              </Link>{" "}
              and get a free quote.
            </p>
          </>
        }
      />
    </>
  );
};

export default Truganina;
