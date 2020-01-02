import React from "react";
import "./index.css";
import DB from "../../DB";

const Card = ({ image, description, city_name, temp, temp_max, temp_min }) => {
  return (
    <div className="weather-container">
      <img className="background-image" src={image} />
      <div className="weather-wrapper">
        <div>
          <span className="description">{description}</span>
        </div>
        <div className="city-name">{city_name}</div>
        <div className="temp-wrapper">
          <div>
            <span className="temp">평균 기온: {temp}</span>
          </div>
          <div>
            <span className="temp">최고 기온: {temp_max}</span>
          </div>
          <div>
            <span className="temp">최저 기온: {temp_min}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
