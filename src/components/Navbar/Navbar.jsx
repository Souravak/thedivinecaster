import React, {useState} from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png';
// import {Link} from 'react-scroll';
import menu from '../../assets/menu.png';

const Navbar = ({ setCurrentPage }) => {
  const [activeNav, setActiveNav] = useState('home');
  const [showMenu, setShowMenu] = useState(false);

  const handleNavClick = (page) => {
    setCurrentPage(page);
    setActiveNav(page);
  };

  return (
    <nav className="navbar">
        <a href="./"><img src={logo} alt="logo" className='logo'/></a>
        <div className="desktopMenu">
          <button onClick={() => handleNavClick('home')} className={`desktopMenuListItem item ${activeNav === 'home' ? 'active' : ''}`}>Home</button>
          <button onClick={() => handleNavClick('about')} className={`desktopMenuListItem item ${activeNav === 'about' ? 'active' : ''}`}>About</button>
          <button onClick={() => handleNavClick('trending')} className={`desktopMenuListItem item ${activeNav === 'trending' ? 'active' : ''}`}>Trending</button>
          <button onClick={() => handleNavClick('tdcstores')} className={`desktopMenuListItem item ${activeNav === 'tdcstores' ? 'active' : ''}`}>TDC Stores</button>
          <button onClick={() => handleNavClick('donate')} className={`desktopMenuListItem item ${activeNav === 'donate' ? 'active' : ''}`}>Donate</button>
        </div>
        <button style={{borderRadius: "5rem", outline: "0",border: "0",padding: "5px 1rem"}} onClick={() => handleNavClick('contact')} className={`${activeNav === 'contact' ? '' : ''}`} >
            <img src={contactImg} alt="" className="desktopMenuImg" />&nbsp;Contact Me
        </button>
        <img src={menu} alt="Menu" className='mobMenu'onClick={() => setShowMenu(!showMenu)} />
        <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
        <button onClick={() => handleNavClick('home')} className={`listItem ${activeNav === 'home' ? 'active' : ''}`}>Home</button>
          <button onClick={() => handleNavClick('about')} className={`listItem ${activeNav === 'about' ? 'active' : ''}`}>About</button>
          <button onClick={() => handleNavClick('trending')} className={`listItem ${activeNav === 'trending' ? 'active' : ''}`}>Trending</button>
          <button onClick={() => handleNavClick('tdcstores')} className={`listItem ${activeNav === 'tdcstores' ? 'active' : ''}`}>TDC Stores</button>
          <button onClick={() => handleNavClick('donate')} className={`listItem ${activeNav === 'donate' ? 'active' : ''}`}>Donate</button>
        </div>
    </nav>
  )
}

export default Navbar