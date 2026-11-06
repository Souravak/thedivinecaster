import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Footer from '../Footer/Footer';
import './Contact.css';

const Contact = () => {
  const form = useRef(null);
  const [status, setStatus] = useState('idle');
  const [feedback, setFeedback] = useState('');

  const sendEmail = async (event) => {
    event.preventDefault();
    if (!form.current || status === 'sending') return;
    if (!form.current.reportValidity()) return;

    setStatus('sending');
    setFeedback('');
    try {
      await emailjs.sendForm('service_plf4j0k', 'template_8bsg8gk', form.current, 'XI_R9T5Z7O3tdWEUo');
      form.current.reset();
      setStatus('success');
      setFeedback('Your message was sent successfully. Thank you for reaching out!');
    } catch (error) {
      console.error('Contact form submission failed:', error);
      setStatus('error');
      setFeedback('Your message could not be sent. Please try again in a moment.');
    }
  };

  return (
    <main id="contactPage">
      <section className="contact-layout" aria-labelledby="contact-heading">
        <div className="contact-intro">
          <p className="contact-eyebrow"><span className="contact-status-dot" /> OPEN TO COLLABORATIONS</p>
          <h1 id="contact-heading">Let's make <span>something great.</span></h1>
          <p className="contactDesc">Have a collaboration idea, business inquiry, or a question? Send a message and I'll get back to you.</p>
          <div className="contact-perks">
            <div><i className="fa-regular fa-envelope" aria-hidden="true" /> Brand partnerships and sponsorships</div>
            <div><i className="fa-solid fa-lightbulb" aria-hidden="true" /> Creative ideas and collaborations</div>
            <div><i className="fa-regular fa-comment-dots" aria-hidden="true" /> General questions and feedback</div>
          </div>
          <p className="contact-availability"><span className="contact-status-dot" /> Based in Kerala, India · Available online</p>
        </div>
        <div className="contact-card">
          <div className="contact-card-heading">
            <h2>Send a message</h2>
            <p>Fill in the details below.</p>
          </div>
          <form className="contactForm" ref={form} onSubmit={sendEmail}>
            <label htmlFor="contact-name">Your name</label>
            <input id="contact-name" type="text" name="your_name" placeholder="Enter your name" autoComplete="name" required maxLength={100} />
            <label htmlFor="contact-email">Email address</label>
            <input id="contact-email" type="email" name="your_email" placeholder="you@example.com" autoComplete="email" required maxLength={254} />
            <label htmlFor="contact-message">Your message</label>
            <textarea id="contact-message" name="message" rows="6" placeholder="Tell me what you have in mind..." required maxLength={3000} />
            <button type="submit" className="contact-submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : 'Send message'}
              <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true" />
            </button>
            <p className="contact-feedback" role="status" aria-live="polite" data-status={status}>{feedback}</p>
          </form>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Contact;
