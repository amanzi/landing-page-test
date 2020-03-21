import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ImageGallery from 'react-image-gallery';
import { Player } from 'video-react';
import "react-image-gallery/styles/css/image-gallery.css";
import "video-react/dist/video-react.css";

class VideoGallery extends React.Component {

    constructor(props) {
      super(props);

      this.videos = this.props.videos

      for (var i = 0; i < this.videos.length; i++) {
        this.videos[i].original = this.videos[i].thumbnail;
        this.videos[i].renderItem = this._renderVideo.bind(this);
      }

    }

  _toggleShowVideo(url) {
    this.state.showVideo[url] = !Boolean(this.state.showVideo[url]);
    this.setState({
      showVideo: this.state.showVideo
    });
  }

  _renderVideo(item) {
    return (
      <div>
        <div className='video-wrapper' style={{ width: "500px" }}>
            <a
              className='close-video'
              onClick={this._toggleShowVideo.bind(this, item.embedUrl)}
            >
            </a>
            <Player
              poster={item.thumbnail}
              src={item.embedUrl}
            />
        </div>
      </div>
    );
  }

  render() {
    return <ImageGallery infinite={false} showPlayButton={false} showFullscreenButton={false} items={this.videos} />;
  }
}

export default VideoGallery;