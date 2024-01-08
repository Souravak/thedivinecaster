import React,{useState} from 'react';
import './About.css';
import Instagram from './SocialMedia/Instagram';
import YouTube from './SocialMedia/YouTube';

const About = () => {
  return (
    <div className="about">
        <div className="about-body">
          <div className="title">About</div>
          <div className="about-container">
            <div className="social-item">
              <Instagram />
            </div>

            <div className="social-item">
              <YouTube />
            </div>
          </div>
        </div>
    </div>
  )
}

export default About