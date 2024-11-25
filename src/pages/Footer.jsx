import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="ftco-footer ftco-section img fixed-footer">
            <div className="overlay"></div>
            <div className="container">
                <div className="row mb-0">
                    <div className="col-lg-12 col-md-12 mb-0 mb-md-0">
                        <div className="ftco-footer-widget mb-0">
                            <h2 className="ftco-heading-2">Have a Question?</h2>
                            <div className="block-23 mb-0">
                                <div className="row">
                                    <div className="col-md-4 col-sm-12 footer-content">
                                        <span className="icon icon-map-marker"></span>
                                        <span className="text">Margao, Goa, India</span>
                                    </div>
                                    <div className="col-md-4 col-sm-12 footer-content">
                                        <span className="icon icon-phone"></span>
                                        <span className="text">
                                            <a href="tel://91 8421767210">+91 8421767210</a>
                                        </span>
                                    </div>
                                    <div className="col-md-4 col-sm-12 footer-content">
                                        <span className="icon icon-envelope"></span>
                                        <span className="text"><a href="mailto:vistadeveloper12@gmail.com">vistadeveloper12@gmail.com</a></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-12 mb-5 mb-md-0">
                        <div className="ftco-footer-widget mb-0">
                            <ul className="ftco-footer-social list-unstyled float-md-center mt-2">
                                {/* Add social media links if required */}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <p>
                            &copy; {new Date().getFullYear()} All rights reserved by <a href="#" target="_blank">Vista Developer</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
