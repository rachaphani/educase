import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Signup.css';

const Signup = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would handle actual signup logic
        navigate('/login'); // Navigate to Login page
    };

    return (
        <div className="signup-container">
            <div className="signup-card">
                <h2 className="signup-heading">Create your<br />PopX account</h2>

                <form onSubmit={handleSubmit}>
                    <label className="signup-label">Full Name*</label>
                    <input className="signup-input" type="text" placeholder="Enter your name" required />

                    <label className="signup-label">Phone number*</label>
                    <input className="signup-input" type="text" placeholder="Enter your phone" required />

                    <label className="signup-label">Email address*</label>
                    <input className="signup-input" type="email" placeholder="Enter your email" required />

                    <label className="signup-label">Password*</label>
                    <input className="signup-input" type="password" placeholder="Enter your password" required />

                    <label className="signup-label">Company name</label>
                    <input className="signup-input" type="text" placeholder="Enter your company name" />

                    <label className="signup-label">Are you an Agency?*</label>
                    <div className="radio-group">
                        <label className="radio-option">
                            <input type="radio" name="agency" required /> Yes
                        </label>
                        <label className="radio-option">
                            <input type="radio" name="agency" /> No
                        </label>
                    </div>

                    <button type="submit" className="signup-btn">Create Account</button>
                </form>
            </div>
        </div>
    );
};

export default Signup;
