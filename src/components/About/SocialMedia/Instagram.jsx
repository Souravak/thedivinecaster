import React from 'react';
import Verified from './Verified/Verified';
import ProfilePicture from '../../../assets/images/profile-picture.jpg';
import './Instagram.css';

const Instagram = ({data}) => {
  return (
    <div className="social-item">
      <div className="social-item-box">
        <div className="social-item-title"><i className="fa-brands fa-instagram" style={{color:"purple"}}></i>thedivinecaster<Verified /></div>
        <div className="social-item-pic-counter">
          <img src={ProfilePicture} alt="" className="profile-picture"/>
          <div className="follow-counter">
            <div className="social-item-counter-section">
              <div className="social-item-counter-feed">
                <a href="https://www.instagram.com/thedivinecaster/" className="channel-link" target="_blank" rel="noreferrer noopener">
                  <div className="social-item-counter-value">{data.posts}</div>
                  <div className="social-item-counter-title">Posts</div>
                </a>
              </div>
              <div className="social-item-counter-feed">
                <a href="https://www.instagram.com/thedivinecaster/followers/" className="channel-link" target="_blank" rel="noreferrer noopener">
                  <div className="social-item-counter-value">{data.followers}</div>
                  <div className="social-item-counter-title">Followers</div>
                </a>
              </div>
              <div className="social-item-counter-feed">
                <a href="https://www.instagram.com/thedivinecaster/following/" className="channel-link" target="_blank" rel="noreferrer noopener">
                  <div className="social-item-counter-value">{data.following}</div>
                  <div className="social-item-counter-title">Following</div>
                </a>
              </div>
            </div>
            <a href="https://www.instagram.com/thedivinecaster" target="_blank" className="follow-button-text follow-button" rel="noreferrer noopener">Follow</a>
          </div>
        </div>
        <div className="social-item-name">TheDIVINEcasteR</div>
        <div className="threads"><i className='fa-brands fa-threads'></i><a href="https://www.threads.net/@thedivinecaster" className="channel-link" target="_blank" rel="noreferrer noopener">thedivinecaster</a></div>
        <div className="role">Video creater</div>
        <div className="social-item-bio">
          <div className="bio-line">#youtuber #gamer</div>
          <div className="bio-line">YT: <a href="https://www.youtube.com/thedivinecaster" target="_blank" className="channel-link" rel="noreferrer noopener">TheDIVINEcasteR</a></div>
          <div className="bio-line">YT: <a href="https://www.youtube.com/@divinesgaming" target="_blank" className="channel-link" rel="noreferrer noopener">DIVINES GAMING</a></div>
          <div className="bio-line">Influencer | Tech Talks | Unboxing & Review</div>
          <div className="followed-by">Followed by 
            <span className="followed-by-name">
              <a href="https://www.instagram.com/sohail21400" target="_blank" rel="noopener noreferrer"> sohail21400</a>, 
              <a href="https://www.instagram.com/__mithun___k " target="_blank" rel="noopener noreferrer"> mithun_k</a>
              {/* <a href="https://www.instagram.com/kiransbaliga" target="_blank" rel="noopener noreferrer"> kiransbaliga</a> */}
            </span> and 39 others
          </div>
        </div>
      </div>
      <div className="follow-instagram-button">
        <a href="https://instagram.com/thedivinecaster" target="_blank" rel="noopener noreferrer" className="follow-instagram-item-button">
            <span className="follow-instagram-button-header">Follow Now</span>
        </a>
      </div>
    </div>
  )
}

export default Instagram