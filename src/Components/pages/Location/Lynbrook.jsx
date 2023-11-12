import { Link } from "react-router-dom";
import LocationComp from "./LocationComp";

const Lynbrook = () => {
  return (
    <>
      <LocationComp
        title="Carpet Cleaning Lynbrook"
        images={[
          {
            src: require("../../../Assets/Images/Location/Lynbrook/1.webp"),
          },
          {
            src: require("../../../Assets/Images/Location/Lynbrook/2.webp"),
          },
        ]}
        content={
          <>
            <p>
              A sparsely populated suburb 36km southeast of Melbourne’s Central
              Business District, Lynbrook came into existence back in 1994. The
              suburb has special arrangements to facilitate storm water
              harvesting. Because of the long distance from the city centre,
              household services are not easily available here. If you have a
              carpet or a piece of upholstery to clean in Lynbrook, the number
              of such service providers in the area will bound you. You’ll be
              limited with the options. Carpets cost a fortune; you just can’t
              ask anyone to clean them for you. God forbid if you ever try to
              clean it by yourself. Only carpet cleaning professionals in
              Lynbrook like Pure N Bright can carry out carpet cleaning in an
              operational way. Right gears, pieces of equipment, and training
              are needed for this.
            </p>
            <p>
              Pure N Bright is a provider of carpet cleaning services in
              Melbourne that has on board a team of highly skilled, experienced
              carpet cleaning experts. They know inside out of carpet cleaning.
              They can clean the dirtiest of a carpet and make it as good as a
              new one. They know what needs to be done, what not.
            </p>
            <p>
              If you live in Lynbrook and have to live with a dirty carpet that
              you don’t know how to clean, Pure N Bright will bring a big relief
              for you.
            </p>
            <p>
              Luckily, Lynbrook falls in our service area. We can clean of the
              dirtiest carpet without damaging it. Our team is equipped with the
              latest of gears, equipment, cleaning solution to clean the
              nastiest of the stains. We put emphasis on 3 aspects of carpet
              cleaning: rapidity, effective, and the course of the cleaning
              procedure. For the course of actions, the team follows a standard
              procedure as described in Pure N Bright carpet cleaning handbook.
            </p>
          </>
        }
      />
    </>
  );
};

export default Lynbrook;
