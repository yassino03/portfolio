import React from 'react';
import './styles/Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="contact-content">
                <h3>Get in Touch</h3>
                <h2>Contact Me</h2>
                <div className="contact-links">
                    <a href="mailto:yassinemili1@outlook.com" className="contact-item">
                        <span className="icon">✉</span>
                        yassinemili1@outlook.com
                    </a>
                    <a href="https://www.linkedin.com/in/yassine-mili-659026306/" 
                       target="_blank" 
                       rel="noopener noreferrer" 
                       className="contact-item">
                        <span className="icon">in</span>
                        LinkedIn
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
