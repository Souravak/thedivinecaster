import React from 'react'
import Verified from './Verified/Verified';
import ProfilePicture from '../../../assets/images/profile-picture.jpg';
import './Telegram.css';

const Telegram = () => {
  return (
    <div className="social-item">
      <div className="social-item-box">
        <div className="social-item-title"><i class="fa-brands fa-telegram" style={{color:"royalblue"}}></i>thedivinecaster<Verified /></div>
        <div className="social-item-pic-counter">
          <img src={ProfilePicture} alt="" className="profile-picture"/>
          <div className="channel-data">
            <div className="channel-name">TheDIVINEcasteR</div>
            <div className="channel-id">Public Channel</div>
          </div>
        </div>
        <div className="channel-details">
            <div className="channel-details-item">Details</div>
            <div className="channel-details-item">
                <span className="telegram-inner-item">
                    <span className="telegram-inner-inner-item"><i class="fa fa-user-plus" aria-hidden="true"></i>Subscribers</span>
                    <span>212</span>
                </span>
            </div>
            <div className="channel-details-item">
                <span className="telegram-inner-item">
                    <span className="telegram-inner-inner-item"><i class="fas fa-plus-circle" aria-hidden="true"></i>Created</span>
                    <span>3 Years ago</span>
                </span>
            </div>
            <div className="channel-details-item">
                <span className="telegram-inner-item">
                    <span className="telegram-inner-inner-item"><i class="fas fa-user-shield"></i>Administrators</span>
                    <span>4</span>
                </span>
            </div>
            <div className="channel-details-item">
                <span className="telegram-inner-item">
                    <span className="telegram-inner-inner-item"><i class="far fa-comments"></i>Total Messages</span>
                    <span>462</span>
                </span>
            </div>
            <div className="channel-details-item">
                <span className="telegram-inner-item">
                    <span className="telegram-inner-inner-item"><i class="fa fa-users"></i>Groups</span>
                    <span>2</span>
                </span>
            </div>
        </div>
        <div className="join-channel-button">
            <a href="http://www.t.me/thedivinecastertelegram" target="_blank" rel="noopener noreferrer" className="join-channel-item-button">
                <span className="join-channel-button-header">Join Channel</span>
            </a>
        </div>
      </div>
    </div>
  )
}

export default Telegram