import React, { useRef } from 'react';
import './Contact.css';
import FacebookIcon from '../../assets/facebook-icon.png';
import TwitterIcon from '../../assets/twitter.png';
import YoutubeIcon from '../../assets/youtube.png';
import InstagramIcon from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    var name, email, message;
    name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    message = document.getElementById("message").value;
    if(name.length === 0 || email.length === 0 || message.length === 0){
      alert("Please fill all the fields");
    }
    else{
      e.preventDefault();
  
      emailjs.sendForm('service_plf4j0k', 'template_8bsg8gk', form.current, 'XI_R9T5Z7O3tdWEUo')
        .then((result) => {
            console.log(result.text);
            e.target.reset();
            alert('Email Sent !');
        }, (error) => {
            console.log(error.text);
        });
    }
  };
  return (
    <section id="contactPage">
        <div id="contact">
          <h1 className="contactPageTitle">Contact Me</h1>
          <span className="contactDesc">Please fill out the form below to discuss any work opportunites.</span>
          <form className="contactForm" ref={form} onSubmit={sendEmail} action="POST">
            <input type="text" className="name" placeholder="Your Name" name="your_name" id="name"/>
            <input type="email" className="email" placeholder="Your Email" name="your_email" id="email"/>
            <textarea className="msg" rows="5" placeholder="Your Message" name="message" id="message"></textarea>
            <button type='submit' value="Send" className="submitBtn">Submit</button>
            <div className="links">
              <img src={FacebookIcon} alt="Facebook" className="link" />
              <img src={TwitterIcon} alt="Twitter" className="link" />
              <img src={YoutubeIcon} alt="Youtube" className="link" />
              <img src={InstagramIcon} alt="Instagram" className="link" />
            </div>
          </form>
        </div>
    </section>
  )
}

export default Contact