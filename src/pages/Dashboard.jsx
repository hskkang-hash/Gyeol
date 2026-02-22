
import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import GyeolAura from '../components/GyeolAura';
import TodayKoreanPhrase from '../components/TodayKoreanPhrase';
import GlobalFeed from '../components/GlobalFeed';
import GyeolMatching from '../components/GyeolMatching';
import PremiumServices from '../components/PremiumServices';
import AdBanner from '../components/AdBanner'; // Import the AdBanner component

function Dashboard() {
  const { t } = useTranslation();

  return (
    <Container maxWidth="lg"> {/* Increased maxWidth for more space */}
      <Box sx={{ my: 4, textAlign: 'center' }}>
        
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={12} md={6}>
             <GyeolAura />
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold' }}>
              {t('Welcome to Gyeol')}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
              {t('Discover your daily flow and connect with the world.')}
            </Typography>
            <TodayKoreanPhrase />
          </Grid>
        </Grid>

        {/* AdBanner strategically placed after the main user content */}
        <AdBanner />

        <GlobalFeed />

        <Grid container spacing={4} sx={{ mt: 4 }}>
            <Grid item xs={12} md={6}>
                <GyeolMatching />
            </Grid>
            <Grid item xs={12} md={6}>
                <PremiumServices />
            </Grid>
        </Grid>

      </Box>
    </Container>
  );
}

export default Dashboard;
