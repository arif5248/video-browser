import React, { Component } from "react";
import MainVideo from "./mainVideo.component";
import VideoListSection from "./videoListSection.component";

class MainSection extends Component {
  state = {};
  render() {
    return (
      <div className=" container">
        <div className="row">
          <MainVideo />
          <VideoListSection />
        </div>
      </div>
    );
  }
}

export default MainSection;
