import { Link } from "react-router-dom";
import LocationComp from "./LocationComp";

const Dandenong = () => {
  return (
    <>
      <LocationComp
        title="Carpet Cleaning Dandenong"
        images={[
          {
            src: require("../../../Assets/Images/Location/Dandenong/1.webp"),
          },
          {
            src: require("../../../Assets/Images/Location/Dandenong/2.webp"),
          },
        ]}
        content={
          <>
            <p>
              Situated on the Dandenong Creek at the foothill of the Dandenong
              Ranges, Dandenong is a beautiful suburb to live in, southeast of
              Melbourne. Dandenong is divided into two districts: Dandenong
              North and Dandenong South. Dandenong is a well-populated Melbourne
              suburb. With almost 30,000 dwellers, it is one of the most densely
              populated suburbs 30 km down Melbourne’s Central Business
              District.
            </p>
            <p>
              Cleaning a carpet is a tough job to undertake that even experts
              take extra precautions to make sure the carpet is not damaged in
              the course. Naively, a few people try to clean their carpets on
              their own and end up damaging it.
            </p>
            <p>
              Cleaning a carpet is one thing, it’s the cleaning of the carpet
              without damaging it that matters. No matter how clean it is,
              nobody wants to keep a damaged carpet on his or her floor. A
              carpet is supposed to enhance the decorum of a room, not to ruin
              it. That’s the reason why we recommend everyone to get his or her
              carpets cleaned by an expert.
            </p>
            <p>
              Pure N Bright is one such carpet-cleaning expert in Dandenong. We
              understand the close proximity of the suburb to the creek make the
              carpets over there more prone to dust, dirt and particularly sand.
              Unless you’re one of those who tries to clean their carpets by
              themselves, you must be seeking a carpet cleaning expert who
              provides services in Dandenong.
            </p>
            <p>
              With Pure N Bright expert carpet cleaning, we can put an end to
              those worries of yours. After you initiate a call for service with
              us, Pure N Bright will get back to you with finer details along
              with a free quote. Upon confirmation, a carpet-cleaning expert
              from Pure N Bright will visit your place to inspect the carpet and
              do the expert cleaning for you using a standard procedure as
              described in Pure N Bright manual of carpet cleaning.
            </p>
            <p>
              To bring your carpet in a new-like condition, Call your nearest
              carpet cleaning expert in Dandenong South and Dandenong North on{" "}
              <Link to={"1300 360 274"}>
                <strong>1300 360 274.</strong>
              </Link>
            </p>
          </>
        }
      />
    </>
  );
};

export default Dandenong;
