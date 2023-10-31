import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleDown,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const FAQComp = (props) => {
  const [active, setActive] = useState(true);

  const handleActive = () => {
    setActive(!active);
  };

  return (
    <>
      <div className="faqcomp">
        <div className="questions">
          <div
            className={active ? "question" : "question active"}
            onClick={handleActive}
            //   style={!active ? { borderBottom: "1px solid purple" } : null}
          >
            <h4>{props.question}</h4>
            {active ? (
              <FontAwesomeIcon
                onClick={handleActive}
                icon={faChevronCircleRight}
              />
            ) : (
              <FontAwesomeIcon
                onClick={handleActive}
                icon={faChevronCircleDown}
              />
            )}
          </div>
          <div className={active ? "answer" : "answer active"}>
            <h4>{props.answer}</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQComp;
