import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaTimes, FaYoutube } from 'react-icons/fa';
import './VideoModal.css';

const VideoModal = ({ isOpen, onClose, videoUrl }) => {
    // Convert YouTube URL to embed format
    const getEmbedUrl = (url) => {
        const videoId = url.includes('youtu.be') 
            ? url.split('/').pop().split('?')[0]
            : url.split('v=')[1]?.split('&')[0];
        return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
    };

    // Handle ESC key to close modal
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };

        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [isOpen, onClose]);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <motion.div
            className="video-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
        >
            <motion.div
                className="video-modal-container"
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 50 }}
                transition={{ 
                    duration: 0.4,
                    type: "spring",
                    stiffness: 300,
                    damping: 30
                }}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Modal Header */}
                <div className="video-modal-header">
                    <div className="video-modal-title">
                        <FaYoutube className="youtube-icon" />
                        <span>Brand Film</span>
                    </div>
                    <motion.button
                        className="video-modal-close"
                        onClick={onClose}
                        whileHover={{ scale: 1.1, rotate: 90 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                    >
                        <FaTimes />
                    </motion.button>
                </div>

                {/* Video Container */}
                <div className="video-modal-content">
                    <div className="video-wrapper">
                        <iframe
                            src={getEmbedUrl(videoUrl)}
                            title="Blue Grass Academy Brand Film"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="video-iframe"
                        />
                    </div>
                </div>

                {/* Modal Footer */}
                <div className="video-modal-footer">
                    <p className="video-description">
                        Discover the story behind Blue Grass Academy and our passion for music, yoga, and therapy education.
                    </p>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default VideoModal;
