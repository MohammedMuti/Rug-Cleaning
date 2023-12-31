import "./Frequency.css";

const Frequency = () => {
  return (
    <>
      <div className="frequency">
        <h1>Frequency Of Cleaning</h1>
        <p>
          The cleaning needs to be done at regular intervals in order to enhance
          the life and appearance of the rug/carpet/upholstery.
        </p>
        <div className="frequency-content">
          <div className="frequency-box">
            <img
              src={require("../../../Assets/Images/Frequency/frequency1.png")}
              alt=""
            />
            <h2>6 TO 8 MONTHS</h2>
          </div>
          <div className="frequency-box">
            <img
              src={require("../../../Assets/Images/Frequency/frequency2.png")}
              alt=""
            />
            <h2>8 TO 10 MONTHS</h2>
          </div>
          <div className="frequency-box">
            <img
              src={require("../../../Assets/Images/Frequency/frequency3.png")}
              alt=""
            />
            <h2>12 MONTHS</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Frequency;
