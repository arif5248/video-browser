import React, { Component } from "react";

class YouTubeLogo extends Component {
  state = {};
  render() {
    return (
      <div>
        <img
          src={require("../img/youtube-logo-png-10566.png")}
          alt="YouTube"
          height="30"
          width="120"
          className="navBarLogo mt-3"
        />
      </div>
    );
  }
}

export default YouTubeLogo;
