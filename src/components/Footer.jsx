import React from 'react';
import { Link } from 'react-router-dom';
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
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/programs">Programs</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h4>Contact Info</h4>
                    <div className="contact-info">
                        <div className="contact-item">
                            <FaMapMarkerAlt className="contact-icon" />
                            <div>
                                <p>59/6, 80 Feet Road, Gubbalala Main Rd</p>
                                <p>Gubbalala, Subramanyapura, Bengaluru</p>
                                <p>Karnataka 560061</p>
                            </div>
                        </div>
                        <div className="contact-item">
                            <FaPhone className="contact-icon" />
                            <div>
                                <p>8792175588</p>
                                <p>8861552277</p>
                                <p>8971168006</p>
                            </div>
                        </div>
                        <div className="contact-item">
                            <FaEnvelope className="contact-icon" />
                            <p>bluegrassacademybangalore@gmail.com</p>
                        </div>
                        <div className="contact-item">
                            <FaClock className="contact-icon" />
                            <div>
                                <p className="schedule-title">Daily Schedule</p>
                                <p>9:00 AM – 9:00 PM</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            
            <div className="footer-bottom">
                <div className="footer-bottom-content">
                    <p>&copy; {currentYear} Blue Grass Academy. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
