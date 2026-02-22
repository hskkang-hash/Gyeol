
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Button } from '@mui/material';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Box sx={{ position: 'absolute', top: 16, right: 16, zIndex: 1200 }}>
      <Button 
        variant={i18n.language === 'en' ? 'contained' : 'outlined'} 
        onClick={() => changeLanguage('en')} 
        size="small"
        sx={{ mr: 1 }}
      >
        EN
      </Button>
      <Button 
        variant={i18n.language === 'ko' ? 'contained' : 'outlined'} 
        onClick={() => changeLanguage('ko')} 
        size="small"
      >
        KO
      </Button>
    </Box>
  );
};

export default LanguageSwitcher;
