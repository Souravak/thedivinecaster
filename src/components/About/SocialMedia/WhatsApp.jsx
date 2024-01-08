import React from 'react';
import Verified from './Verified/Verified';
import ProfilePicture from '../../../assets/images/profile-picture.jpg';
import './WhatsApp.css';

const WhatsApp = () => {
    return (
        <div className="social-item">
            <div className="social-item-box">
                <div className="social-item-title"><i class="fa-brands fa-whatsapp" style={{color:"#25D366"}}></i>thedivinecaster<Verified /></div>
                <div className="social-item-pic-counter">
                    <img src={ProfilePicture} alt="" className="profile-picture"/>
                    <div className="channel-data">
                        <div className="channel-name">TheDIVINEcasteR</div>
                        <div className="channel-id"><a href="https://whatsapp.com/channel/0029VaA8FXd0LKZEC4MqFZ2S" target="_blank" rel="noopener noreferrer">@TheDIVINEcasteR</a></div>
                        <div className="channel-status">
                            <span className="subscriber-count">Channel</span>
                            <span> ‧ </span>
                            <span className="video-count">208 followers</span>
                        </div>
                    </div>
                </div>
                <div className="channel-details">
                    <div className="channel-details-item"><i class="fa fa-envelope-o"></i><span className="view-email-address"><a href="mailto:someone@example.com" target="_blank" rel="noopener noreferrer">Send an email</a></span></div>
                    <div className="channel-details-item"><i class="fas fa-globe"></i>Public Channel</div>
                    <div className="channel-details-item"><i class="fa fa-users" aria-hidden="true"></i>208 followers</div>
                    <div className="channel-details-item"><i class="fa fa-video-camera"></i>20 videos</div>
                    <div className="channel-details-item"><i class="fa fa-thumbs-up"></i>794 likes</div>
                    <div className="channel-details-item"><i class="fa fa-globe"></i>Kerala, India</div>
                </div>
                
            </div>
            <div className="join-whatsapp-channel-button">
                <a href="https://whatsapp.com/channel/0029VaA8FXd0LKZEC4MqFZ2S" target="_blank" rel="noopener noreferrer" className="join-whatsapp-channel-item-button">
                    <span className="join-whatsapp-channel-button-header">Join Channel</span>
                </a>
            </div>
        </div>
    )
}

export default WhatsApp