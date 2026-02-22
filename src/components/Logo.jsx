
import React from 'react';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const StitchTypography = styled(Typography)(({ theme }) => ({
    fontSize: '6rem',
    fontWeight: 'bold',
    position: 'relative',
    color: theme.palette.text.primary,
    textShadow: `
        -1px -1px 0 ${theme.palette.background.default},  
         1px -1px 0 ${theme.palette.background.default},
        -1px  1px 0 ${theme.palette.background.default},
         1px  1px 0 ${theme.palette.background.default},
         -2px -2px 0 #ccc, 2px -2px 0 #ccc, -2px 2px 0 #ccc, 2px 2px 0 #ccc
    `,
    '&::before': {
        content: '""',
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '100%',
        height: '100%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        color: 'transparent',
        WebkitTextStroke: `1px ${theme.palette.mode === 'dark' ? '#555' : '#ddd'}`,
        textShadow: 'none',
        zIndex: -1,
    },
}));

function Logo() {
    return <StitchTypography>결</StitchTypography>;
}

export default Logo;
