import React, { Component } from "react";

import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import WeatherDisplay from "./Components/WeatherDisplay";


import "./App.css";

// import keys from "./config/keys.js";
const WEATHER_KEY = process.env.REACT_APP_WEATHER_API_KEY;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSearch: "",
      weather: null
    };
    this.handleGetWeatherSubmit = this.handleGetWeatherSubmit.bind(this);
    this.getInitialWeather = this.getInitialWeather.bind(this);
  }

  // Get default weather data upon initial load.
  componentDidMount() {
    this.getInitialWeather();
  }

  // TODO configure this to get geo data
  getInitialWeather() {
    if (navigator.position) {
      navigator.geolocation.getCurrentPosition(position => {
        let pos = {
          lat: position.coords.latitude,
          lon: position.coords.longitude
        };
        this.getWeather(`${pos.lat},${pos.lon}`);
      });
    } else {
      this.getWeather("Seattle");
    }
  }

  getWeather(location) {
    fetch(
      `https://api.apixu.com/v1/forecast.json?key=${WEATHER_KEY}&q=${location}&days=7`
    )
      .then(response => {
        return response.json();
      })
      .then(weather => {
        this.setState({ weather: weather });
      });
  }

  handleGetWeatherSubmit(getWeatherText, weather) {
    this.setState({ currentSearch: getWeatherText, weather: weather });
  }

  render() {
    return (
      <div className="main">
        <Header />
        <SearchBar onGetWeatherSubmit={this.handleGetWeatherSubmit} />
        <WeatherDisplay weather={this.state.weather} />
        
      </div>
    );
  }
}

export default App;
