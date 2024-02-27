import React from 'react'
import Verified from '../Verified/Verified';
import ProfilePicture from '../../../../assets/images/profile-picture.jpg';
import './Telegram.css';
import '../SocialMedia.css';

const Telegram = ({data}) => {
  return (
    <div className="social-item">
      <div className="social-item-box">
        <div className="social-item-title"><i className="fa-brands fa-telegram" style={{color:"royalblue"}}></i>thedivinecaster<Verified /></div>
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
                    <span className="telegram-inner-inner-item"><i className="fa fa-user-plus" aria-hidden="true"></i>Subscribers</span>
                    <span>{data.subscribers}</span>
                </span>
            </div>
            <div className="channel-details-item">
                <span className="telegram-inner-item">
                    <span className="telegram-inner-inner-item"><i className="fas fa-plus-circle" aria-hidden="true"></i>Created</span>
                    <span>3 Years ago</span>
                </span>
            </div>
            <div className="channel-details-item">
                <span className="telegram-inner-item">
                    <span className="telegram-inner-inner-item"><i className="fas fa-user-shield"></i>Administrators</span>
                    <span>{data.admin}</span>
                </span>
            </div>
            <div className="channel-details-item">
                <span className="telegram-inner-item">
                    <span className="telegram-inner-inner-item"><i className="far fa-comments"></i>Total Messages</span>
                    <span>{data.messages}</span>
                </span>
            </div>
            <div className="channel-details-item">
                <span className="telegram-inner-item">
                    <span className="telegram-inner-inner-item"><i className="fa fa-users"></i>Groups</span>
                    <span>3</span>
                </span>
            </div>
        </div>
        <div className="join-social-media-button">
            <a href="http://www.t.me/thedivinecastertelegram" target="_blank" rel="noopener noreferrer" className="join-channel-item-button join-social-media-item-button">
                <span className="join-channel-button-header">Join Channel</span>
            </a>
        </div>
      </div>
    </div>
  )
}

export default Telegram