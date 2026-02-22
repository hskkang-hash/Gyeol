
import React from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import './Dashboard.css';

const Icon = ({ name, className }) => <span className={`icon ${className}`}>{name}</span>;

// This function remains in English as it generates dynamic, personalized content
// not suitable for static translation files.
const getPersonalizedMessage = (profile) => {
    if (!profile) {
        return { title: "Your Vibe is Loading...", message: "Complete your profile to sync with your destiny.", cta: "Go to Onboarding" };
    }
    const { age, gender } = profile;

    if (age >= 20 && age < 30) {
        if (gender === 'female') return { title: "Your vibe is radiant pink today!", message: "An unexpected connection might be waiting at a new cafe or an unfamiliar place. #Challenge #Excitement", cta: "Explore Golden Days" };
        return { title: "Your vibe says: Just Do It!", message: "The more you channel your energy into projects or workouts, the greater the fortune that follows. #GoForIt", cta: "Check Career Momentum" };
    }
    if (age >= 30 && age < 50) {
        if (gender === 'female') return { title: "Time to refine your inner flow.", message: "Taking time to care for yourself today will bring better business luck than any important meeting.", cta: "View Your Deep Flow Report" };
        return { title: "The flow of wealth is smooth.", message: "Today is optimal for taking the lead in postponed investment decisions or career-related conversations.", cta: "Analyze Wealth Trajectory" };
    }
    if (age >= 50) {
        if (gender === 'female') return { title: "A calm flow of energy surrounds you.", message: "It's a perfect day to look after your health while sharing warm energy with those around you.", cta: "See Health Insights" };
        return { title: "Maintain a relaxed flow over haste.", message: "Letting things unfold naturally will ultimately protect your honor and legacy.", cta: "Consult a 1:1 Curator" };
    }
    return { title: "Your Cosmic journey begins!", message: "Discover the unique energies that shape your path. Every day is a new adventure.", cta: "See Your Destiny Blueprint" };
};


const Dashboard = () => {
    const { t } = useTranslation(); // Initialize the translation hook
    const location = useLocation();
    const userProfile = location.state?.profile || JSON.parse(localStorage.getItem('userProfile'));

    const personalizedContent = getPersonalizedMessage(userProfile);
    const formattedDate = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }).toUpperCase();

    return (
        <div className="dashboard-container">
            <header className="dashboard-header">
                <h1>{t('vibe.title')}</h1>
                <p>{formattedDate}</p>
            </header>

            <main className="summary-card-wrapper">
                <motion.div
                    className="summary-card"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="summary-card-header">
                        <p className="oracle-text">{t('dailyOracle.title')}</p>
                        <h2 className="summary-title">{personalizedContent.title}</h2>
                    </div>
                    <div className="dashboard-message-body">
                        <p>{personalizedContent.message}</p>
                    </div>
                    <motion.button 
                        className="cta-btn"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {personalizedContent.cta}
                    </motion.button>
                </motion.div>
            </main>

            <nav className="bottom-nav">
                <NavLink to="/dashboard" className="nav-item active"><Icon name="🌊" />{t('nav.vibe')}</NavLink>
                <NavLink to="/golden-days" className="nav-item"><Icon name="✨" />{t('nav.goldenDays')}</NavLink>
                <NavLink to="/profile" className="nav-item"><Icon name="👤" />{t('nav.profile')}</NavLink>
            </nav>
        </div>
    );
};

export default Dashboard;
