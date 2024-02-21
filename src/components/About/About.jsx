import React from 'react';
import './About.css';
import Instagram from './SocialMedia/Instagram';
import YouTube from './SocialMedia/YouTube';
import Telegram from './SocialMedia/Telegram';
import WhatsApp from './SocialMedia/WhatsApp';
import Threads from './SocialMedia/Threads';
import X from './SocialMedia/X';
import LinkedIn from './SocialMedia/LinkedIn';
import Facebook from './SocialMedia/Facebook';
import Discord from './SocialMedia/Discord';
import Footer from '../Footer/Footer';

const About = () => {

  const socialMediaData = JSON.parse(sessionStorage.getItem('socialMediaData'));

  return (
    <>
    {socialMediaData && (
      <div className="about">
        <div className="about-body">
          <div className="title">About</div>
          <div className="about-container">

            <div className="social-item-container">
              <div className="social-title">Instagram</div>
              <Instagram data={socialMediaData.instagram}/>
            </div>

            <div className="social-item-container">
              <div className="social-title">Youtube</div>
              <YouTube data={socialMediaData.youtubetdc} />
            </div>

            <div className="social-item-container">
              <div className="social-title">Telegram</div>
              <Telegram data={socialMediaData.telegram}/>
            </div>

            <div className="social-item-container">
              <div className="social-title">WhatsApp</div>
              <WhatsApp data={socialMediaData.whatsapp}/>
            </div>

            <div className="social-item-container">
              <div className="social-title">Threads</div>
              <Threads data={socialMediaData.threads}/>
            </div>

            <div className="social-item-container">
              <div className="social-title">X</div>
              <X data={socialMediaData.x}/>
            </div>

            <div className="social-item-container">
              <div className="social-title">LinkedIn</div>
              <LinkedIn data={socialMediaData.linkedin}/>
            </div>

            <div className="social-item-container">
              <div className="social-title">Facebook</div>
              <Facebook data={socialMediaData.facebook}/>
            </div>

            <div className="social-item-container">
              <div className="social-title">Discord</div>
              <Discord data={socialMediaData.discord}/>
            </div>

          </div>
        </div>
        <Footer />
    </div>  
    )}
    </>
  )
}

export default About