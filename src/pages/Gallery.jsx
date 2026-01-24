import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Gallery.css';

const Gallery = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    
    // Professional stock images for music academy
    const galleryImages = [
        {
            id: 1,
            category: 'students',
            title: 'Guitar Students Performance',
            url: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=600&fit=crop',
            description: 'Our talented students showcasing their guitar skills'
        },
        {
            id: 2,
            category: 'instructors',
            title: 'Professional Music Instructor',
            url: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop',
            description: 'Expert instructor teaching advanced techniques'
        },
        {
            id: 3,
            category: 'facilities',
            title: 'Modern Music Studio',
            url: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=600&fit=crop',
            description: 'State-of-the-art recording facilities'
        },
        {
            id: 4,
            category: 'students',
            title: 'Piano Lesson Session',
            url: 'https://images.unsplash.com/photo-1520531158348-3a6368a85e47?w=800&h=600&fit=crop',
            description: 'One-on-one piano instruction'
        },
        {
            id: 5,
            category: 'events',
            title: 'Annual Music Concert',
            url: 'https://images.unsplash.com/photo-1464349095431-e9a21285b537?w=800&h=600&fit=crop',
            description: 'Student performance at our annual concert'
        },
        {
            id: 6,
            category: 'instructors',
            title: 'Vocal Training Session',
            url: 'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=800&h=600&fit=crop',
            description: 'Professional vocal coaching'
        },
        {
            id: 7,
            category: 'facilities',
            title: 'Practice Room',
            url: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&h=600&fit=crop',
            description: 'Comfortable and acoustically treated practice spaces'
        },
        {
            id: 8,
            category: 'students',
            title: 'Drum Practice Session',
            url: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop',
            description: 'Energetic drum lessons with our students'
        },
        {
            id: 9,
            category: 'events',
            title: 'Music Workshop',
            url: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&h=600&fit=crop',
            description: 'Interactive music workshops for all ages'
        },
        {
            id: 10,
            category: 'instructors',
            title: 'Music Theory Class',
            url: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&h=600&fit=crop',
            description: 'Comprehensive music theory instruction'
        },
        {
            id: 11,
            category: 'facilities',
            title: 'Recording Studio',
            url: 'https://images.unsplash.com/photo-1598488035139-b9b5a1a97f1c?w=800&h=600&fit=crop',
            description: 'Professional recording equipment and studio'
        },
        {
            id: 12,
            category: 'students',
            title: 'Group Performance',
            url: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=600&fit=crop',
            description: 'Students performing together as an ensemble'
        }
    ];

    const categories = [
        { id: 'all', name: 'All Photos' },
        { id: 'students', name: 'Students' },
        { id: 'instructors', name: 'Instructors' },
        { id: 'facilities', name: 'Facilities' },
        { id: 'events', name: 'Events' }
    ];

    const filteredImages = selectedCategory === 'all' 
        ? galleryImages 
        : galleryImages.filter(img => img.category === selectedCategory);

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

                {/* Category Filter */}
                <motion.div 
                    className="gallery-filters"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="filter-buttons">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
                                onClick={() => setSelectedCategory(category.id)}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Gallery Grid */}
                <motion.div 
                    className="gallery-grid"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    {filteredImages.map((image, index) => (
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
                                scale: 1.05,
                                boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                            }}
                        >
                            <div className="image-container">
                                <img 
                                    src={image.url} 
                                    alt={image.title}
                                    loading="lazy"
                                />
                                <div className="image-overlay">
                                    <div className="overlay-content">
                                        <h3>{image.title}</h3>
                                        <p>{image.description}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

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
