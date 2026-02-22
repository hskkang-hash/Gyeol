
import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import { useTranslation } from 'react-i18next';
import TodayKoreanPhrase from '../components/TodayKoreanPhrase';

const StatCard = ({ title, value, description }) => (
    <Paper elevation={3} sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Typography variant="h6" component="h3" gutterBottom>
            {title}
        </Typography>
        <Typography variant="h4" component="p" sx={{ my: 2 }}>
            {value}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {description}
        </Typography>
    </Paper>
);

function Home() {
    const { t } = useTranslation();

    return (
        <Box>
            <Typography variant="h4" component="h1" gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
                {t('todaysGyeol')}
            </Typography>

            <Grid container spacing={4}>
                {/* Today's Summary */}
                <Grid item xs={12} md={6}>
                    <StatCard 
                        title={t('todaysSummary.title')}
                        value={t('todaysSummary.value')}
                        description={t('todaysSummary.description')}
                    />
                </Grid>

                {/* Today's Aura */}
                <Grid item xs={12} md={6}>
                    <StatCard 
                        title={t('todaysAura.title')}
                        value={t('todaysAura.value')}
                        description={t('todaysAura.description')}
                    />
                </Grid>

                {/* Recommended Activity */}
                <Grid item xs={12}>
                     <Paper elevation={3} sx={{ p: 3 }}>
                        <Typography variant="h6" component="h3" gutterBottom>
                            {t('recommendedActivity.title')}
                        </Typography>
                        <Typography variant="body1">
                            {t('recommendedActivity.description')}
                        </Typography>
                    </Paper>
                </Grid>

                 {/* Today's Korean Phrase */}
                <Grid item xs={12}>
                    <TodayKoreanPhrase />
                </Grid>

                {/* Gyeol-Sync Feed */}
                <Grid item xs={12}>
                    <Paper elevation={3} sx={{ p: 3 }}>
                        <Typography variant="h6" component="h3" gutterBottom>
                            {t('gyeolSync.title')}
                        </Typography>
                        <Typography variant="body1">
                            {t('gyeolSync.description')}
                        </Typography>
                    </Paper>
                </Grid>

                {/* Gyeol Matching */}
                <Grid item xs={12}>
                    <Paper elevation={3} sx={{ p: 3 }}>
                        <Typography variant="h6" component="h3" gutterBottom>
                           {t('gyeolMatching.title')}
                        </Typography>
                        <Typography variant="body1">
                            {t('gyeolMatching.description')}
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Home;
