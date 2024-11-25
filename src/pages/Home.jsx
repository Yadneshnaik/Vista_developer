import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="home text-center py-5">
            <h1 className="home-title">Welcome to Our IT Company</h1>
            <p className="home-subtitle">
                Empowering businesses with innovative IT solutions that drive success and growth.
            </p>
            <div className="features mt-4">
                <div className="feature">
                    <h3>Innovative Solutions</h3>
                    <p>Tailored IT services to meet your unique business challenges.</p>
                </div>
                <div className="feature">
                    <h3>Expert Team</h3>
                    <p>Our experienced professionals are here to bring your vision to life.</p>
                </div>
                <div className="feature">
                    <h3>Customer-Centric Approach</h3>
                    <p>We prioritize your success, delivering solutions that truly make an impact.</p>
                </div>
            </div>
            <div className="cta mt-5">
                <a href="/services" className="btn btn-primary me-3">Explore Our Services</a>
                <a href="/contact" className="btn btn-secondary">Get In Touch</a>
            </div>
        </div>
    );
};

export default Home;
