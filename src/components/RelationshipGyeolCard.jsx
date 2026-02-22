
import React from 'react';
import { Paper, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

function RelationshipGyeolCard() {
    const { t } = useTranslation();

    return (
        <Paper sx={{ p: 3, height: '100%' }} elevation={2}>
            <Typography variant="h5" gutterBottom>{t('home.relationshipGyeol')}</Typography>
            <Typography color="text.secondary">Discover your energetic compatibility with others. Matching feature under development.</Typography>
        </Paper>
    );
}

export default RelationshipGyeolCard;
