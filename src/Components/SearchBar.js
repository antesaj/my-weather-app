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
      `https://api.apixu.com/v1/current.json?key=${WEATHER_KEY}&q=${searchText}`
    )
      .then(response => {
        return response.json();
      })
      .then(weather => {
        this.setState({ weather: weather });
        this.props.onGetWeatherSubmit(
          this.state.searchBarText,
          this.state.weather
        );
      });
  }

  handleGetWeatherSubmit(e) {
    this.getWeather(this.state.searchBarText);
    e.preventDefault();
    this.props.onGetWeatherSubmit(this.state.searchBarText);
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
