import React from 'react';
import './Home.css';
import channelImg from '../../assets/channelHomeImg.png';
import Footer from '../Footer/Footer';

const channels = [
  { name: 'TheDIVINECaster', category: 'Tech & everyday finds', url: 'https://www.youtube.com/thedivinecaster', icon: 'fa-solid fa-bolt' },
  { name: 'DIVINES GAMING', category: 'Gaming & play', url: 'https://www.youtube.com/@divinesgaming', icon: 'fa-solid fa-gamepad' },
];

const Home = ({ setCurrentPage }) => (
  <main className="home">
    <section className="home-hero" aria-labelledby="home-heading">
      <div className="hero-copy">
        <p className="eyebrow"><span className="status-dot" /> Independent creator · Kerala, India</p>
        <h1 id="home-heading">Curiosity takes<br /><span>many forms.</span></h1>
        <p className="hero-description">
          I’m Sourav — creator behind TheDIVINEcasteR. I share tech discoveries and gaming adventures across two YouTube channels.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#channels">Explore my channels <i className="fa-solid fa-arrow-down" aria-hidden="true" /></a>
          <button className="button button-secondary" type="button" onClick={() => { setCurrentPage('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Let's collaborate <i className="fa-solid fa-arrow-right" aria-hidden="true" /></button>
        </div>
        <div className="hero-note"><span className="note-rule" />Ideas, interests, and things worth sharing.</div>
      </div>
      <div className="hero-visual" aria-label="Sourav, creator of TheDIVINEcasteR">
        <div className="portrait-glow" />
        <div className="portrait-frame"><img src={channelImg} alt="Sourav holding a watch" /></div>
        <div className="portrait-caption"><span className="caption-mark">✳</span><span>Meet the creator<br /><strong>Sourav</strong></span></div>
        <div className="orbit orbit-one" /><div className="orbit orbit-two" />
      </div>
      <a className="scroll-cue" href="#channels"><span /> Scroll to explore</a>
    </section>

    <section className="channels-section" id="channels" aria-labelledby="channels-heading">
      <div className="section-heading">
        <div><p className="eyebrow">A little something for everyone</p><h2 id="channels-heading">Find your corner.</h2></div>
        <p className="section-intro">Two channels. Two different passions.<br />Pick a topic and come on in.</p>
      </div>
      <div className="channel-grid">
        {channels.map((channel, index) => (
          <a className="channel-card" href={channel.url} target="_blank" rel="noopener noreferrer" key={channel.name} style={{ '--card-index': index }}>
            <span className="channel-number">0{index + 1}</span>
            <span className="channel-icon"><i className={channel.icon} aria-hidden="true" /></span>
            <span className="channel-card-copy"><strong>{channel.name}</strong><small>{channel.category}</small></span>
            <span className="channel-arrow" aria-hidden="true"><i className="fa-solid fa-arrow-up-right-from-square" /></span>
          </a>
        ))}
      </div>
      <div className="channels-footer"><span>New videos, fresh ideas, and a lot of curiosity.</span><a href="https://www.youtube.com/thedivinecaster" target="_blank" rel="noopener noreferrer">Visit YouTube <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true" /></a></div>
      <div className="home-contact-banner"><div><p className="eyebrow">HAVE AN IDEA?</p><h2>Let's create something together.</h2><p>Partnerships, collaborations, and conversations are always welcome.</p></div><button type="button" className="button button-primary" onClick={() => { setCurrentPage('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Get in touch <i className="fa-solid fa-arrow-right" aria-hidden="true" /></button></div>
    </section>
    <p className="version">Site version {sessionStorage.getItem('currentVersion') || '—'}</p>
    <Footer />
  </main>
);

export default Home;
