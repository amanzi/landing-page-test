// src/my-component.js
/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react"

export default ({ videoSrcURL, videoWidth, ...props }) => (
  <div>
    <video
      id="my-video"
      class="video-js"
      controls
      preload="auto"
      style={{width: videoWidth}}
    >
      <source src={videoSrcURL} type="video/mp4" />
      <p class="vjs-no-js">
        To view this video please enable JavaScript, and consider upgrading to a
        web browser that supports HTML5 video.
      </p>
    </video>
  </div>
)