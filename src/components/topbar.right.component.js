import React, { Component } from "react";

class TopbarRight extends Component {
  state = {};
  render() {
    return (
      <div className="mt-4 d-flex justify-content-between topBarRight">
        <img
          src={require("../img/video.png")}
          alt="Video Create"
          height="25"
          width="25"
        />

        <img
          src={require("../img/bell.png")}
          alt="Bell"
          height="25"
          width="25"
        />

        <img
          src={require("../img/user.png")}
          alt="profile"
          height="25"
          width="25"
        />
      </div>
    );
  }
}

export default TopbarRight;
