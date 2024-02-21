import React from 'react'
import Verified from './Verified/Verified';
import ProfilePicture from '../../../assets/images/profile-picture.jpg';
import './YouTube.css';

const YouTube = ({ data }) => {
  // console.log("Youtube Props : ", data.subscribers);
  return (
    <div className="social-item">
      <div className="social-item-box">
        <div className="social-item-title"><i className="fa-brands fa-youtube" style={{color:"red"}}></i>thedivinecaster<Verified /></div>
        <div className="social-item-pic-counter">
          <img src={ProfilePicture} alt="" className="profile-picture"/>
          <div className="channel-data">
            <div className="channel-name">TheDIVINEcasteR</div>
            <div className="channel-id"><a href="http://www.youtube.com/thedivinecaster" target="_blank" rel="noopener noreferrer">@TheDIVINEcasteR</a></div>
            <div className="channel-status">
              <span className="subscriber-count">{data.subscribers} Subscribers</span>
              <span> ‧ </span>
              <span className="video-count">{data.videos} Videos</span>
            </div>
          </div>
        </div>
        <div className="channel-details">
          <div className="channel-details-item"><i className="fas fa-globe"></i><a href="http://www.youtube.com/@TheDIVINEcasteR" target="_blank" rel="noopener noreferrer">youtube.com/@TheDIVINEcasteR</a></div>
          <div className="channel-details-item"><i className="fa fa-users" aria-hidden="true"></i>{data.subscribers} subscribers</div>
          <div className="channel-details-item"><i className="fa fa-video-camera"></i>{data.videos} videos</div>
          <div className="channel-details-item"><i className="fa fa-arrow-up"></i>{data.views} views</div>
          <div className="channel-details-item"><i className="fa fa-info-circle"></i>{data.joined}</div>
          <div className="channel-details-item"><i className="fa fa-globe"></i>{data.location}</div>
        </div>
      </div>
      <div className="subscribe-youtube-button">
        <a href="https://www.youtube.com/thedivinecaster" target="_blank" rel="noopener noreferrer" className="subscribe-youtube-item-button">
            <span className="subscribe-youtube-button-header">Subscribe</span>
        </a>
      </div>
    </div>
  )
}

export default YouTube