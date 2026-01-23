import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Section from '../components/Section';
const heroImage = '/images/hero.png'; // Fallback
const courseGuitar = '/images/course_guitar.png';
import './CourseDetail.css';

const courseData = {
    guitar: {
        title: "Guitar",
        image: courseGuitar,
        description: "Master the strings with our comprehensive guitar curriculum.",
        details: [
            "Acoustic & Electric Guitar specific tracks",
            "Technique, Theory, and Performance",
            "Genre exploration: Rock, Blues, Jazz, Pop",
            "Trinity College London exam preparation available"
        ]
    },
    piano: {
        title: "Piano",
        image: heroImage, // Placeholder
        description: "Discover the elegance and power of the piano.",
        details: [
            "Classical & Contemporary styles",
            "Sight reading and Ear training",
            "Composition basics",
            "Annual recitals and performance opportunities"
        ]
    },
    // Add other courses as needed
};

const CourseDetail = () => {
    const { id } = useParams();
    const course = courseData[id] || {
        title: "Music Course",
        image: heroImage,
        description: "Explore our world-class music education.",
        details: ["Professional Faculty", "State-of-the-art facilities", "Personalized curriculum"]
    };

    return (
        <div className="page-course-detail">
            <div className="course-hero">
                <img src={course.image} alt={course.title} />
                <div className="course-hero-overlay">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="course-hero-title"
                    >
                        {course.title}
                    </motion.h1>
                </div>
            </div>

            <Section>
                <div className="course-content-grid">
                    <motion.div
                        className="course-overview"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2>Course <span className="text-gold">Overview</span></h2>
                        <p>{course.description}</p>
                        <Link to="/contact" className="btn btn-primary">Enroll Now</Link>
                    </motion.div>

                    <motion.div
                        className="course-details-card"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3>What You'll Learn</h3>
                        <ul className="course-details-list">
                            {course.details.map((item, index) => (
                                <li key={index}>
                                    <span className="text-gold">✓</span> {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </Section>
        </div>
    );
};

export default CourseDetail;
