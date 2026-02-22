
import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import './GyeolAura.css';
import { Box, Typography, Grid, LinearProgress, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const EnergyLinearProgress = styled(LinearProgress)(({ theme, bgcolor }) => ({
  height: 10,
  borderRadius: 5,
  backgroundColor: bgcolor ? `${bgcolor}33` : '#e0e0e0',
  [`& .MuiLinearProgress-bar`]: {
    borderRadius: 5,
    backgroundColor: bgcolor || theme.palette.primary.main,
  },
}));

// --- Simulation Logic ---
const getCombinedSeed = (date) => {
    const birthDate = localStorage.getItem('userBirthDate');
    if (!birthDate) return date.getDate();

    const birth = new Date(birthDate);
    const dayOfYear = (d) => Math.floor((d - new Date(d.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
    return dayOfYear(date) + dayOfYear(birth);
}

const pseudoRandom = (seed) => {
    let x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
}

const getEnergyScores = () => {
    const today = new Date();
    const seed = getCombinedSeed(today);

    const energies = {
        physical: Math.floor(pseudoRandom(seed * 1) * 71) + 30,
        financial: Math.floor(pseudoRandom(seed * 2) * 71) + 30,
        relationship: Math.floor(pseudoRandom(seed * 3) * 71) + 30,
        intellectual: Math.floor(pseudoRandom(seed * 4) * 71) + 30,
        emotional: Math.floor(pseudoRandom(seed * 5) * 71) + 30,
    };
    return energies;
};

const ENERGY_DEFINITIONS = {
  physical: { label: 'Physical', color: '#ff6b6b', description: 'A great day for physical activity and embracing vitality.', colors: ['#ff6b6b', '#f0932b', '#f9d423'] },
  financial: { label: 'Financial', color: '#f9d423', description: 'Opportunities for financial growth are highlighted.', colors: ['#f9d423', '#ebc400', '#f7b733'] },
  relationship: { label: 'Relationship', color: '#ff85a2', description: 'Ideal for connecting with others and nurturing bonds.', colors: ['#ff85a2', '#ff4b8d', '#ffb3c6'] },
  intellectual: { label: 'Intellectual', color: '#4d96ff', description: 'Your mind is sharp. Perfect for learning and solving problems.', colors: ['#4d96ff', '#3a7bd5', '#00d2ff'] },
  emotional: { label: 'Emotional', color: '#57ffc9', description: 'Your emotional sensitivity is high. Trust your intuition.', colors: ['#57ffc9', '#00e676', '#69f0ae'] },
};

const GyeolAura = () => {
  const { t } = useTranslation();

  const auraData = useMemo(() => {
    const scores = getEnergyScores();
    const totalScore = Math.floor(Object.values(scores).reduce((a, b) => a + b, 0) / 5);
    const dominantEnergy = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
    const dominantInfo = ENERGY_DEFINITIONS[dominantEnergy];

    document.documentElement.style.setProperty('--color-1', dominantInfo.colors[0]);
    document.documentElement.style.setProperty('--color-2', dominantInfo.colors[1]);
    document.documentElement.style.setProperty('--color-3', dominantInfo.colors[2]);

    return { scores, totalScore, dominantInfo };
  }, []); 

  if (!auraData) {
    return <p>Loading Aura...</p>;
  }

  const { scores, totalScore, dominantInfo } = auraData;

  return (
    <Paper sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', height: '100%', p: 3, backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
      <Typography variant="h6" sx={{ color: 'text.secondary'}}>
        {t('Today\'s Gyeol Aura')}
      </Typography>
      <div className="aura-container">
        <div className="aura-sphere layer1"></div>
        <div className="aura-sphere layer2"></div>
        <div className="aura-sphere layer3"></div>
        <div className="aura-text">
          <Typography variant="h2" sx={{ fontWeight: 'bold', color: 'common.white'}}>{totalScore}%</Typography>
        </div>
      </div>
      <Typography variant="body1" align="center" sx={{ mt: 2, fontStyle: 'italic' }}>
        {t(dominantInfo.description)}
      </Typography>
       <Box sx={{ width: '100%', mt: 3 }}>
            {Object.entries(scores).map(([key, value]) => (
                <Box key={key} sx={{ mb: 1.5 }}>
                    <Typography variant="body2" sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span>{t(ENERGY_DEFINITIONS[key].label)}</span>
                        <span>{value}</span>
                    </Typography>
                    <EnergyLinearProgress variant="determinate" value={value} bgcolor={ENERGY_DEFINITIONS[key].color} />
                </Box>
            ))}
        </Box>
    </Paper>
  );
};

export default GyeolAura;
