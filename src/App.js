import React, { Component } from "react";

import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <SearchBar />
      </div>
    );
  }
}

export default App;
