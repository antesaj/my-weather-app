import React, { Component } from "react";

import "./SearchBar.css";

// import keys from "../config/keys.js";
const WEATHER_KEY = process.env.REACT_APP_WEATHER_API_KEY;

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchBarText: "Search a location",
      weather: null
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleGetWeatherSubmit = this.handleGetWeatherSubmit.bind(this);
    this.getWeather = this.getWeather.bind(this);
  }

  getWeather(searchText) {
    fetch(
      `https://api.apixu.com/v1/forecast.json?key=${WEATHER_KEY}&q=${searchText}&days=7`
    )
      .then(response => {
        return response.json();
      })
      .then(weather => {
        if (weather.current) {
          this.setState({ weather: weather });
          this.props.onGetWeatherSubmit(
            this.state.searchBarText,
            this.state.weather
          );
        } else {
          // Handle this case, must be an error.
        }
      });
      
      
  }

  handleGetWeatherSubmit(e) {
    if (this.validateInput(this.state.searchBarText)) {
      this.getWeather(this.state.searchBarText);
      this.props.onGetWeatherSubmit(this.state.searchBarText);
    }
    this.validateInput(this.state.searchBarText);
    // this.getWeather(this.state.searchBarText);
    e.preventDefault();
    // this.props.onGetWeatherSubmit(this.state.searchBarText);
  }

  validateInput(input) {
    return (
      /^(-?\d+(\.\d+)?),\s*(-?\d+(\.\d+)?)$/.test(input) ||
      (input.length <= 30 && /^[A-Za-z ]+$/.test(input))
    );
  }

  handleClick(e) {
    if (this.state.searchBarText === "Search a location") {
      this.setState({ searchBarText: "" });
    }
  }

  handleChange(e) {
    this.setState({ searchBarText: e.target.value });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleGetWeatherSubmit}>
          <input
            maxLength="30"
            className="searchBar"
            type="text"
            value={this.state.searchBarText}
            onClick={this.handleClick}
            onChange={this.handleChange}
          />
          <input className="okButton" type="submit" value="&#10004;" />
        </form>
      </div>
    );
  }
}

export default SearchBar;
