import React, { useState, useEffect } from 'react';
import './FloatingContact.css';

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleEmailClick = () => {
    window.open('https://mail.google.com/mail/?view=cm&to=bluegrassmusicacademy@gmail.com', '_blank');
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:8861552277';
  };

  useEffect(() => {
    const scrollButton = document.querySelector('.scroll-to-top');
    const contactElement = document.querySelector('.floating-contact');
    
    if (scrollButton && contactElement) {
      if (isOpen) {
        scrollButton.style.opacity = '0';
        scrollButton.style.pointerEvents = 'none';
        contactElement.setAttribute('data-contact-open', 'true');
      } else {
        scrollButton.style.opacity = '1';
        scrollButton.style.pointerEvents = 'auto';
        contactElement.removeAttribute('data-contact-open');
      }
    }
  }, [isOpen]);

  return (
    <div className="floating-contact">
      <div className={`contact-options ${isOpen ? 'open' : ''}`}>
        <button 
          className="contact-option email-option"
          onClick={handleEmailClick}
          aria-label="Send email"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="4" width="20" height="16" rx="2"/>
            <path d="m22 7-10 5L2 7"/>
          </svg>
        </button>
        
        <button 
          className="contact-option phone-option"
          onClick={handlePhoneClick}
          aria-label="Call phone"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
        </button>
      </div>
      
      <button 
        className={`main-contact-button ${isOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        aria-label="Contact options"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
      </button>
    </div>
  );
};

export default FloatingContact;
