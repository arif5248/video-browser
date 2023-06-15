import React, { Component } from "react";

class VideoAuthorInfo extends Component {
  state = {};
  render() {
    return (
      <div>
        <div>
          <h4>Kaptai Kayaking Club | #Mr&MrsFish | Vlog #01</h4>
        </div>
        <div className="d-flex justify-content-between">
          <div className="author-info d-flex justify-content-between">
            <div className="d-flex justify-content-between align-items-center ">
              <img
                src={require("../img/channels4_profile.jpg")}
                alt="author-img"
                height="40"
                width="40"
                className="author-icon"
              />
              <div className="auhor-box">
                <h5 className="author-name">Mr&MrsFish</h5>
                <p className="subscription-counter">20 Subscribers</p>
              </div>
            </div>
            <button
              type="button"
              class="btn  btn-secondary subscribe-button subscribe-btn"
            >
              <img
                src={require("../img/bell.png")}
                alt="Bell"
                height="25"
                width="25"
                className="sub-icon"
              />
              Subscribe
            </button>
          </div>
          <div className="like-share-btn d-flex justify-content-between">
            <div className="like-dislike">
              <button
                type="button"
                class="btn  btn-secondary subscribe-button like"
              >
                <img
                  src={require("../img/like.png")}
                  alt="like"
                  height="25"
                  width="25"
                />
                Like
              </button>
              <button
                type="button"
                class="btn  btn-secondary subscribe-button dislike"
              >
                <img
                  src={require("../img/dislike.png")}
                  alt="dislike"
                  height="25"
                  width="25"
                />
              </button>
            </div>
            <button
              type="button"
              class="btn  btn-secondary subscribe-button share"
            >
              <img
                src={require("../img/share.png")}
                alt="share"
                height="25"
                width="25"
              />
              Share
            </button>
            <button
              type="button"
              class="btn  btn-secondary subscribe-button more"
            >
              <img
                src={require("../img/more.png")}
                alt="more"
                height="25"
                width="25"
              />
            </button>
          </div>
        </div>
        <div className="description-box">
          <p>
            <h6>74 views May 4, 2023 KAPTAI KAYAK CLUB</h6>
            Like Share Comment and Subscribe
            <br />
            Facebook page link:
            <br />
            --------------------------------
            <br />
            https://www.facebook.com/nephroditAy17/
          </p>
        </div>
      </div>
    );
  }
}

export default VideoAuthorInfo;
