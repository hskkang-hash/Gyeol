
import React from 'react';
import { Box, Typography } from '@mui/material';
import './Intro.css';

const Intro = () => {
  return (
    <Box className="intro-container">
      <Typography variant="h1" className="intro-title">결</Typography>
      <Typography variant="h5" className="intro-subtitle">Gyeol</Typography>
    </Box>
  );
};

export default Intro;
