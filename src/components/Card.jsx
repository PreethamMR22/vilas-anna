import React from 'react';
import { motion } from 'framer-motion';
import './Card.css';

const Card = ({ image, title, description, badge, timing, buttonText, onClick, className = '', delay = 0 }) => {
    return (
        <motion.div
            className={`card ${className}`}
            onClick={onClick}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: delay * 0.1, ease: "easeOut" }}
            whileHover={{ y: -15, transition: { duration: 0.3 } }}
        >
            <div className="card-image-wrapper">
                <motion.img
                    src={image}
                    alt={title}
                    className="card-image"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                />
                {badge && (
                    <span className="card-badge">{badge}</span>
                )}
            </div>
            <div className="card-content">
                <h3>{title}</h3>
                {timing && <p className="card-timing">{timing}</p>}
                {description && <p>{description}</p>}

                {buttonText ? (
                    <motion.button className="card-button"
                        initial={{ opacity: 0, y: 10 }}
                        whileHover={{ opacity: 1, y: 0 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {buttonText}
                    </motion.button>
                ) : (
                    <motion.div className="card-arrow"
                        initial={{ opacity: 0, x: -10 }}
                        whileHover={{ opacity: 1, x: 0 }}
                    >
                        →
                    </motion.div>
                )}
            </div>
        </motion.div>
    );
};

export default Card;
