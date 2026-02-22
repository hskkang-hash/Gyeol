
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <Box className="home-container">
      <Box className="hero-section">
        <Typography variant="h2" className="hero-title">Embrace the Flow</Typography>
        <Typography variant="h6" className="hero-subtitle">Discover the art of "Gyeol" - the natural grain and texture of life.</Typography>
        <Button variant="contained" color="primary" component={Link} to="/onboarding" sx={{ mt: 4, py: 1.5, px: 4, borderRadius: '2rem', fontWeight: 'bold' }}>
          Start Your Journey
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
