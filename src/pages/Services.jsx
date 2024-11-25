import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Services.css';

const Services = () => {
    const navigate = useNavigate();

    return (
        <div className="services container py-5">
            <h2 className="text-center mb-4">Our Services</h2>
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Web Development</h5>
                            <p className="card-text">We create responsive and engaging websites tailored to your business needs.</p>
                            <button
                                className="btn btn-secondary"
                                onClick={() => navigate('/web-development-plans')}
                            >
                                Get In Touch
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">App Development</h5>
                            <p className="card-text">Our team builds mobile applications that are user-friendly and feature-rich.</p>
                            <button
                                className="btn btn-secondary"
                                onClick={() => navigate('/contact')}
                            >
                                Get In Touch
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">IT Consultancy</h5>
                            <p className="card-text">We offer expert advice to help you solve complex IT challenges.</p>
                            <button
                                className="btn btn-secondary"
                                onClick={() => navigate('/contact')}
                            >
                                Get In Touch
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Digital Marketing</h5>
                            <p className="card-text">We provide data-driven digital marketing solutions to boost your online presence.</p>
                            <button
                                className="btn btn-secondary"
                                onClick={() => navigate('/contact')}
                            >
                                Get In Touch
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Graphic Design</h5>
                            <p className="card-text">Our team designs visually appealing graphics for branding, advertising, and more.</p>
                            <button
                                className="btn btn-secondary"
                                onClick={() => navigate('/contact')}
                            >
                                Get In Touch
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
