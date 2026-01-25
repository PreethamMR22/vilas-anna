import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Gallery.css';

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    // Professional stock images for music academy
    const galleryImages = [
        {
            id: 1,
            title: 'Guitar Students Performance',
            url: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=600&fit=crop',
            description: 'Our talented students showcasing their guitar skills'
        },
        {
            id: 2,
            title: 'Professional Music Instructor',
            url: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop',
            description: 'Expert instructor teaching advanced techniques'
        },
        {
            id: 3,
            title: 'Modern Music Studio',
            url: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=600&fit=crop',
            description: 'State-of-the-art recording facilities'
        },
        {
            id: 4,
            title: 'Piano Lesson Session',
            url: 'https://images.unsplash.com/photo-1520531158348-3a6368a85e47?w=800&h=600&fit=crop',
            description: 'One-on-one piano instruction'
        },
        {
            id: 5,
            title: 'Annual Music Concert',
            url: 'https://images.unsplash.com/photo-1464349095431-e9a21285b537?w=800&h=600&fit=crop',
            description: 'Student performance at our annual concert'
        },
        {
            id: 6,
            title: 'Vocal Training Session',
            url: 'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=800&h=600&fit=crop',
            description: 'Professional vocal coaching'
        },
        {
            id: 7,
            title: 'Practice Room',
            url: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&h=600&fit=crop',
            description: 'Comfortable and acoustically treated practice spaces'
        },
        {
            id: 8,
            title: 'Drum Practice Session',
            url: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop',
            description: 'Energetic drum lessons with our students'
        },
        {
            id: 9,
            title: 'Music Workshop',
            url: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&h=600&fit=crop',
            description: 'Interactive music workshops for all ages'
        },
        {
            id: 10,
            title: 'Music Theory Class',
            url: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&h=600&fit=crop',
            description: 'Comprehensive music theory instruction'
        },
        {
            id: 11,
            title: 'Recording Studio',
            url: 'https://images.unsplash.com/photo-1598488035139-b9b5a1a97f1c?w=800&h=600&fit=crop',
            description: 'Professional recording equipment and studio'
        },
        {
            id: 12,
            title: 'Group Performance',
            url: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=600&fit=crop',
            description: 'Students performing together as an ensemble'
        }
    ];

    return (
        <motion.div 
            className="gallery-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <div className="container">
                {/* Header Section */}
                <motion.div 
                    className="gallery-header"
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="page-title">Gallery</h1>
                    <p className="page-subtitle">
                        Explore our vibrant music academy through these moments captured in time
                    </p>
                </motion.div>

                {/* Gallery Grid */}
                <motion.div 
                    className="gallery-grid"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {galleryImages.map((image, index) => (
                        <motion.div
                            key={image.id}
                            className="gallery-item"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ 
                                duration: 0.5, 
                                delay: index * 0.1,
                                type: "spring",
                                stiffness: 100
                            }}
                            whileHover={{ 
                                scale: 1.03,
                                boxShadow: "0 15px 30px rgba(0,0,0,0.2)"
                            }}
                            onClick={() => setSelectedImage(image)}
                        >
                            <div className="image-container">
                                <img 
                                    src={image.url} 
                                    alt={image.title}
                                    loading="lazy"
                                />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Image Modal */}
                {selectedImage && (
                    <motion.div 
                        className="image-modal"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div 
                            className="modal-content"
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button 
                                className="modal-close"
                                onClick={() => setSelectedImage(null)}
                            >
                                ×
                            </button>
                            <img 
                                src={selectedImage.url} 
                                alt={selectedImage.title}
                            />
                        </motion.div>
                    </motion.div>
                )}

                {/* Stats Section */}
                <motion.div 
                    className="gallery-stats"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <div className="stats-grid">
                        <div className="stat-item">
                            <h3>500+</h3>
                            <p>Happy Students</p>
                        </div>
                        <div className="stat-item">
                            <h3>15+</h3>
                            <p>Expert Instructors</p>
                        </div>
                        <div className="stat-item">
                            <h3>10+</h3>
                            <p>Years of Excellence</p>
                        </div>
                        <div className="stat-item">
                            <h3>50+</h3>
                            <p>Annual Events</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Gallery;
