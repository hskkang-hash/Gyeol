
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, TextField, Button, Typography, Container } from '@mui/material';
import Logo from '../components/Logo';

function Login() {
    const navigate = useNavigate();
    const currentYear = new Date().getFullYear();
    const currentMonth = String(new Date().getMonth() + 1).padStart(2, '0');
    const currentDay = String(new Date().getDate()).padStart(2, '0');

    const handleLogin = () => {
        // Basic validation can be added here
        navigate('/home');
    };

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                }}
            >
                <Logo />
                <Typography component="h1" variant="h5" sx={{ mt: 2 }}>
                    Enter Your Birth Date
                </Typography>
                <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 3, width: '100%' }}>
                    <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
                        <TextField
                            name="year"
                            required
                            fullWidth
                            id="year"
                            label="Year"
                            placeholder={currentYear}
                            inputProps={{ maxLength: 4, style: { opacity: 0.7 } }}
                        />
                        <TextField
                            name="month"
                            required
                            fullWidth
                            id="month"
                            label="Month"
                            placeholder={currentMonth}
                            inputProps={{ maxLength: 2, style: { opacity: 0.7 } }}
                        />
                        <TextField
                            name="day"
                            required
                            fullWidth
                            id="day"
                            label="Day"
                            placeholder={currentDay}
                            inputProps={{ maxLength: 2, style: { opacity: 0.7 } }}
                        />
                    </Box>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ py: 1.5 }}
                    >
                        See My Gyeol
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}

export default Login;
