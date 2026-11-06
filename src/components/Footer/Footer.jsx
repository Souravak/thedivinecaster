import React from 'react';
import './Footer.css';

const socialLinks = [
  { label: 'X', href: 'https://twitter.com/thedivinecaster', icon: 'fa-brands fa-x-twitter' },
  { label: 'Instagram', href: 'https://www.instagram.com/thedivinecaster', icon: 'fa-brands fa-instagram' },
  { label: 'YouTube', href: 'https://www.youtube.com/thedivinecaster', icon: 'fa-brands fa-youtube' },
  { label: 'WhatsApp channel', href: 'https://whatsapp.com/channel/0029VaA8FXd0LKZEC4MqFZ2S', icon: 'fa-brands fa-whatsapp' },
  { label: 'Buy Me a Coffee', href: 'https://www.buymeacoffee.com/souravak', icon: 'fa-solid fa-mug-hot' },
  { label: 'Discord', href: 'https://discord.gg/WS44EXtvmA', icon: 'fa-brands fa-discord' },
  { label: 'Facebook', href: 'https://www.facebook.com/tdcthedivinecaster', icon: 'fa-brands fa-facebook-f' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/srvak', icon: 'fa-brands fa-linkedin-in' },
];

const Footer = () => (
  <footer className="footer-container">
    <div className="footer-inner">
      <a className="footer-signoff" href="https://www.youtube.com/thedivinecaster" target="_blank" rel="noopener noreferrer">
        <span className="footer-mark">✳</span><span>TheDIVINEcasteR<small>Made with curiosity.</small></span>
      </a>
      <div className="social-media-links" aria-label="Social media links">
        {socialLinks.map((link) => (
          <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label} title={link.label}>
            <i className={link.icon} aria-hidden="true" />
          </a>
        ))}
      </div>
      <div className="all-rights-reserved"><span>© {new Date().getFullYear()} Sourav · Kerala, India</span><span>All good things start with curiosity.</span></div>
    </div>
  </footer>
);

export default Footer;
