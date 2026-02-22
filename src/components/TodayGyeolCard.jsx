
import React from 'react';
import { Paper, Typography, Grid, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { WbSunny, ColorLens, LooksOne, Explore } from '@mui/icons-material'; // Example icons

const InfoItem = ({ icon, title, value, color }) => (
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        {React.cloneElement(icon, { sx: { color, mr: 2, fontSize: '2rem' } })}
        <Box>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>{title}</Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary' }}>{value}</Typography>
        </Box>
    </Box>
);

function TodayGyeolCard() {
    const { t } = useTranslation();

    // Static data for now. This will be replaced with dynamic data later.
    const todayData = {
        element: "Wood",
        color: "Blue",
        number: "3",
        direction: "East"
    };

    return (
        <Paper sx={{ 
            p: { xs: 2, md: 3 }, 
            backgroundColor: 'rgba(255, 255, 255, 0.7)', 
            backdropFilter: 'blur(10px)',
            border: '1px solid',
            borderColor: 'primary.main'
        }} elevation={3}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.dark' }}>
                {t('home.todaysGyeol')}
            </Typography>
            <Grid container spacing={2} sx={{ mt: 1 }}>
                <Grid item xs={12} sm={6}>
                    <InfoItem 
                        icon={<WbSunny />} 
                        title={t('today.element')} 
                        value={t(`elements.${todayData.element.toLowerCase()}`)} 
                        color="#ffc107" // Amber
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <InfoItem 
                        icon={<ColorLens />} 
                        title={t('today.color')} 
                        value={t(`colors.${todayData.color.toLowerCase()}`)} 
                        color="#2196f3" // Blue
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <InfoItem 
                        icon={<LooksOne />} 
                        title={t('today.number')} 
                        value={todayData.number} 
                        color="#4caf50" // Green
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <InfoItem 
                        icon={<Explore />} 
                        title={t('today.direction')} 
                        value={t(`directions.${todayData.direction.toLowerCase()}`)} 
                        color="#f44336" // Red
                    />
                </Grid>
            </Grid>
        </Paper>
    );
}

export default TodayGyeolCard;
