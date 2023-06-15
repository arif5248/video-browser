import React, { Component } from "react";
import SubNavBar from "./subNavbar.component";
import VideoList from "./videoList.component";

class videoListSection extends Component {
  state = {};
  render() {
    return (
      <div className="col-md-4 video-list-section">
        <SubNavBar />
        <VideoList />
      </div>
    );
  }
}

export default videoListSection;
