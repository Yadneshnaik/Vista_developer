import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="home text-center py-5">
            {/* Header Section */}
            <h1 className="home-title">Welcome to Our IT Company</h1>
            <p className="home-subtitle">
                Empowering businesses with innovative IT solutions that drive success and growth.
            </p>

            {/* Features Section */}
            <div className="features mt-5">
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

            {/* Why Choose Us Section */}
            <div className="why-choose-us mt-5">
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

            {/* Technology Stack Section */}
            <div className="tech-stack mt-5">
                <h2>Our Technology Stack</h2>
                <p>We leverage cutting-edge technologies to deliver outstanding solutions.</p>
                <div className="stack">
                    <div className="stack-item">React.js</div>
                    <div className="stack-item">Node.js</div>
                    <div className="stack-item">Python</div>
                    <div className="stack-item">MongoDB</div>
                    <div className="stack-item">Laravel</div>
                    <div className="stack-item">Figma</div>
                    <div className="stack-item">Php</div>
                </div>
            </div>

            {/* Vision Section */}
            <div className="vision mt-5">
                <h2>Our Vision</h2>
                <p>
                    To be a global leader in IT solutions by empowering businesses through technology, innovation,
                    and collaboration.
                </p>
            </div>

            {/* Call-to-Action Buttons */}
            <div className="cta mt-5">
                <a href="/services" className="btn btn-primary me-3">Explore Our Services</a>
                <a href="/contact" className="btn btn-secondary">Get In Touch</a>
            </div>
        </div>
    );
};

export default Home;
