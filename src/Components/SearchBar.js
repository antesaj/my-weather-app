import React, { Component } from "react";

import "./SearchBar.css";

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
      `http://api.apixu.com/v1/current.json?key=166ffdd35a504c49a06190115181411&q=${searchText}`
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
