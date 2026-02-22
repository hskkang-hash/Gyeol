
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import './Intro.css';

const Intro = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login');
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Box className="intro-container">
      <Typography variant="h1" className="intro-title">결</Typography>
      <Typography variant="h5" className="intro-subtitle">Gyeol</Typography>
    </Box>
  );
};

export default Intro;
