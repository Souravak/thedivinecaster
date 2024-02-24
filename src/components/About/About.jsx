import React from 'react';
import './About.css';
import Instagram from './SocialMedia/Instagram';
import YouTubeTDC from './SocialMedia/YouTubeTDC';
import YouTubeDG from './SocialMedia/YouTubeDG';
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

            {/* Instagram */}
            <div className="social-item-container">
              <div className="social-title">Instagram</div>
              <Instagram data={socialMediaData.instagram}/>
            </div>

            {/* YouTube TDC */}
            <div className="social-item-container">
              <div className="social-title">Youtube TDC</div>
              <YouTubeTDC data={socialMediaData.youtubetdc} />
            </div>

            {/* YouTube DG */}
            <div className="social-item-container">
              <div className="social-title">YouTube DG</div>
              <YouTubeDG data={socialMediaData.youtubedg}/>
            </div>

            {/* Telegram */}
            <div className="social-item-container">
              <div className="social-title">Telegram</div>
              <Telegram data={socialMediaData.telegram}/>
            </div>

            {/* WhatsApp */}
            <div className="social-item-container">
              <div className="social-title">WhatsApp</div>
              <WhatsApp data={socialMediaData.whatsapp}/>
            </div>

            {/* Threads */}
            <div className="social-item-container">
              <div className="social-title">Threads</div>
              <Threads data={socialMediaData.threads}/>
            </div>

            {/* X */}
            <div className="social-item-container">
              <div className="social-title">X</div>
              <X data={socialMediaData.x}/>
            </div>

            {/* LinkedIn */}
            <div className="social-item-container">
              <div className="social-title">LinkedIn</div>
              <LinkedIn data={socialMediaData.linkedin}/>
            </div>

            {/* Facebook */}
            <div className="social-item-container">
              <div className="social-title">Facebook</div>
              <Facebook data={socialMediaData.facebook}/>
            </div>

            {/* Discord */}
            <div className="social-item-container">
              <div className="social-title">Discord</div>
              <Discord data={socialMediaData.discord}/>
            </div>

          </div>
        </div>
        <Footer/>
    </div>  
    )}
    </>
  )
}

export default About