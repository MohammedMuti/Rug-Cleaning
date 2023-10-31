import "./Services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const ServiceComp = (props) => {
  const [active, setActive] = useState(true);

  const setFalse = () => {
    setActive(false);
  };

  const setTrue = () => {
    setActive(true);
  };

  return (
    <>
      <div
        className={active ? "service" : "service active"}
        onMouseEnter={setFalse}
        onMouseLeave={setTrue}
      >
        <img src={props.img} alt="" />
        <div className="info">
          <div className="service-icon">
            {/* <span>
              <img
                src={require("../../../Assets/Images/Services/rug-icon.png")}
                alt=""
              />
            </span> */}
          </div>
          <h1>{props.title}</h1>
          <div className="more">
            <p>{props.info}</p>
            <button>
              Read more <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceComp;
