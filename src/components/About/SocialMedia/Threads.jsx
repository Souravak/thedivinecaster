import React from 'react';
import './Threads.css';
import Verified from './Verified/Verified';
import ProfilePicture from '../../../assets/images/profile-picture.jpg';

const Threads = () => {
    return (
        <div className="social-item">
            <div className="social-item-box">
                <div className="social-item-title"><i class="fa-brands fa-threads" style={{color:"purple"}}></i>thedivinecaster<Verified /></div>
                <div className="social-item-pic-counter">
                    <img src={ProfilePicture} alt="" className="profile-picture"/>
                    <div className="follow-counter">
                        <div className="social-item-counter-section">
                            <div className="social-item-counter-feed">
                                <a href="https://www.instagram.com/thedivinecaster/" className="channel-link" target="_blank">
                                    <div className="social-item-counter-value">37</div>
                                    <div className="social-item-counter-title">Posts</div>
                                </a>
                            </div>
                        <div className="social-item-counter-feed">
                            <a href="https://www.instagram.com/thedivinecaster/followers/" className="channel-link" target="_blank">
                                <div className="social-item-counter-value">271</div>
                                <div className="social-item-counter-title">Followers</div>
                            </a>
                        </div>
                        <div className="social-item-counter-feed">
                            <a href="https://www.instagram.com/thedivinecaster/following/" className="channel-link" target="_blank">
                                <div className="social-item-counter-value">11</div>
                                <div className="social-item-counter-title">Following</div>
                            </a>
                        </div>
                    </div>
                <a href="https://www.instagram.com/thedivinecaster" target="_blank" className="follow-button-text follow-button" style={{background: "#5f0981"}}>Follow</a>
            </div>
        </div>
        <div className="social-item-name">TheDIVINEcasteR</div>
        <div className="threads"><i class='fa-brands fa-instagram'></i><a href="https://www.instagram.com/thedivinecaster" className="channel-link">thedivinecaster</a></div>
        <div className="role">Video creater</div>
            <div className="social-item-bio">
                <div className="bio-line">#youtuber #gamer</div>
                <div className="bio-line">YT: <a href="https://www.youtube.com/thedivinecaster" target="_blank" className="channel-link">TheDIVINEcasteR</a></div>
                <div className="bio-line">YT: <a href="https://www.youtube.com/@divinesgaming" target="_blank" className="channel-link">DIVINES GAMING</a></div>
                <div className="bio-line">Influencer | Tech Talks | Unboxing & Review</div>
                <div className="bio-line">#Creating Virtual Gaming World</div>
                {/* <div className="followed-by">Followed by 
                    <span className="followed-by-name">
                        <a href="https://www.instagram.com/sohail21400" target="_blank" rel="noopener noreferrer"> sohail21400</a>, 
                        <a href="https://www.instagram.com/__mithun___k " target="_blank" rel="noopener noreferrer"> mithun_k</a>, 
                        <a href="https://www.instagram.com/kiransbaliga" target="_blank" rel="noopener noreferrer"> kiransbaliga</a>
                    </span> and 39 others
                </div> */}
            </div>
          </div>
          <div className="follow-threads-button">
                <a href="https://whatsapp.com/channel/0029VaA8FXd0LKZEC4MqFZ2S" target="_blank" rel="noopener noreferrer" className="follow-threads-item-button">
                    <span className="follow-threads-button-header">Follow Now</span>
                </a>
            </div>
        </div>
    )
}

export default Threads