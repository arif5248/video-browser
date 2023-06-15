import React, { Component } from "react";
import TopbarLeft from "./topbar.left.component";
import TopbarMiddle from "./topbar.middle.component";
import TopbarRight from "./topbar.right.component";

class Topbar extends Component {
  state = {};
  render() {
    return (
      <div className="ms-4 me-4 mb-3 d-flex justify-content-between">
        <TopbarLeft />
        <TopbarMiddle />
        <TopbarRight />
      </div>
    );
  }
}

export default Topbar;
