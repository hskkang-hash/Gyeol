
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box, IconButton } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import LanguageSwitcher from './LanguageSwitcher';
import { ThemeContext } from '../contexts/themeContext';

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <AppBar position="static" color="transparent" elevation={0} sx={{ padding: '1rem 2rem' }}>
      <Toolbar>
        <Typography variant="h5" sx={{ flexGrow: 1, fontFamily: 'Nanum Myeongjo', fontWeight: 'bold' }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            결 (Gyeol)
          </Link>
        </Typography>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
            <Button color="inherit" component={Link} to="/" sx={{ fontFamily: 'Inter' }}>Home</Button>
            <Button color="inherit" component={Link} to="/about" sx={{ fontFamily: 'Inter' }}>About</Button>
            <Button color="inherit" component={Link} to="/contact" sx={{ fontFamily: 'Inter' }}>Contact</Button>
        </Box>
        <IconButton sx={{ ml: 1 }} onClick={toggleTheme} color="inherit">
          {theme === 'dark' ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
        <LanguageSwitcher />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
