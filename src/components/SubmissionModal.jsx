import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaTimes, FaExclamationTriangle } from 'react-icons/fa';
import './SubmissionModal.css';

const SubmissionModal = ({ isOpen, onClose, type, title, message }) => {
    if (!isOpen) return null;

    const getIcon = () => {
        switch (type) {
            case 'success':
                return <FaCheckCircle className="modal-icon success" />;
            case 'error':
                return <FaExclamationTriangle className="modal-icon error" />;
            default:
                return <FaCheckCircle className="modal-icon success" />;
        }
    };

    const getModalTitle = () => {
        if (title) return title;
        switch (type) {
            case 'success':
                return 'Thank You!';
            case 'error':
                return 'Oops! Something went wrong';
            default:
                return 'Thank You!';
        }
    };

    const getModalMessage = () => {
        if (message) return message;
        switch (type) {
            case 'success':
                return 'Thank you for contacting Blue Grass Academy! We have received your inquiry and will get back to you soon.';
            case 'error':
                return 'Sorry, there was an error sending your message. Please try again later or contact us directly at bluegrassacademybangalore@gmail.com';
            default:
                return 'Thank you for contacting Blue Grass Academy! We will get back to you soon.';
        }
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <motion.div 
                className="modal-container"
                onClick={(e) => e.stopPropagation()}
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 50 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
            >
                <div className="modal-header">
                    {getIcon()}
                    <button className="modal-close-btn" onClick={onClose}>
                        <FaTimes />
                    </button>
                </div>
                
                <div className="modal-content">
                    <h2 className="modal-title">{getModalTitle()}</h2>
                    <p className="modal-message">{getModalMessage()}</p>
                    
                    {type === 'success' && (
                        <div className="modal-additional-info">
                            <h3>What happens next?</h3>
                            <ul>
                                <li>Our team will review your inquiry</li>
                                <li>You'll receive a detailed response soon</li>
                                <li>We'll send program information and trial class details</li>
                            </ul>
                        </div>
                    )}
                </div>
                
                <div className="modal-footer">
                    <motion.button 
                        className="modal-btn primary"
                        onClick={onClose}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {type === 'success' ? 'Got it!' : 'Try Again'}
                    </motion.button>
                </div>
            </motion.div>
        </div>
    );
};

export default SubmissionModal;
