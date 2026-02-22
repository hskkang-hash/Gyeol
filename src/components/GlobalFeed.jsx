
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Typography, Avatar, Paper } from '@mui/material';

const AuraBubble = ({ name, score, color }) => (
  <Box sx={{ textAlign: 'center', m: 1 }}>
    <Avatar sx={{ width: 60, height: 60, bgcolor: color, margin: 'auto', border: '2px solid white' }}>
      {score}%
    </Avatar>
    <Typography variant="caption" sx={{ color: 'text.primary' }}>{name}</Typography>
  </Box>
);

const GlobalFeed = () => {
  const { t } = useTranslation();

  const feedData = [
    { name: 'Alex', score: 92, color: '#ff6b6b' },
    { name: 'Jisu', score: 85, color: '#4d96ff' },
    { name: 'Mike', score: 78, color: '#57ffc9' },
    { name: 'Priya', score: 95, color: '#ffc107' },
    { name: 'Chen', score: 88, color: '#9c27b0' },
    { name: 'Sofia', score: 90, color: '#e91e63' },
  ];

  return (
    <Paper sx={{ mt: 4, p: 2, background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)' }}>
      <Typography variant="h6" gutterBottom sx={{ textAlign: 'center', fontWeight: 'bold' }}>
        {t('Gyeol-Sync Feed')}
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {feedData.map(item => <AuraBubble key={item.name} {...item} />)}
      </Box>
    </Paper>
  );
};

export default GlobalFeed;
