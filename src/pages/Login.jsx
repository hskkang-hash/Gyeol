
import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, TextField, Button, Typography, Container, Paper, Stepper, Step, StepLabel, LinearProgress, FormControl, InputLabel, Select, MenuItem, Grid } from '@mui/material';
import Logo from '../components/Logo';
import { Helmet } from 'react-helmet-async';

const steps = ['Identity', 'Birth Date', 'Birth Time'];

const getZodiacSign = (day, month) => {
  const signs = ["Capricorn", "Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius"];
  const dates = [20, 19, 21, 20, 21, 22, 23, 23, 23, 24, 22, 22];
  return month === 1 && day <= dates[0] ? signs[11] : signs[month - (day < dates[month - 1] ? 1 : 0)];
};

function Login() {
    const navigate = useNavigate();
    const [activeStep, setActiveStep] = useState(0);
    const [formData, setFormData] = useState({
        name: '',
        gender: '',
        year: '',
        month: '',
        day: '',
        hour: '',
        minute: '',
    });
    const [focusedField, setFocusedField] = useState('');

    const handleNext = () => setActiveStep((prev) => prev + 1);
    const handleBack = () => setActiveStep((prev) => prev - 1);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you would typically send the data to a server
        console.log('Form Data Submitted:', formData);
        navigate('/home');
    };
    
    const dynamicExplanation = useMemo(() => {
        switch(focusedField) {
            case 'year': return 'The year you were born in sets the foundational energy, influencing your generational characteristics and major life themes.';
            case 'month': return 'The month of birth governs your inner self, emotional landscape, and how you connect with your family and close community.';
            case 'day': return 'The day of birth sharpens the focus to your core personality, your immediate strengths, and day-to-day character.';
            case 'time': return 'The exact time of birth determines your Ascendant sign, which shapes your outward personality, how others perceive you, and your approach to new beginnings.';
            default: return 'Your birth data is the key to unlocking your unique Life Energy Map. Focus on a field to learn its meaning.';
        }
    }, [focusedField]);
    
    const birthDateInfo = useMemo(() => {
        const { year, month, day } = formData;
        if(year && month && day) {
            const date = new Date(year, month - 1, day);
            if(!isNaN(date)){
                 const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' });
                 const zodiac = getZodiacSign(parseInt(day), parseInt(month));
                 return `You were born on a ${dayOfWeek}, a vibrant ${zodiac}.`;
            }
        }
        return null;
    }, [formData.year, formData.month, formData.day]);

    const getStepContent = (step) => {
        switch (step) {
            case 0:
                return (
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField name="name" label="Your Name" value={formData.name} onChange={handleChange} fullWidth />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth>
                                <InputLabel>Gender</InputLabel>
                                <Select name="gender" value={formData.gender} label="Gender" onChange={handleChange}>
                                    <MenuItem value="male">Male</MenuItem>
                                    <MenuItem value="female">Female</MenuItem>
                                    <MenuItem value="other">Other</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                );
            case 1:
                return (
                     <Box onFocus={(e) => setFocusedField(e.target.name)} onBlur={() => setFocusedField('')}>
                        <Grid container spacing={2}>
                            <Grid item xs={4}><TextField name="year" label="Year" value={formData.year} onChange={handleChange} fullWidth placeholder="YYYY" /></Grid>
                            <Grid item xs={4}><TextField name="month" label="Month" value={formData.month} onChange={handleChange} fullWidth placeholder="MM"/></Grid>
                            <Grid item xs={4}><TextField name="day" label="Day" value={formData.day} onChange={handleChange} fullWidth placeholder="DD"/></Grid>
                        </Grid>
                        {birthDateInfo && <Typography variant="body2" sx={{ mt: 2, color: 'primary.main', textAlign: 'center', fontWeight:'bold' }}>{birthDateInfo}</Typography>}
                    </Box>
                );
            case 2:
                return (
                    <Box onFocus={() => setFocusedField('time')} onBlur={() => setFocusedField('')}>
                        <Grid container spacing={2}>
                            <Grid item xs={6}><TextField name="hour" label="Hour" value={formData.hour} onChange={handleChange} fullWidth placeholder="HH"/></Grid>
                            <Grid item xs={6}><TextField name="minute" label="Minute" value={formData.minute} onChange={handleChange} fullWidth placeholder="MM"/></Grid>
                        </Grid>
                     </Box>
                );
            default:
                return 'Unknown step';
        }
    };

    return (
        <Container component="main" maxWidth="sm" sx={{ my: 4 }}>
             <Helmet>
                <title>Onboarding - Gyeol</title>
                <meta name="description" content="Enter your birth details to begin your journey of self-discovery and unlock your cosmic forecast." />
            </Helmet>
            <Paper 
                elevation={4} 
                sx={{
                    p: { xs: 2, md: 4 },
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    background: 'rgba(10, 25, 41, 0.8)', // Deep blue with transparency
                    backdropFilter: 'blur(10px)',
                    borderRadius: 2,
                    border: '1px solid', 
                    borderColor: 'rgba(211, 179, 106, 0.3)', // Gold border
                    color: 'white'
                }}
            >
                <Logo color="white" />
                <Typography component="h1" variant="h5" sx={{ mt: 2, color: '#D3B36A' /* Gold */ }}>
                    Unlock Your Cosmic Blueprint
                </Typography>
                
                <Box sx={{ width: '100%', my: 4 }}>
                    <Stepper activeStep={activeStep} alternativeLabel>
                        {steps.map((label) => (
                            <Step key={label} sx={{ '& .MuiStepLabel-root .Mui-active': { color: '#D3B36A' }, '& .MuiStepLabel-root .Mui-completed': { color: '#D3B36A' } }}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    <LinearProgress variant="determinate" value={(activeStep / steps.length) * 100} sx={{ mt: 2, '& .MuiLinearProgress-bar': { backgroundColor: '#D3B36A' } }} />
                </Box>

                <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
                    {getStepContent(activeStep)}
                    
                    <Box sx={{ height: '60px', mt: 3, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                       <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.7)', textAlign: 'center', fontStyle: 'italic'}}>{dynamicExplanation}</Typography>
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
                        <Button disabled={activeStep === 0} onClick={handleBack} sx={{ color: 'white' }}>
                            Back
                        </Button>
                        {activeStep === steps.length - 1 ? (
                            <Button type="submit" variant="contained" sx={{ backgroundColor: '#D3B36A', '&:hover': { backgroundColor: '#b89b5b' } }}>
                                See My Cosmic Forecast
                            </Button>
                        ) : (
                            <Button variant="contained" onClick={handleNext} sx={{ backgroundColor: '#D3B36A', '&:hover': { backgroundColor: '#b89b5b' } }}>
                                Next
                            </Button>
                        )}
                    </Box>
                </Box>
            </Paper>
        </Container>
    );
}

export default Login;
