import React, { useState } from 'react';
import Section from '../components/Section';
import { FaInstagram, FaFacebookF, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        interestedField: '',
        preferredSlot: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thank you for contacting Blue Grass Academy! We will get back to you soon.');
        setFormData({ name: '', email: '', phone: '', interestedField: '', preferredSlot: '' });
    };

    return (
        <div className="page-contact">
            <Section className="contact-section">
                <div className="contact-header animate-fade-in">
                    <span className="badge">Contact</span>
                    <h1>Get in touch</h1>
                    <p className="contact-intro">
                        For any inquiries or to explore your vision further, we invite you to contact
                        our professional team using the details provided below.
                    </p>
                </div>

                <div className="contact-grid">
                    {/* Info Column */}
                    <div className="contact-info">
                        <div className="info-item">
                            <h4>Office</h4>
                            <p>59/6, 80 Feet Road, Gubbalala Main Rd, Gubbalala, Subramanyapura, Bengaluru, Karnataka 560061</p>
                        </div>
                        <div className="info-item">
                            <h4>Email</h4>
                            <p>bluegrassacademybangalore@gmail.com</p>
                        </div>
                        <div className="info-item">
                            <h4>Telephone</h4>
                            <p>08861552277</p>
                        </div>

                        <div className="info-item social-section">
                            <h4>Follow us</h4>
                            <div className="social-links-contact">
                                <a href="#" className="social-icon-c"><FaInstagram /></a>
                                <a href="#" className="social-icon-c"><FaFacebookF /></a>
                                <a href="#" className="social-icon-c"><FaYoutube /></a>
                                <a href="#" className="social-icon-c"><FaLinkedinIn /></a>
                            </div>
                        </div>
                    </div>

                    {/* Form Column */}
                    <div className="contact-form-wrapper">
                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    placeholder="91-00000000"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="interestedField">Interested Field</label>
                                <select
                                    id="interestedField"
                                    name="interestedField"
                                    value={formData.interestedField}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Select a field</option>
                                    <option value="music">Music</option>
                                    <option value="yoga">Yoga</option>
                                    <option value="art-therapy">Art Therapy</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="preferredSlot">Preferred Slot</label>
                                <select
                                    id="preferredSlot"
                                    name="preferredSlot"
                                    value={formData.preferredSlot}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Select a time slot</option>
                                    <option value="morning">Morning</option>
                                    <option value="afternoon">Afternoon</option>
                                    <option value="evening">Evening</option>
                                </select>
                            </div>

                            <button type="submit" className="btn btn-primary submit-btn">Submit</button>
                        </form>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default Contact;
