
import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Container, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <Box 
      component="footer" 
      sx={{ 
        py: { xs: 4, md: 6 }, 
        px: { xs: 2, md: 4 },
        mt: 'auto',
        backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#1a1a1a' : '#f5f5f5',
        borderTop: '1px solid', 
        borderColor: 'divider'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Glossary Section */}
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom sx={{ fontFamily: 'Nanum Myeongjo', fontWeight: 'bold' }}>
              {t('glossary.title')}
            </Typography>
            <Typography variant="body2" paragraph sx={{ color: 'text.secondary' }}>
              <strong>{t('glossary.saju.term')}:</strong> {t('glossary.saju.definition')}
            </Typography>
            <Typography variant="body2" paragraph sx={{ color: 'text.secondary' }}>
              <strong>{t('glossary.manse.term')}:</strong> {t('glossary.manse.definition')}
            </Typography>
             <Typography variant="body2" paragraph sx={{ color: 'text.secondary' }}>
              <strong>{t('glossary.ascendant.term')}:</strong> {t('glossary.ascendant.definition')}
            </Typography>
          </Grid>

          {/* Links Section */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontFamily: 'Nanum Myeongjo', fontWeight: 'bold' }}>
              {t('footer.company')}
            </Typography>
            <Link to="/about" style={{ textDecoration: 'none', color: 'inherit' }}><Typography variant="body2" sx={{ mb: 1 }}>{t('footer.about')}</Typography></Link>
            <Link to="/contact" style={{ textDecoration: 'none', color: 'inherit' }}><Typography variant="body2">{t('footer.contact')}</Typography></Link>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontFamily: 'Nanum Myeongjo', fontWeight: 'bold' }}>
              {t('footer.legal')}
            </Typography>
            <Link to="/privacy-policy" style={{ textDecoration: 'none', color: 'inherit' }}><Typography variant="body2" sx={{ mb: 1 }}>{t('footer.privacy')}</Typography></Link>
            <Link to="/terms-of-service" style={{ textDecoration: 'none', color: 'inherit' }}><Typography variant="body2">{t('footer.terms')}</Typography></Link>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Box sx={{ mt: 4, pt: 2, borderTop: 1, borderColor: 'divider' }}>
            <Typography variant="body2" color="text.secondary" align="center">
            {'© '}{currentYear}{t('footer.copyright')}
            </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
