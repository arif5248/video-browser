import React, { Component } from "react";
import NavbarIcon from "./navbarIcon.component";
import YouTubeLogo from "./youtubeLogo.component";

class TopbarLeft extends Component {
  state = {};
  render() {
    return (
      <div className="d-flex align-items-start">
        <NavbarIcon />
        <YouTubeLogo />
      </div>
    );
  }
}

export default TopbarLeft;
