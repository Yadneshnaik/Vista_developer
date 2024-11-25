import React from 'react';
import "./WebDevelopmentPlans.css";

const WebDevelopmentPlans = () => {
    return (
        <div className="service">
            <h1 className="web">Web Development Plans</h1>
            <div className="card-container">
                <div className="card">
                    <h3><b>Basic Plan</b></h3>
                    <span className="bar"></span>
                    <h1>Additional Information</h1>
                    <p className="btc"><b>Price: ₹15,000</b></p>
                    <p className="btc">Ideal for small businesses and startups looking to establish their online presence.</p>
                    <p className="btc"><b>This Includes:</b>
                        <br />
                        Custom-designed 5-page website Mobile-friendly.
                        <br />
                        Responsive design.
                        <br />
                        Contact form integration social media integration (links/icons).
                        <br />
                        2 rounds of revision.
                    </p>
                    <p className="btc"><b>What is FREE:</b>
                        <br />
                        Domain.
                        <br />
                        4 free logos.
                        <br />
                        15 royalty free images.
                    </p>
                </div>
                <div className="card">
                    <h3><b>STANDARD PLAN</b> </h3>
                    <span className="bar"></span>
                    <h1>Additional Information</h1>
                    <p className="btc"><b>Price: ₹25,000</b></p>
                    <p className="btc">Suitable for growing businesses that require additional features and functionality.</p>
                    <p className="btc">
                        <b>Includes (Basic Plan features plus):</b>
                        <br />
                        Custom-designed 10-page website.
                        <br />
                        Image gallery/portfolio showcase.
                        <br />
                        Blog integration.
                        <br />
                        Google Maps integration.
                        <br />
                        Newsletter signup integration.
                        <br />
                        4 rounds of revisions.
                        <br />
                    </p>
                </div>
                <div className="card">
                    <h3><b>PREMIUM PLAN</b> </h3>
                    <span className="bar"></span>
                    <h1>Additional Information</h1>
                    <p className="btc"><b>Price: ₹40,000</b></p>
                    <p className="btc">Designed for established businesses seeking a robust and dynamic online presence.</p>
                    <p className="btc">
                        <b>Features (includes all Standard Plan features plus):</b>
                        <br />
                        Custom-designed 15-page website.
                        <br />
                        Advanced on-page SEO optimization.
                        <br />
                        E-commerce functionality (up to 20 products).
                        <br />
                        Secure payment gateway integration.
                        <br />
                        User registration and login system.
                        <br />
                        Advanced forms (e.g., booking, reservation, etc.).
                        <br />
                        Multiple rounds of revisions.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WebDevelopmentPlans;
