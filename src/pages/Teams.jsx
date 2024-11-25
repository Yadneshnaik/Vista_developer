import React from 'react';
import './Teams.css';

const Teams = () => {
    const teamMembers = [
        { name: "Yadnesh Naik", role: "Founder/CEO", profile: "https://www.linkedin.com/in/yadnesh-naik-286a6b235/"},
        { name: "Vaidehi Naik", role: "Co-Founder", profile: "https://www.linkedin.com/in/vaidehi-naik-a67228240/"},
    ];

    return (
        <div className="teams container py-5">
            <h2 className="text-center">Our Team</h2>
            <div className="row">
                {teamMembers.map((member, index) => (
                    <div className="col-md-4" key={index}>
                        <div className="card">
                            <div className="card-body text-center">
                                <h5 className="card-title">{member.name}</h5>
                                <p className="card-text">{member.role}</p>
                                <a href={member.profile} className="btn btn-primary">Profile</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Teams;
