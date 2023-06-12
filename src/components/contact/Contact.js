import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div className="contact-parent-container">
      <div className="left-half">
        <h1 className="contact-h1">Let's Chat.</h1>
        <p className='paragraph-text'>
          Thanks for dropping by my website! If you're curious about personal
          training or want to chat about my journey with Front-End Engineering,
          I'd absolutely love to hear from you. So go ahead, don't be shy—reach
          out and let's connect. Can't wait hear from you!
        </p>
        <span id='cheers-tag'>Cheers!</span>
        <a className='info-bubble' id='info-bubble-parent' href="mailto:youremail@example.com">
          <div className="info-bubble">
            <span className="contact-icon">
              <ion-icon name="mail-sharp"></ion-icon>
            </span>
            <h3 className="contact-email-h3">Edward@EdwardBaum.com</h3>
          </div>
        </a>
      </div>
      <div className="right-half"></div>
    </div>
  );
};

export default Contact;
