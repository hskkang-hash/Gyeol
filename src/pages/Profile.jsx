
import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink, useNavigate } from 'react-router-dom';
import './Profile.css'; // We will create this file next

const Icon = ({ name, className }) => <span className={`icon ${className}`}>{name}</span>;

const Profile = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const userProfile = JSON.parse(localStorage.getItem('userProfile'));

    const handleLogout = () => {
        localStorage.removeItem('userProfile');
        navigate('/onboarding');
    };

    return (
        <div className="profile-container">
            <header className="profile-header">
                <h1>{t('nav.profile')}</h1>
                <p>Manage your cosmic identity</p>
            </header>

            <main className="profile-content">
                {userProfile ? (
                    <div className="profile-card">
                        <h2>{`Age: ${userProfile.age}`}</h2>
                        <p>{`Gender: ${userProfile.gender}`}</p>
                        <p>{`Focus: ${userProfile.focus}`}</p>
                        <p>{`Birthdate: ${userProfile.birthDate}`}</p>
                    </div>
                ) : (
                    <p>No profile data found. Please complete onboarding.</p>
                )}
                
                <button onClick={handleLogout} className="logout-button">Logout</button>
            </main>

            <nav className="bottom-nav">
                <NavLink to="/dashboard" className="nav-item"><Icon name="🌊" />{t('nav.vibe')}</NavLink>
                <NavLink to="/golden-days" className="nav-item"><Icon name="✨" />{t('nav.goldenDays')}</NavLink>
                <NavLink to="/profile" className="nav-item active"><Icon name="👤" />{t('nav.profile')}</NavLink>
            </nav>
        </div>
    );
};

export default Profile;
