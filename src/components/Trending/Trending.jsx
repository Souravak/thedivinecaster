import React from 'react';
import './Trending.css';
import VideoComponent from './VideoComponent/VideoComponent';
import VideoLinkList from './VideoComponent/VideoLinkList';
import Footer from '../Footer/Footer';

const Trending = () => {
  return (
    <div className="trending-container">
      <div className="videos-container">
        <div className="video-item">
          <VideoComponent VideoLinkList={VideoLinkList}/>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Trending