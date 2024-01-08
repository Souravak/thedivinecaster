import React from 'react';
import './Trending.css';
import VideoComponent from './VideoComponent/VideoComponent';
import VideoLinkList from './VideoComponent/VideoLinkList';
const Trending = () => {
  return (
    <div className="trending-container">
      <div class="videos-container">
        <div className="video-item">
          <VideoComponent VideoLinkList={VideoLinkList}/>
        </div>
      </div>
    </div>
  )
}

export default Trending