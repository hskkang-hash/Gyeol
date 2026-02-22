
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Box, Paper, TextField, Button, Alert } from '@mui/material';

const Onboarding = () => {
  const navigate = useNavigate();
  const [birthDate, setBirthDate] = useState('');
  const [error, setError] = useState('');

  const handleSave = () => {
    // Basic validation
    if (!birthDate) {
      setError('Please enter your date of birth to continue.');
      return;
    }
    try {
        // More robust validation
        const date = new Date(birthDate);
        if (isNaN(date.getTime())) {
            setError('Invalid date format. Please use YYYY-MM-DD.');
            return;
        }

        // Save to localStorage
        localStorage.setItem('userBirthDate', birthDate);

        // Redirect to the main dashboard
        navigate('/');

    } catch {
        setError('An unexpected error occurred. Please try again.');
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper sx={{ p: { xs: 2, md: 4 }, mt: 8, textAlign: 'center', backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          Welcome to Gyeol
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
          To begin your journey, please enter your date of birth.
        </Typography>

        <Box sx={{ my: 2 }}>
          <TextField
            fullWidth
            id="birthDate"
            label="Date of Birth"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
          />
        </Box>

        {error && (
          <Alert severity="error" sx={{ mt: 2, mb: 2 }}>
            {error}
          </Alert>
        )}

        <Button
          variant="contained"
          size="large"
          onClick={handleSave}
          sx={{ mt: 2, px: 5, py: 1.5 }}
        >
          Save & See My Gyeol
        </Button>
      </Paper>
    </Container>
  );
};

export default Onboarding;
