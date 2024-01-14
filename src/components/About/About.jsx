import React from 'react';
import './About.css';
import Instagram from './SocialMedia/Instagram';
import YouTube from './SocialMedia/YouTube';
import Telegram from './SocialMedia/Telegram';
import WhatsApp from './SocialMedia/WhatsApp';
import Threads from './SocialMedia/Threads';
import X from './SocialMedia/X';
import Footer from '../Footer/Footer';

const About = () => {
  return (
    <div className="about">
        <div className="about-body">
          <div className="title">About</div>
          <div className="about-container">
            <div className="social-item-container">
              <div className="social-title">Instagram</div>
              <Instagram />
            </div>

            <div className="social-item-container">
              <div className="social-title">Youtube</div>
              <YouTube />
            </div>

            <div className="social-item-container">
              <div className="social-title">Telegram</div>
              <Telegram />
            </div>

            <div className="social-item-container">
              <div className="social-title">WhatsApp</div>
              <WhatsApp />
            </div>

            <div className="social-item-container">
              <div className="social-title">Threads</div>
              <Threads />
            </div>

            <div className="social-item-container">
              <div className="social-title">X</div>
              <X />
            </div>
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default About