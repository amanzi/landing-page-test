import React from "react";
import { Player } from 'video-react';
//import "lightgallery.js/dist/css/lightgallery.min.css";
import "video-react/dist/video-react.css";
//import "./styles.css";

const VideoGallery = ({heading, photos}) => {

  return (
    <Player
      playsInline
      poster="https://sachinchoolur.github.io/lightgallery.js/static/img/thumb-v-y-2.jpg"
      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    />
  );
}

export default VideoGallery;