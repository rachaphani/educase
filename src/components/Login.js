import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // You can validate email/password here
        navigate('/profile'); // Navigate to Profile
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h2 className="login-heading">Signin to your<br />PopX account</h2>
                <p className="login-subtext">Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit,</p>

                <form onSubmit={handleLogin}>
                    <label className="login-label" htmlFor="email">Email Address</label>
                    <input className="login-input" type="email" id="email" placeholder="Enter email address" required />

                    <label className="login-label" htmlFor="password">Password</label>
                    <input className="login-input" type="password" id="password" placeholder="Enter password" required />

                    <button type="submit" className="login-btn">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
