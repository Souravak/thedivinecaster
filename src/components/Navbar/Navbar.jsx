import React, {useState} from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png';
// import menu from '../../assets/menu.png';

const Navbar = ({ setCurrentPage }) => {
  const [activeNav, setActiveNav] = useState('home');

  const handleNavClick = (page) => {
    setCurrentPage(page);
    setActiveNav(page);
  };

  return (
    <nav className="navbar">
        <img src={logo} alt="logo" className='logo'/>
        <div className="desktopMenu">
          <button onClick={() => handleNavClick('home')} className={`desktopMenuListItem item ${activeNav === 'home' ? 'active' : ''}`}>Home</button>
          <button onClick={() => handleNavClick('about')} className={`desktopMenuListItem item ${activeNav === 'about' ? 'active' : ''}`}>About</button>
          <button onClick={() => handleNavClick('trending')} className={`desktopMenuListItem item ${activeNav === 'trending' ? 'active' : ''}`}>Trending</button>
          <button onClick={() => handleNavClick('tdcstores')} className={`desktopMenuListItem item ${activeNav === 'tdcstores' ? 'active' : ''}`}>TDC Stores</button>
          <button onClick={() => handleNavClick('donate')} className={`desktopMenuListItem item ${activeNav === 'donate' ? 'active' : ''}`}>Donate</button>
          {/* <button >Contact Me</button> */}
        </div>
        <button className="contact-btn" style={{borderRadius: "5rem", outline: "0",border: "0",padding: "5px 1rem"}} onClick={() => handleNavClick('contact')} className={`${activeNav === 'contact' ? '' : ''}`}>
            <img src={contactImg} alt="" className="desktopMenuImg" />&nbsp;Contact Me
        </button>
    </nav>
  )
}

export default Navbar