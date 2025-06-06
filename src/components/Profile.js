import React from 'react';
import '../styles/Profile.css';

const Profile = () => {
    return (
        <div className="profile-container">
            <div className="profile-card">
                <h3 className="profile-heading">Account Settings</h3>

                <div className="profile-info">
                    <div className="first">
                        <img
                            src="https://tse1.mm.bing.net/th?id=OIP.UGvszP1kpazIwiJJL94uYQHaJh&pid=Api&P=0&h=180"
                            alt="Profile"
                            className="profile-image"
                        />
                        <div className="profile-details">
                            <p className="profile-name">Marry Doe</p>
                            <p className="profile-email">Marry@gmail.com</p>
                        </div>
                    </div>
                    <p className="profile-description">
                        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Profile;
