import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact container text-center py-5">
            <h2>Contact Us</h2>
            <p>Business Hours:</p>
            <p>Monday - Saturday: 9:30 AM - 6:00 PM</p>
            <p>Sunday Closed</p>
            <a
                href="https://wa.me/8421767210"
                className="btn btn-success"
                target="_blank"
                rel="noopener noreferrer"
            >
                Contact on WhatsApp
            </a>
        </div>
    );
};

export default Contact;
