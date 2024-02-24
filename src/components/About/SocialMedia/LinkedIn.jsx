import React from 'react';
import './LinkedIn.css';
import Verified from './Verified/Verified';
import ProfilePicture from '../../../assets/images/profile-picture.jpg';

const LinkedIn = ({data}) => {
  return (
    <div className="social-item">
        <div className="social-item-box">
            <div className="social-item-title"><i className="fa-brands fa-linkedin-square" style={{color:"#0077b5"}}></i>thedivinecaster<Verified /></div>
            <div className="social-item-pic-counter">
                <img src={ProfilePicture} alt="" className="profile-picture"/>
                <div className="channel-data">
                    <div className="channel-name">TheDIVINEcasteR</div>
                    <div className="channel-id"><a href="https://linkedin.com/thedivinecaster" target="_blank" rel="noopener noreferrer">@TheDIVINEcasteR</a></div>
                    <div className="channel-status">
                        <span className="posts-count">{data.posts} Posts</span>
                        <span> ‧ </span>
                        <span className="video-count">{data.connections} connections</span>
                    </div>
                </div>
            </div>
            <div className="channel-details">
                <div className="channel-details-item"><i className="fa fa-link"></i><span className="view-email-address"><a href="mailto:souravponnu99@gmail.com" target="_blank" rel="noopener noreferrer">Connect Now</a></span></div>
                <div className="channel-details-item"><i className="fa fa-users" aria-hidden="true"></i>{data.connections} connections</div>
                <div className="channel-details-item"><i className="fa fa-sticky-note-o "></i>{data.posts} Posts</div>
                <div className="channel-details-item"><i className="fa fa-thumbs-up"></i>{data.likes} likes</div>
                <div className="channel-details-item"><i className="fa fa-calendar"></i>Joined November 2022</div>
                <div className="channel-details-item"><i className="fa fa-globe"></i>Kerala, India</div>
            </div>
            
        </div>
        <div className="join-linkedin-button">
            <a href="https://linkedin.com/thedivinecaster" target="_blank" rel="noopener noreferrer" className="join-linkedin-item-button">
                <span className="join-linkedin-button-header">Connect Now</span>
            </a>
        </div>
    </div>
)
}
export default LinkedIn