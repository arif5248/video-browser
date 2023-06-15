import React, { Component } from "react";
import VideoItem from "./videoItem.component";

class VideoList extends Component {
  state = {};
  render() {
    return (
      <div>
        <VideoItem
          src={
            "https://i.ytimg.com/vi/3CE4GCgviTw/hqdefault.jpg?sqp=-oaymwFACKgBEF5IWvKriqkDMwgBFQAAiEIYAdgBAeIBCggcEAIYBiABOAHwAQH4Ac4FgAKACooCDAgAEAEYZSBQKDwwDw==&rs=AOn4CLAZY7vGQ8NhJjBSNjTwzXMmSCOhYQ"
          }
          title={"Mr. & Mrs. Fish virtual date..."}
        />

        <VideoItem
          src={
            "https://i.ytimg.com/vi/bBSKzvlOnkE/hq2.jpg?sqp=-oaymwFACKgBEF5IWvKriqkDMwgBFQAAiEIYANgBAeIBCggcEAIYBiABOAHwAQH4AbYIgAKAD4oCDAgAEAEYZSBCKEIwDw==&rs=AOn4CLATh6w1olcNeI5_T9THYFn7lKC9Xw"
          }
          title={"#Mr&MrsFish....."}
        />

        <VideoItem
          src={
            "https://i.ytimg.com/vi/qpI1ez6u9Yc/hq2.jpg?sqp=-oaymwFACKgBEF5IWvKriqkDMwgBFQAAiEIYANgBAeIBCggcEAIYBiABOAHwAQH4AZ4IgAKAD4oCDAgAEAEYciBPKEQwDw==&rs=AOn4CLCT8oUqIF8atFFUPEkSwpjLL2NUHg"
          }
          title={"Reel April 28,2023"}
        />

        <VideoItem
          src={
            "https://i.ytimg.com/vi/IM9do9WnLM8/hq2.jpg?sqp=-oaymwFACKgBEF5IWvKriqkDMwgBFQAAiEIYANgBAeIBCggcEAIYBiABOAHwAQH4Ac4FgAKACooCDAgAEAEYTCBQKGUwDw==&rs=AOn4CLDg5w11sWPbx1dhLlwLz40rum18vg"
          }
          title={"সমুদ্র দেখি..🥰"}
        />

        <VideoItem
          src={
            "https://i.ytimg.com/vi/HVGNgp9fEkQ/hq2.jpg?sqp=-oaymwFACKgBEF5IWvKriqkDMwgBFQAAiEIYANgBAeIBCggcEAIYBiABOAHwAQH4Ac4FgAKACooCDAgAEAEYfyAYKCYwDw==&rs=AOn4CLCt-SSCgvkRh1_3od1hl0_S83LAuA"
          }
          title={"Now & Forever #Mr&MrsFish #foryoupage #ny #ctg"}
        />

        <VideoItem
          src={
            "https://i.ytimg.com/vi/esC89TSgONo/hq2.jpg?sqp=-oaymwFACKgBEF5IWvKriqkDMwgBFQAAiEIYANgBAeIBCggcEAIYBiABOAHwAQH4Ac4FgAKACooCDAgAEAEYciBOKEUwDw==&rs=AOn4CLAJfvh1iWXS82ZGWP0Qc4sgGooncg"
          }
          title={"khoshtar sathe bajar krte jay!!"}
        />
      </div>
    );
  }
}

export default VideoList;
