import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <div className="home-content text-center">
                <h1 className="home-title">Welcome to Vista Developer</h1>
                <p className="home-subtitle">
                    Empowering businesses with innovative IT solutions that drive success and growth.
                </p>
            </div>

            <div className="features">
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

            <div className="why-choose-us">
                <h2>Why Choose Us?</h2>
                <p>We combine innovation, expertise, and commitment to deliver exceptional IT solutions.</p>
                <div className="reasons">
                    <div className="reason">
                        <h4>Proven Track Record</h4>
                        <p>Trusted by top companies worldwide for reliable IT solutions.</p>
                    </div>
                    <div className="reason">
                        <h4>24/7 Support</h4>
                        <p>Our team is always available to ensure smooth operations for your business.</p>
                    </div>
                    <div className="reason">
                        <h4>Affordable Pricing</h4>
                        <p>Get premium IT services without exceeding your budget.</p>
                    </div>
                </div>
            </div>

            <div className="cta">
                <a href="/services" className="btn btn-primary">Explore Our Services</a>
                <a href="/contact" className="btn btn-success">Get In Touch</a>
            </div>
        </div>
    );
};

export default Home;
