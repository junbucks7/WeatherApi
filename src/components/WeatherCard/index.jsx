import React from "react";
import axios from "axios";
import Card from "../../components/Card";
import DB from "../../DB";

const dictionary = {
  "clear sky": "맑음",
  haze: "흐림",
  "overcast clouds": "구름",
  "broken clouds": "broken clouds",
  "light rain": "비오는",
  "few clouds": "약간 구름",
  fog: "안개",
  mist: "안개",
  "scattered clouds": "구름"
};

class WeatherCard extends React.Component {
  state = {
    weather: {
      description: "",
      city_name: "",
      temp: "",
      temp_min: "",
      temp_max: ""
    }
  };

  componentDidMount() {
    const http = axios.create({
      baseURL: "http://api.openweathermap.org/data/2.5"
    });

    http
      .get(
        `/weather?q=${encodeURIComponent(
          this.props.city
        )}&appid=${encodeURIComponent("8d1ec898f40cd4ccdfd68aec10be083b")}`
      )
      .then(result => {
        console.log(result);
        this.setState({
          weather: {
            description: dictionary[result.data.weather[0].description],
            city_name: result.data.name,
            temp: parseInt(result.data.main.temp, 10) - 273,
            temp_min: parseInt(result.data.main.temp_min, 10) - 273,
            temp_max: parseInt(result.data.main.temp_max, 10) - 273
          }
        });
      });
  }

  createWeahterStateBackgroundImage = () => {
    if (this.state.weather.description === dictionary["overcast clouds"]) {
      return DB[0].image;
    } else if (
      this.state.weather.description === dictionary["scattered clouds"]
    ) {
      return DB[0].image;
    } else if (this.state.weather.description === dictionary["broken clouds"]) {
      return DB[3].image;
    } else if (this.state.weather.description === dictionary["clear sky"]) {
      return DB[1].image;
    } else if (this.state.weather.description === dictionary["haze"]) {
      return DB[2].image;
    } else if (this.state.weather.description === dictionary["few clouds"]) {
      return DB[0].image;
    } else if (this.state.weather.description === dictionary["fog"]) {
      return DB[5].image;
    } else {
      return DB[4].image;
    }
  };

  render() {
    return (
      <div>
        <Card
          image={this.createWeahterStateBackgroundImage()}
          description={this.state.weather.description}
          city_name={this.state.weather.city_name}
          temp={this.state.weather.temp}
          temp_max={this.state.weather.temp_max}
          temp_min={this.state.weather.temp_min}
        />
      </div>
    );
  }
}

export default WeatherCard;
