import React, { Component } from "react";

import "./WeatherDisplay.css";

class WeatherDisplay extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.weather) {
      // let image = "http:" + this.props.weather.current.condition.icon;
      return (
        <div className="weatherHeader">
          <img src={`http:${this.props.weather.current.condition.icon}`} />
          <div className="headerText">
            <h3>
              {this.props.weather.location.name},{" "}
              {this.props.weather.location.region}
            </h3>
            <b>
              {this.props.weather.current.temp_f}&deg;F{" "}
              {this.props.weather.current.condition.text}
            </b>
          </div>
        </div>
      );
    } else {
      return "";
    }
  }
}

export default WeatherDisplay;
