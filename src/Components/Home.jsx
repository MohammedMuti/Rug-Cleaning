import { useState } from "react";
import "./Home.css";

const Home = () => {
  const [data, setData] = useState({});

  const fetchWeather = async () => {
    console.log();
  };

  return (
    <>
      <div className="weather">
        <div className="weatherBg">
          <h1>Weather App</h1>
          {/* <input type="text" /> */}
          <select>
            <option>Delhi</option>
            <option>Delhi</option>
            <option>Delhi</option>
            <option>Delhi</option>
            <option>Delhi</option>
            <option>Delhi</option>
            <option>Delhi</option>
          </select>
          <button type="submit" onClick={fetchWeather}>
            Search
          </button>
        </div>
        <div className="result">
          <div className="resultBox">
            <img src={require("../Images/gift.png")} alt="" />
            <span className="city">Delhi</span>
            <span className="temp">18 c</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
