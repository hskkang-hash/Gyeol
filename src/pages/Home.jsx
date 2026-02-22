
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Typography, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';

import TodayGyeolCard from '../components/TodayGyeolCard';
import MyCosmosCard from '../components/MyCosmosCard';
import RelationshipGyeolCard from '../components/RelationshipGyeolCard';

function Home() {
    const { t } = useTranslation();
    const location = useLocation();
    
    const userName = location.state?.name || "Explorer";

    return (
        <Box>
            <title>{`${userName}'s Cosmic Blueprint - Gyeol`}</title>
            <meta name="description" content={`Welcome, ${userName}. Discover your personalized life energy map, daily guidance, and relationship insights based on your unique birth data.`} />

            <Typography variant="h4" component="h1" sx={{ textAlign: 'center', mb: 1, fontFamily: 'Nanum Myeongjo', fontWeight: 'bold' }}>
                {`Welcome, ${userName}`}
            </Typography>
            <Typography variant="body1" sx={{ textAlign: 'center', mb: 4, color: 'text.secondary' }}>
                {t('home.tagline')}
            </Typography>

            <Grid container spacing={4}>
                {/* Today's Gyeol Card */}
                <Grid item xs={12}>
                   <TodayGyeolCard />
                </Grid>

                {/* My Cosmos Card */}
                <Grid item xs={12} md={6}>
                    <MyCosmosCard />
                </Grid>

                {/* Relationship Gyeol Card */}
                <Grid item xs={12} md={6}>
                    <RelationshipGyeolCard />
                </Grid>
            </Grid>
        </Box>
    );
}

export default Home;
