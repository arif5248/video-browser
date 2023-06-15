import React, { Component } from "react";
import Topbar from "./components/topbar.component";
import MainSection from "./components/mainSection.component";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <Topbar />
        <MainSection />
      </div>
    );
  }
}

export default App;
