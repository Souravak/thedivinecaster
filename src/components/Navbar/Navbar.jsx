import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';

const primaryLinks = [
  { label: 'Home', page: 'home' },
  { label: 'About', page: 'about' },
  // { label: 'Trending', page: 'trending' },
  { label: 'Store', page: 'tdcstores' },
  { label: 'Contact', page: 'contact' },
];

const Navbar = ({ setCurrentPage, currentPage }) => {
  const [showMenu, setShowMenu] = useState(false);
  const goToPage = (page) => {
    setCurrentPage(page);
    setShowMenu(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const pageButton = (item, mobile = false) => (
    <button
      key={item.page}
      type="button"
      className={`site-nav-link${currentPage === item.page ? ' is-active' : ''}${mobile ? ' mobile-link' : ''}`}
      aria-current={currentPage === item.page ? 'page' : undefined}
      onClick={() => goToPage(item.page)}
    >
      {item.label}
    </button>
  );

  return (
    <header className="site-header">
      <nav className="site-navbar" aria-label="Main navigation">
        <button className="site-brand" type="button" onClick={() => goToPage('home')} aria-label="TheDIVINEcasteR, home">
          <img src={logo} alt="" className="site-logo" />
          <span className="brand-divider" />
          <span className="brand-label">CREATOR & DIGITAL EXPLORER</span>
        </button>

        <div className="site-nav-links">{primaryLinks.map((item) => pageButton(item))}</div>

        {/* <a className="site-contact-button" href="https://www.youtube.com/thedivinecaster" target="_blank" rel="noopener noreferrer">
          Watch on YouTube <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true" />
        </a> */}

        <button
          className={`site-menu-toggle${showMenu ? ' is-open' : ''}`}
          type="button"
          aria-label={showMenu ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={showMenu}
          aria-controls="site-mobile-menu"
          onClick={() => setShowMenu((open) => !open)}
        >
          <span /><span />
        </button>

        <div className={`site-mobile-menu${showMenu ? ' is-visible' : ''}`} id="site-mobile-menu" aria-hidden={!showMenu}>
          {primaryLinks.map((item) => pageButton(item, true))}
          <a className="mobile-youtube-link" href="https://www.youtube.com/thedivinecaster" target="_blank" rel="noopener noreferrer">Watch on YouTube <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true" /></a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
