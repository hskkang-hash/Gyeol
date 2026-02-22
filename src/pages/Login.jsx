
import React from 'react';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Typography, Box } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';

function Login() {
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(() => {
        navigate('/dashboard');
      })
      .catch((error) => {
        console.error("Error during Google sign-in:", error);
      });
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 4 }}>
          Google 계정으로 로그인
        </Typography>
        <Button variant="contained" size="large" startIcon={<GoogleIcon />} onClick={handleGoogleLogin} sx={{ borderRadius: 8, px: 5, py: 2 }}>
          Google 로그인
        </Button>
      </Box>
    </Container>
  );
}

export default Login;
