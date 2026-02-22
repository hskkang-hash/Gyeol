
import React from 'react';
import { Paper, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

function MyCosmosCard() {
    const { t } = useTranslation();

    return (
        <Paper sx={{ p: 3, height: '100%' }} elevation={2}>
            <Typography variant="h5" gutterBottom>{t('home.myCosmos')}</Typography>
            <Typography color="text.secondary">Detailed analysis of your innate energies and potential coming soon.</Typography>
        </Paper>
    );
}

export default MyCosmosCard;
