import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ScrollToTop.css';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    className="scroll-to-top"
                    onClick={scrollToTop}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 20 }}
                    transition={{ 
                        duration: 0.3, 
                        ease: "easeOut"
                    }}
                    whileHover={{ 
                        scale: 1.1,
                        boxShadow: "0 8px 30px rgba(26, 77, 62, 0.4)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Scroll to top"
                >
                    <motion.svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        initial={{ rotate: 0 }}
                        animate={{ rotate: isVisible ? 0 : -180 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                        <path
                            d="M12 19V5M5 12L12 5L19 12"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </motion.svg>
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default ScrollToTop;
