import React from 'react';
import './styles/Home.css';

const Home = () => {
    return (
        <section id="home" className="home-section">
            <div className="home-content">
                <div className="profile-image">
                    <img src="/home.jpg" alt="Yassine Mili" />
                </div>
                <h1>Yassine Mili</h1>
                <p className="title">Blockchain Developer</p>
                <div className="cta-buttons">
                    <button className="btn primary">Download CV</button>
                    <button className="btn secondary">Contact Me</button>
                </div>
                <div className="social-links">
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Home;
