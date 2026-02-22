
import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import './GoldenDays.css'; // We will create this file next

const Icon = ({ name, className }) => <span className={`icon ${className}`}>{name}</span>;

const GoldenDays = () => {
    const { t } = useTranslation();

    // Placeholder data for the calendar and auspicious days
    const calendarData = {
        month: "July 2024",
        days: Array.from({ length: 31 }, (_, i) => i + 1),
        auspiciousDays: [7, 15, 22, 28] // Example days
    };

    return (
        <div className="goldendays-container">
            <header className="goldendays-header">
                <h1>{t('nav.goldenDays')}</h1>
                <p>Your personalized calendar of opportunity</p>
            </header>

            <main className="calendar-wrapper">
                <h2>{calendarData.month}</h2>
                <div className="calendar-grid">
                    {calendarData.days.map(day => (
                        <div 
                            key={day} 
                            className={`calendar-day ${calendarData.auspiciousDays.includes(day) ? 'auspicious' : ''}`}>
                            {day}
                            {calendarData.auspiciousDays.includes(day) && <span className="auspicious-marker">✨</span>}
                        </div>
                    ))}
                </div>
                <div className="legend">
                    <span className="legend-item"><span className="auspicious-marker">✨</span> Golden Day</span>
                </div>
            </main>
            
            <nav className="bottom-nav">
                <NavLink to="/dashboard" className="nav-item"><Icon name="🌊" />{t('nav.vibe')}</NavLink>
                <NavLink to="/golden-days" className="nav-item active"><Icon name="✨" />{t('nav.goldenDays')}</NavLink>
                <NavLink to="/profile" className="nav-item"><Icon name="👤" />{t('nav.profile')}</NavLink>
            </nav>
        </div>
    );
};

export default GoldenDays;
