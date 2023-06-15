import React, { Component } from "react";
import VideoAuthorInfo from "./videoAuthorInfo.component";

class MainVideo extends Component {
  state = {
    videoId: "rMkZx-aQHZw&t=301s",
  };
  render() {
    return (
      <div className="col-md-8">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe
            width="727"
            height="409"
            src="https://www.youtube.com/embed/rMkZx-aQHZw"
            title="Kaptai Kayaking Club | #Mr&amp;MrsFish | Vlog #01"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <VideoAuthorInfo />
      </div>
    );
  }
}

export default MainVideo;
