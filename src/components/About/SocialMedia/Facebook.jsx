import React from 'react';
import Verified from './Verified/Verified';
import ProfilePicture from '../../../assets/images/profile-picture.jpg';
import './Facebook.css';

const Facebook = ({data}) => {
    return (
        <div className="social-item">
            <div className="social-item-box">
                <div className="social-item-title"><i className="fa-brands fa-facebook-square" style={{color:"#316FF6"}}></i>thedivinecaster<Verified /></div>
                <div className="social-item-pic-counter">
                    <img src={ProfilePicture} alt="" className="profile-picture"/>
                    <div className="channel-data">
                        <div className="channel-name">TheDIVINEcasteR</div>
                        <div className="channel-id"><a href="https://www.facebook.com/tdcthedivinecaster" target="_blank" rel="noopener noreferrer">@TheDIVINEcasteR</a></div>
                        <div className="channel-status">
                            <span className="posts-count">{data.posts} Posts</span>
                            <span> ‧ </span>
                            <span className="video-count">{data.friends} Friends</span>
                        </div>
                    </div>
                </div>
                <div className="channel-details">
                    <div className="channel-details-item"><i className="fa fa-link"></i><span className="view-email-address"><a href="mailto:souravponnu99@gmail.com" target="_blank" rel="noopener noreferrer">Connect Now</a></span></div>
                    <div className="channel-details-item"><i className="fa fa-users" aria-hidden="true"></i>{data.friends} Friends</div>
                    <div className="channel-details-item"><i className="fa fa-sticky-note-o "></i>{data.posts} Posts</div>
                    <div className="channel-details-item"><i className="fa fa-thumbs-up"></i>{data.likes} likes</div>
                    <div className="channel-details-item"><i className="fa fa-calendar"></i>Joined December 2020</div>
                    <div className="channel-details-item"><i className="fa fa-globe"></i>Kerala, India</div>
                </div>
                
            </div>
            <div className="join-facebook-button">
                <a href="https://www.facebook.com/tdcthedivinecaster" target="_blank" rel="noopener noreferrer" className="join-facebook-item-button">
                    <span className="join-facebook-button-header">Friend Request</span>
                </a>
            </div>
        </div>
    )
    }

export default Facebook