import React from 'react';
import './Threads.css';
import Verified from '../Verified/Verified';
import ProfilePicture from '../../../../assets/images/profile-picture.jpg';
import '../SocialMedia.css';

const Threads = ({data}) => {
    return (
        <div className="social-item">
            <div className="social-item-box">
                <div className="social-item-title"><i className="fa-brands fa-threads" style={{color:"purple"}}></i>thedivinecaster<Verified /></div>
                <div className="social-item-pic-counter">
                    <img src={ProfilePicture} alt="" className="profile-picture"/>
                    <div className="follow-counter">
                        <div className="social-item-counter-section">
                            <div className="social-item-counter-feed">
                                <a href="https://www.threads.net/@thedivinecaster/" rel="noopener noreferrer" className="channel-link" target="_blank">
                                    <div className="social-item-counter-value">{data.threads}</div>
                                    <div className="social-item-counter-title">Threads</div>
                                </a>
                            </div>
                        <div className="social-item-counter-feed">
                            <a href="https://www.threads.net/@thedivinecaster/replies" rel="noopener noreferrer" className="channel-link" target="_blank">
                                <div className="social-item-counter-value">{data.replies}</div>
                                <div className="social-item-counter-title">Replies</div>
                            </a>
                        </div>
                        <div className="social-item-counter-feed">
                            <a href="https://www.threads.net/@thedivinecaster/reposts" rel="noopener noreferrer" className="channel-link" target="_blank">
                                <div className="social-item-counter-value">{data.reposts}</div>
                                <div className="social-item-counter-title">Reposts</div>
                            </a>
                        </div>
                    </div>
                    <a href="https://www.instagram.com/thedivinecaster" target="_blank" rel="noopener noreferrer" className="follow-button-text follow-button" style={{background: "#5f0981"}}>Follow</a>
                </div>
            </div>
            <div className="social-item-name">TheDIVINEcasteR</div>
            <div className="threads"><i className='fa-brands fa-instagram'></i><a href="https://www.instagram.com/thedivinecaster" className="channel-link">thedivinecaster</a></div>
            <div className="role">Video creater</div>
            <div className="social-item-bio">
                <div className="bio-line">#youtuber #gamer</div>
                <div className="bio-line">YT: <a href="https://www.youtube.com/thedivinecaster" target="_blank" rel="noopener noreferrer" className="channel-link">TheDIVINEcasteR</a></div>
                <div className="bio-line">YT: <a href="https://www.youtube.com/@divinesgaming" target="_blank" rel="noopener noreferrer" className="channel-link">DIVINES GAMING</a></div>
                <div className="bio-line">Influencer | Tech Talks | Unboxing & Review</div>
                <div className="bio-line">#Creating Virtual Gaming World</div>
            </div>
        </div>
        <div className="join-social-media-button">
            <a href="https://whatsapp.com/channel/0029VaA8FXd0LKZEC4MqFZ2S" target="_blank" rel="noopener noreferrer" className="follow-threads-item-button join-social-media-item-button">
                <span className="follow-threads-button-header">Follow Now</span>
            </a>
        </div>
    </div>
    )
}

export default Threads