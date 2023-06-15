import React, { Component } from "react";

class VideoItem extends Component {
  state = {};
  render() {
    const { src, title } = this.props;
    return (
      <div className="videoItemList">
        <li>
          <div
            style={{ maxWidth: "540px" }}
            className="card mb-2 video-item-card"
          >
            <div className="row g-0">
              <div className="col-md-5 video-card-img">
                <img src={src} alt="YouTube" height="100" width="160" />
              </div>
              <div className="col-md-7 ps-3">
                <div className="card-body">
                  <h6 className="card-title">{title}</h6>
                  <p className="card-text">
                    Mr&MrsFish <br />
                    68 views •1 Month ago
                  </p>
                </div>
              </div>
            </div>
          </div>
        </li>
      </div>
    );
  }
}

export default VideoItem;
