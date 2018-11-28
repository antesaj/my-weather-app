import React, { Component } from "react";

import ForecastBlock from "./Forecast/ForecastBlock";

import "./WeatherDisplay.css";

class WeatherDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingForecast: false
    }
    
    this.toggleSubmit = this.toggleSubmit.bind(this);
  }
  
  toggleSubmit() {
    this.setState({ showingForecast: !this.state.showingForecast })
  }

  render() {
    if (this.props.weather) {
      // let image = "http:" + this.props.weather.current.condition.icon;
      return (
        <div className="weatherHeader">
          <span className="currentWeather">
            <img src={`http:${this.props.weather.current.condition.icon}`} alt="cond" />
            <div className="headerText">
              <p>
                {this.props.weather.location.name},{" "}
                {this.props.weather.location.region}
              </p>
              <p>
                {this.props.weather.current.temp_f}&deg;F{" "}
                {this.props.weather.current.condition.text}
              </p>
              
            </div>
            <button className="fcstButton" onClick={this.toggleSubmit}>Forecast</button>
             
          </span>
       
          
        <ForecastBlock 
            weather={this.props.weather} 
            showingForecast={this.state.showingForecast}/>
        </div>
        
      );
    } else {
      return "";
    }
  }
}

export default WeatherDisplay;
