import React from 'react';
import './ComponentLayout.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faComments } from '@fortawesome/free-solid-svg-icons';

const ComponentLayout = () => {
    return (
        <div className="container">
            <h1 className="heading">Unlock Your Legal Knowledge</h1>
            <p className="text">Connect with our experts to enhance your legal literacy journey.</p>
            
            <div className="icons">
                <div className="icon">
                    <FontAwesomeIcon icon={faUsers} className="icon-img" />
                    <h2 className="icon-heading">Community Support</h2>
                </div>
                <div className="icon">
                    <FontAwesomeIcon icon={faComments} className="icon-img" />
                    <h2 className="icon-heading">Expert Talk</h2>
                </div>
            </div>
            
            <a href="#" className="button">Sign Up Now</a>
        </div>
    );
};

export default ComponentLayout;
