import React from 'react'
import Verified from './Verified/Verified';
import ProfilePicture from '../../../assets/images/profile-picture.jpg';
import './YouTube.css';

const YouTube = () => {
  return (
    <div className="social-item">
      <div className="social-item-box">
        <div className="social-item-title"><i class="fa-brands fa-youtube" style={{color:"red"}}></i>thedivinecaster<Verified /></div>
        <div className="social-item-pic-counter">
          <img src={ProfilePicture} alt="" className="profile-picture"/>
          <div className="channel-data">
            <div className="channel-name">TheDIVINEcasteR</div>
            <div className="channel-id"><a href="http://www.youtube.com/thedivinecaster" target="_blank" rel="noopener noreferrer">@TheDIVINEcasteR</a></div>
            <div className="channel-status">
              <span className="subscriber-count">311 Subscribers</span>
              <span> ‧ </span>
              <span className="video-count">20 Videos</span>
            </div>
          </div>
        </div>
        <div className="channel-details">
          {/* <div className="channel-details-item"><i class="fa fa-envelope-o"></i><span className="view-email-address"><a href="mailto:someone@example.com" target="_blank" rel="noopener noreferrer">Send and email</a></span></div> */}
          <div className="channel-details-item"><i class="fas fa-globe"></i><a href="http://www.youtube.com/@TheDIVINEcasteR" target="_blank" rel="noopener noreferrer">www.youtube.com/@TheDIVINEcasteR</a></div>
          <div className="channel-details-item"><i class="fa fa-users" aria-hidden="true"></i>311 subscribers</div>
          <div className="channel-details-item"><i class="fa fa-video-camera"></i>20 videos</div>
          <div className="channel-details-item"><i class="fa fa-arrow-up"></i>50,774 views</div>
          <div className="channel-details-item"><i class="fa fa-info-circle"></i>Joined 1 Feb 2017</div>
          <div className="channel-details-item"><i class="fa fa-globe"></i>India</div>
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