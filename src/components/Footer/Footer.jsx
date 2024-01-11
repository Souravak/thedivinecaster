import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
        <div className="social-media-links">
            <a href="https://www.facebook.com/tdcstores" target="_blank" rel="noreferrer">
                <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com/tdcstores" target="_blank" rel="noreferrer">
                <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com/tdcstores/" target="_blank" rel="noreferrer">
                <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.youtube.com/channel/UCwZr8jgZ1p2zI5C4oXwQ4ZQ" target="_blank" rel="noreferrer">
                <i className="fab fa-youtube"></i>
            </a>
            <a href="https://www.linkedin.com/company/tdcstores" target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://www.whatsapp.com/" target="_blank" rel="noreferrer">
                <i className="fab fa-whatsapp"></i>
            </a>
        </div>
        <div className="all-rights-reserved">
            <span>© 2024 All Rights Reserved</span>
        </div>
    </div>
  )
}

export default Footer