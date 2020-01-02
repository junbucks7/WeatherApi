import React from "react";
import axios from "axios";
import Card from "../../components/Card";
import WeatherCard from "../../components/WeatherCard";
import DB from "../../DB";
import "./index.css";

class Home extends React.Component {
  state = {
    cities: ["Seoul", "Busan", "London", "Tokyo", "Paris", "Sydney", "Toronto"]
  };

  createCityName = () => {
    return this.state.cities.map(data => (
      <div className="city">
        <WeatherCard city={data} />
      </div>
    ));
  };

  render() {
    return <div className="wrapper">{this.createCityName()}</div>;
  }
}

export default Home;
