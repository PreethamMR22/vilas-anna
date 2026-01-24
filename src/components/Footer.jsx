import React from 'react';
import { FaInstagram, FaFacebookF, FaYoutube, FaLinkedinIn, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="footer">
            <div className="footer-bg-pattern"></div>
            <div className="container footer-container">
                <div className="footer-column">
                    <div className="footer-logo">
                        <h3>Blue Grass Academy</h3>
                        <p className="footer-tagline">Where every melody carries a dream.</p>
                    </div>
                    <div className="footer-description">
                        <p>Discover your musical potential with our expert-led programs and state-of-the-art facilities.</p>
                    </div>
                    <div className="social-links">
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
                            <FaInstagram />
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
                            <FaFacebookF />
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="YouTube">
                            <FaYoutube />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>

                <div className="footer-column">
                    <h4>Quick Links</h4>
                    <ul className="footer-links">
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/programs">Programs</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/privacy">Privacy Policy</a></li>
                        <li><a href="/terms">Terms of Service</a></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h4>Contact Info</h4>
                    <div className="contact-info">
                        <div className="contact-item">
                            <FaMapMarkerAlt className="contact-icon" />
                            <div>
                                <p>Indu Arcade, Sainikpuri</p>
                                <p>Secunderabad, Telangana 500094</p>
                            </div>
                        </div>
                        <div className="contact-item">
                            <FaPhone className="contact-icon" />
                            <p>+91 8096006688</p>
                        </div>
                        <div className="contact-item">
                            <FaEnvelope className="contact-icon" />
                            <p>info@bluegrassacademy.com</p>
                        </div>
                        <div className="contact-item">
                            <FaClock className="contact-icon" />
                            <div>
                                <p>Mon - Fri: 9:00 AM - 8:00 PM</p>
                                <p>Sat - Sun: 10:00 AM - 6:00 PM</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-column">
                    <h4>Newsletter</h4>
                    <p className="newsletter-text">Subscribe to get updates on new programs and music tips.</p>
                    <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                        <input 
                            type="email" 
                            placeholder="Enter your email" 
                            className="newsletter-input"
                            required
                        />
                        <button type="submit" className="newsletter-btn">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
            
            <div className="footer-bottom">
                <div className="footer-bottom-content">
                    <p>&copy; {currentYear} Blue Grass Academy. All rights reserved.</p>
                    <div className="footer-bottom-links">
                        <a href="/privacy">Privacy</a>
                        <span className="separator">|</span>
                        <a href="/terms">Terms</a>
                        <span className="separator">|</span>
                        <a href="/sitemap">Sitemap</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
