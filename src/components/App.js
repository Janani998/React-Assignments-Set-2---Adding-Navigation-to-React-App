import React, { Component, useState } from "react";
import "../styles/App.css";
import { Home } from "./home";
import { About } from "./about";
import { LocationDisplay } from "./LocationDisplay";

class App extends Component {
  render() {
    return (
      <div id="main">
        {/* <LocationDisplay /> */}
        <Home />
        <About />
        {/* Do not remove the main div */}
      </div>
    );
  }
}

export default App;
