import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-container content">
        <div className="social-media-links">
            <a href="https://twitter.com/thedivinecaster" target="_blank" rel="noreferrer">
                <i className="fab fa-x-twitter"></i>
            </a>
            <a href="https://www.instagram.com/thedivinecaster" target="_blank" rel="noreferrer">
                <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.youtube.com/thedivinecaster" target="_blank" rel="noreferrer">
                <i className="fab fa-youtube"></i>
            </a>
            {/* <a href="https://www.linkedin.com/in/thedivinecaster" target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin"></i>
            </a> */}
            <a href="https://whatsapp.com/channel/0029VaA8FXd0LKZEC4MqFZ2S" target="_blank" rel="noreferrer">
                <i className="fab fa-whatsapp"></i>
            </a>
            <a href="https://whatsapp.com/channel/0029VaA8FXd0LKZEC4MqFZ2S" target="_blank" rel="noreferrer">
                <i className="fab fa-threads"></i>
            </a>
            <a href="https://whatsapp.com/channel/0029VaA8FXd0LKZEC4MqFZ2S" target="_blank" rel="noreferrer">
                <i className="fab fa-telegram"></i>
            </a>
            <a href="https://www.buymeacoffee.com/souravak" target="_blank" rel="noreferrer">
                <i className="fa fa-coffee"></i>
            </a>
        </div>
        <div className="all-rights-reserved">
            <span>© 2024 All Rights Reserved</span>
        </div>
    </div>
  )
}

export default Footer