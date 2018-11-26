import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchBarText: "Search a location"
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick(e) {
    if (this.state.searchBarText == "Search a location") {
      this.setState({ searchBarText: "" });
    }
  }

  handleChange(e) {
    this.setState({ searchBarText: e.target.value });
  }
  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            value={this.state.searchBarText}
            onClick={this.handleClick}
            onChange={this.handleChange}
          />
          <input type="submit" value="OK" />
          <p>{this.state.searchBarText}</p>
        </form>
      </div>
    );
  }
}

export default SearchBar;
