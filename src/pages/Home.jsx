import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="home text-center py-5">
            <h1>Welcome to Our IT Company</h1>
            <p>We provide top-notch IT solutions for your business.</p>
            
            <section className="about-us py-4">
                <h2>About Us</h2>
                <p>
                    At our IT company, we specialize in delivering cutting-edge solutions tailored to your business needs. 
                    With a team of highly skilled professionals, we are committed to driving innovation and excellence in 
                    web development, app development, digital marketing, and IT consultancy services.
                </p>
            </section>

            <section className="services-overview py-4">
                <h2>Our Services</h2>
                <div className="services-list">
                    <div className="service-item">
                        <h3>Web Development</h3>
                        <p>Building responsive, modern, and user-friendly websites for your business.</p>
                    </div>
                    <div className="service-item">
                        <h3>App Development</h3>
                        <p>Creating custom mobile and web applications to meet your unique requirements.</p>
                    </div>
                    <div className="service-item">
                        <h3>Digital Marketing</h3>
                        <p>Helping your brand reach the right audience with innovative marketing strategies.</p>
                    </div>
                    <div className="service-item">
                        <h3>IT Consultancy</h3>
                        <p>Providing expert advice to optimize your IT infrastructure and workflows.</p>
                    </div>
                </div>
            </section>

            <section className="cta py-4">
                <h2>Ready to Transform Your Business?</h2>
                <p>
                    Partner with us to leverage the power of technology and take your business to the next level. 
                    Our team is here to provide support every step of the way.
                </p>
                <a href="/contact" className="btn btn-primary">Get in Touch</a>
            </section>
        </div>
    );
};

export default Home;
