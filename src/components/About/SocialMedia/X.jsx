import React from 'react';
import Verified from './Verified/Verified';
import ProfilePicture from '../../../assets/images/profile-picture.jpg';
import './X.css';

const X = () => {
    return (
        <div className="social-item">
            <div className="social-item-box">
                <div className="social-item-title"><i className="fa-brands fa-x-twitter" ></i>thedivinecaster<Verified /></div>
                <div className="social-item-pic-counter">
                    <img src={ProfilePicture} alt="" className="profile-picture"/>
                    <div className="channel-data">
                        <div className="channel-name">TheDIVINEcasteR</div>
                        <div className="channel-id"><a href="https://twitter.com/thedivinecaster" target="_blank" rel="noopener noreferrer">@TheDIVINEcasteR</a></div>
                        <div className="channel-status">
                            <span className="subscriber-count">48 tweets</span>
                            <span> ‧ </span>
                            <span className="video-count">448 followers</span>
                        </div>
                    </div>
                </div>
                <div className="channel-details">
                    <div className="channel-details-item"><i className="fa fa-link"></i><span className="view-email-address"><a href="mailto:someone@example.com" target="_blank" rel="noopener noreferrer">Connect Now</a></span></div>
                    <div className="channel-details-item"><i className="fa fa-users" aria-hidden="true"></i>448 followers</div>
                    <div className="channel-details-item"><i className="fa fa-twitter"></i>48 Tweets</div>
                    <div className="channel-details-item"><i className="fa fa-retweet"></i>20 Retweets</div>
                    <div className="channel-details-item"><i className="fa fa-calendar"></i>Joined November 2022</div>
                    <div className="channel-details-item"><i className="fa fa-globe"></i>Kerala, India</div>
                </div>
                
            </div>
            <div className="join-x-channel-button">
                <a href="https://twitter.com/thedivinecaster" target="_blank" rel="noopener noreferrer" className="join-x-channel-item-button">
                    <span className="join-x-channel-button-header">Follow Now</span>
                </a>
            </div>
        </div>
    )
}

export default X