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

    // Prevent body scroll when mobile nav is open
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('mobile-nav-open');
        } else {
            document.body.classList.remove('mobile-nav-open');
        }
        
        // Cleanup on unmount
        return () => {
            document.body.classList.remove('mobile-nav-open');
        };
    }, [isOpen]);

    const toggleMenu = () => setIsOpen(!isOpen);

    // Logo Component
    const Logo = () => (
        <motion.img 
            src="/logo.png" 
            alt="Blue Grass Academy Logo"
            width="50"
            height="45"
            animate={{ 
                filter: "brightness(1.5) saturate(1.4) drop-shadow(0 0 25px rgba(212, 175, 55, 0.9))"
            }}
            initial={{ 
                filter: "brightness(1.5) saturate(1.4) drop-shadow(0 0 25px rgba(212, 175, 55, 0.9))",
                scale: 1
            }}
            whileHover={{ 
                rotate: 360,
                scale: 1.1,
                filter: "brightness(1.6) saturate(1.5) drop-shadow(0 0 32px rgba(212, 175, 55, 1))",
                transition: {
                    scale: { duration: 0.2 },
                    filter: { duration: 0.3 }
                }
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ 
                duration: 0.6,
                filter: { duration: 0.3 },
                scale: { duration: 0.2 }
            }}
            style={{
                cursor: 'pointer',
                transition: 'filter 0.3s ease, transform 0.2s ease'
            }}
        />
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
                        {['Home', 'About', 'Programs', 'Gallery'].map((item, index) => (
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
                            Contact
                        </Link>
                    </motion.div>
                </nav>

                {/* Mobile Navigation overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <>
                            <motion.div
                                className="mobile-nav-overlay"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                onClick={toggleMenu}
                            />
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
                                {['Home', 'About', 'Programs', 'Gallery'].map((item, index) => (
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
                                        <span>8792175588</span>
                                    </div>
                                    <div className="contact-item">
                                        <FaEnvelope />
                                        <span>bluegrassacademybangalore@gmail.com</span>
                                    </div>
                                </div>
                                <Link to="/contact" className="btn-cta" onClick={toggleMenu}>
                                    Contact
                                </Link>
                            </div>
                        </motion.nav>
                        </>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
};

export default Header;
