
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import './Onboarding.css';

const Onboarding = () => {
    const { t } = useTranslation(); // Initialize the translation hook
    const [step, setStep] = useState(1);
    const [profile, setProfile] = useState({
        birthDate: '',
        gender: '',
        focus: ''
    });
    const navigate = useNavigate();

    const handleNext = () => setStep(s => s + 1);
    const handleBack = () => setStep(s => s - 1);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfile(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {
        // Basic validation
        if (!profile.birthDate || !profile.gender || !profile.focus) {
            alert("Please fill out all fields.");
            return;
        }
        
        // Calculate age from birthDate
        const birthYear = new Date(profile.birthDate).getFullYear();
        const currentYear = new Date().getFullYear();
        const age = currentYear - birthYear;

        const userProfile = { ...profile, age };

        // Store profile in localStorage to persist data across sessions
        localStorage.setItem('userProfile', JSON.stringify(userProfile));
        
        // Navigate to the dashboard with the profile state
        navigate('/dashboard', { state: { profile: userProfile } });
    };

    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <div className="onboarding-step">
                        <h2>{t('onboarding.step1_title')}</h2>
                        <p>{t('onboarding.step1_subtitle')}</p>
                        <input type="date" name="birthDate" value={profile.birthDate} onChange={handleInputChange} />
                        <button onClick={handleNext}>Next</button>
                    </div>
                );
            case 2:
                return (
                    <div className="onboarding-step">
                        <h2>{t('onboarding.step2_title')}</h2>
                        <p>{t('onboarding.step2_subtitle')}</p>
                        <select name="gender" value={profile.gender} onChange={handleInputChange}>
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                        <button onClick={handleBack}>Back</button>
                        <button onClick={handleNext}>Next</button>
                    </div>
                );
            case 3:
                return (
                    <div className="onboarding-step">
                        <h2>{t('onboarding.step3_title')}</h2>
                        <p>{t('onboarding.step3_subtitle')}</p>
                        <select name="focus" value={profile.focus} onChange={handleInputChange}>
                            <option value="">Select Focus</option>
                            <option value="career">Career</option>
                            <option value="love">Love</option>
                            <option value="health">Health</option>
                        </select>
                        <button onClick={handleBack}>Back</button>
                        <button onClick={handleSubmit}>{t('onboarding.button_reveal')}</button>
                    </div>
                );
            default:
                return <div>Welcome!</div>;
        }
    };

    return (
        <div className="onboarding-container">
            <div className="progress-bar" style={{ width: `${(step / 3) * 100}%` }}></div>
            {renderStep()}
        </div>
    );
};

export default Onboarding;
