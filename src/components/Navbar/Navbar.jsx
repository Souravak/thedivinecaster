import React, {useState} from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import {Link} from 'react-scroll';
import contactImg from '../../assets/contact.png';
// import menu from '../../assets/menu.png';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
        <img src={logo} alt="logo" className='logo'/>
        <div className="desktopMenu">
          <Link to="home" className="desktopMenuListItem item">Home</Link>
          <Link to="about" className="desktopMenuListItem item">About</Link>
          <Link to="trending" className="desktopMenuListItem item">Trending</Link>
          <Link to="tdcstores" className="desktopMenuListItem item" >TDC Stores</Link>
          <Link to="donate" className="desktopMenuListItem item">Donate</Link>
        </div>
        <button className="desktopMenuBtn" onClick={() => {
          document.getElementById("contact").scrollIntoView({behavior: "smooth"});
          }}>
            <img src={contactImg} alt="" className="desktopMenuImg" />&nbsp;Contact Me
        </button>
    </nav>
  )
}

export default Navbar