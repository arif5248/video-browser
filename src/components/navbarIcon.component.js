import React, { Component } from "react";

class NavbarIcon extends Component {
  state = {};
  render() {
    return (
      <div>
        <img
          src={require("../img/burger-bar.png")}
          alt="Navbar Icon"
          height="50"
          width="65"
          className="mt-2 pe-3"
        />
      </div>
    );
  }
}

export default NavbarIcon;
