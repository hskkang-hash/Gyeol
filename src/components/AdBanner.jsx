
import React from 'react';
import { Paper, Typography, Box } from '@mui/material';

const AdBanner = () => {
  // In a real scenario, this would likely involve a script provided by Coupang Partners.
  // For this placeholder, we are creating a visually distinct banner.

  const handleClick = () => {
    // Redirect to a Coupang Partners link.
    // This URL would be your actual affiliate link.
    window.open('https://link.coupang.com/a/example', '_blank');
  };

  return (
    <Paper 
      elevation={3}
      onClick={handleClick}
      sx={{
        p: 2,
        mt: 4,
        mb: 4,
        backgroundColor: '#334155', // A distinct, premium-looking color
        border: '1px solid #475569',
        cursor: 'pointer',
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': {
          transform: 'translateY(-3px)',
          boxShadow: '0 4px 20px 0 rgba(0,0,0,0.3)',
        }
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Box>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#f1f5f9' }}>
                Special Recommendation
            </Typography>
            <Typography variant="body2" sx={{ color: '#cbd5e1' }}>
                Discover products that might interest you on Coupang!
            </Typography>
        </Box>
        <Typography 
          variant="button" 
          sx={{
            bgcolor: '#64748b',
            color: 'white',
            px: 2,
            py: 1,
            borderRadius: '12px',
          }}
        >
          Shop Now
        </Typography>
      </Box>
    </Paper>
  );
};

export default AdBanner;
