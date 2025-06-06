import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Landing.css';

const Landing = () => {
    const navigate = useNavigate();

    return (
        <div className="landing-container">
            <div className="card">
                <h2 className="heading">Welcome to PopX</h2>
                <p className="subtext">Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit,</p>
                <button className="primary-btn" onClick={() => navigate('/signup')}>Create Account</button>
                <button className="secondary-btn" onClick={() => navigate('/login')}>Already Registered? Login</button>
            </div>
        </div>
    );
};

export default Landing;
