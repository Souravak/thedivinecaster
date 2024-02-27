import React from 'react';
import Verified from '../Verified/Verified';
import ProfilePicture from '../../../../assets/images/profile-picture.jpg';
import './X.css';
import '../SocialMedia.css';

const X = ({data}) => {
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
                            <span className="subscriber-count">{data.tweets} tweets</span>
                            <span> ‧ </span>
                            <span className="video-count">{data.followers} followers</span>
                        </div>
                    </div>
                </div>
                <div className="channel-details">
                    <div className="channel-details-item"><i className="fa fa-link"></i><span className="view-email-address"><a href="mailto:someone@example.com" target="_blank" rel="noopener noreferrer">Connect Now</a></span></div>
                    <div className="channel-details-item"><i className="fa fa-users" aria-hidden="true"></i>{data.followers} followers</div>
                    <div className="channel-details-item"><i className="fa fa-twitter"></i>{data.tweets} Tweets</div>
                    <div className="channel-details-item"><i className="fa fa-retweet"></i>{data.retweets} Retweets</div>
                    <div className="channel-details-item"><i className="fa fa-calendar"></i>Joined November 2022</div>
                    <div className="channel-details-item"><i className="fa fa-globe"></i>Kerala, India</div>
                </div>
                
            </div>
            <div className="join-social-media-button">
                <a href="https://twitter.com/thedivinecaster" target="_blank" rel="noopener noreferrer" className="join-x-channel-item-button join-social-media-item-button">
                    <span className="join-x-channel-button-header">Follow Now</span>
                </a>
            </div>
        </div>
    )
}

export default X