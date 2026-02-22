
import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
import { ThemeContext } from './contexts/themeContext';

// Page Imports
import Onboarding from './pages/Onboarding';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Home from './pages/Home';

// Component Imports
import Header from './components/Header';
import Footer from './components/Footer';
import Intro from './components/Intro';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#ffffff',
      paper: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: '"Inter", "Nanum Myeongjo", serif',
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    background: {
      default: '#1a1a1a',
      paper: '#2a2a2a',
    },
    text: {
        primary: '#ffffff',
        secondary: '#b0b0b0',
    }
  },
  typography: {
    fontFamily: '"Inter", "Nanum Myeongjo", serif',
    h4: { fontWeight: 700 },
    h5: { fontWeight: 600 },
    body1: { fontSize: '1.1rem' },
  },
});

function App() {
  const { theme } = useContext(ThemeContext);
  const activeTheme = theme === 'light' ? lightTheme : darkTheme;
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 4000); // Show intro for 4 seconds

    return () => clearTimeout(timer);
  }, []);

  if (showIntro) {
    return <Intro />;
  }

  return (
    <MuiThemeProvider theme={activeTheme}>
      <CssBaseline />
      <Router>
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }} className={`theme-${theme}`}>
            <Header />
            <Box component="main" sx={{ flexGrow: 1, py: 4, px: 2 }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/terms-of-service" element={<TermsOfService />} />
                    <Route path="/onboarding" element={<Onboarding />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
            </Box>
            <Footer />
        </Box>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
