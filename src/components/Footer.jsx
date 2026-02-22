
import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Container } from '@mui/material';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box 
      component="footer" 
      sx={{ 
        py: 3, 
        px: 2, 
        mt: 'auto',
        backgroundColor: 'transparent',
        borderTop: '1px solid', 
        borderColor: 'divider'
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" align="center" sx={{ fontFamily: 'Inter' }}>
          {'© '}
          {currentYear}
          {' Gyeol. All rights reserved. '}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 1 }}>
            <Link to="/privacy-policy" style={{ textDecoration: 'none', color: 'inherit', fontFamily: 'Inter' }}>Privacy Policy</Link>
            <Link to="/terms-of-service" style={{ textDecoration: 'none', color: 'inherit', fontFamily: 'Inter' }}>Terms of Service</Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
