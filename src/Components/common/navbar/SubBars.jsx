import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const SubBars = (props) => {
  const [dropDown, setDropDown] = useState(false);
  const [isActive, setIsActive] = useState();

  const handleDropDown = () => {
    setDropDown(!dropDown);
    console.log(dropDown);
  };

  const setDropDownTrue = () => {
    setDropDown(true);
  };

  const setDropDownFalse = () => {
    setDropDown(false);
  };

  const path = useLocation().pathname;

  return (
    <>
      <Link
        to={props.titlePath}
        className={path === props.titlePath ? "link active" : "link"}
        onMouseLeave={setDropDownFalse}
        onMouseEnter={setDropDownTrue}
        onClick={handleDropDown}
      >
        <li className="sublink">
          {props.title}
          <ul className={dropDown ? "nav-list active" : "nav-list"}>
            {props.opt?.map((opt) => {
              return (
                <Link
                  key={opt.name}
                  to={opt.link}
                  // onMouseLeave={() => setIsActive(opt.name)}
                  // onMouseEnter={() => setIsActive(opt.name)}
                >
                  <li>
                    <FontAwesomeIcon className={"icon"} icon={faArrowRight} />
                    {opt.name}
                  </li>
                </Link>
              );
            })}
          </ul>
        </li>
      </Link>
    </>
  );
};

export default SubBars;
