import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaBars, FaTimes, FaPhone, FaEnvelope } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import './Header.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    // Logo SVG Component
    const Logo = () => (
        <motion.svg 
            width="45" 
            height="45" 
            viewBox="0 0 100 100" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
        >
            <defs>
                <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFD100" />
                    <stop offset="100%" stopColor="#E0B800" />
                </linearGradient>
            </defs>
            <circle cx="50" cy="50" r="48" stroke="url(#goldGradient)" strokeWidth="4" />
            <path d="M35 80V20L75 50L35 80Z" fill="url(#goldGradient)" />
            <path d="M65 20V50" stroke="white" strokeWidth="3" strokeLinecap="round" />
            <circle cx="65" cy="15" r="5" fill="white" />
        </motion.svg>
    );

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="container header-container">
                <Link to="/" className="logo">
                    <Logo />
                    <div className="logo-text">
                        <span>Blue Grass</span>
                        <span className="text-gold">Academy</span>
                    </div>
                </Link>

                {/* Mobile Toggle */}
                <div className="mobile-toggle" onClick={toggleMenu}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>

                {/* Desktop Navigation */}
                <nav className="nav-menu desktop-nav">
                    <ul>
                        {['Home', 'About', 'Programs', 'Contact'].map((item, index) => (
                            <motion.li 
                                key={item}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <NavLink 
                                    to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '')}`}
                                    className={({ isActive }) => isActive ? 'active' : ''}
                                >
                                    {item}
                                    <motion.div 
                                        className="underline" 
                                        layoutId="navbar-underline"
                                        initial={false}
                                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                    />
                                </NavLink>
                            </motion.li>
                        ))}
                    </ul>
                    <motion.div 
                        className="header-cta"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        <Link to="/contact" className="btn-cta">
                            Book Demo
                        </Link>
                    </motion.div>
                </nav>

                {/* Mobile Navigation overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.nav
                            className="mobile-nav"
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'tween', duration: 0.3 }}
                        >
                            <div className="mobile-nav-header">
                                <div className="mobile-logo">
                                    <Logo />
                                    <span>Blue Grass Academy</span>
                                </div>
                            </div>
                            <ul>
                                {['Home', 'About', 'Programs', 'Contact'].map((item, index) => (
                                    <motion.li
                                        key={item}
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <NavLink 
                                            to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '')}`} 
                                            onClick={toggleMenu}
                                            className={({ isActive }) => isActive ? 'active' : ''}
                                        >
                                            {item}
                                        </NavLink>
                                    </motion.li>
                                ))}
                            </ul>
                            <div className="mobile-nav-footer">
                                <div className="mobile-contact-info">
                                    <div className="contact-item">
                                        <FaPhone />
                                        <span>+91 8096006688</span>
                                    </div>
                                    <div className="contact-item">
                                        <FaEnvelope />
                                        <span>info@bluegrassacademy.com</span>
                                    </div>
                                </div>
                                <Link to="/contact" className="btn-cta" onClick={toggleMenu}>
                                    Book a Free Demo
                                </Link>
                            </div>
                        </motion.nav>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
};

export default Header;
