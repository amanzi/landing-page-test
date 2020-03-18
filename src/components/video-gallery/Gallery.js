import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Player } from 'video-react';
import { Carousel } from 'react-responsive-carousel';
import "video-react/dist/video-react.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./styles.css";

const VideoGallery = ({videos}) => {
  return (
    <div style={{ width: "100%", minWidth: "500px" }}>
      <Carousel dynamicHeight showThumbs={false} showIndicators={false}>
        {
          Object.keys(videos).map((key, index) => (
            <div>
              <Player
                poster={videos[key][1]}
                src={key}
              />
              <p className="legend">
                {videos[key][0]}
              </p>
            </div>
          ))
        }
      </Carousel>
    </div>
  )
}

export default VideoGallery;