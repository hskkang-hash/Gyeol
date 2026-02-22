
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Paper,
  Typography,
  Button,
  Box,
  Modal,
  Backdrop,
  Fade,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
  textAlign: 'center'
};

const PremiumServices = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const handleOpenModal = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);

  return (
    <Paper sx={{ p: 3, textAlign: 'center', backgroundColor: '#3a2d5c', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <WorkspacePremiumIcon sx={{ fontSize: 40, color: 'gold', mb: 1, mx: 'auto' }} />
      <Typography variant="h5" component="div" gutterBottom sx={{ fontWeight: 'bold', color: 'white' }}>
        {t('Gyeol Pass')}
      </Typography>
      <Typography variant="body2" sx={{ color: '#e0e0e0', mb: 3 }}>
        {t('Unlock the full potential of your relationships and daily life.')}
      </Typography>

      <Box sx={{ textAlign: 'left', color: 'white', mb: 3 }}>
          <List dense>
              <ListItem>
                  <ListItemIcon><CheckCircleOutlineIcon sx={{color: 'gold'}} /></ListItemIcon>
                  <ListItemText primary={t('Unlimited Gyeol-Chemistry Analysis')} />
              </ListItem>
              <ListItem>
                  <ListItemIcon><CheckCircleOutlineIcon sx={{color: 'gold'}} /></ListItemIcon>
                  <ListItemText primary={t('Ad-Free Experience')} />
              </ListItem>
              <ListItem>
                  <ListItemIcon><CheckCircleOutlineIcon sx={{color: 'gold'}} /></ListItemIcon>
                  <ListItemText primary={t('Detailed Insight Reports')} />
              </ListItem>
          </List>
      </Box>

      <Button
        variant="contained"
        size="large"
        onClick={handleOpenModal}
        sx={{ 
            mt: 'auto', 
            backgroundColor: 'gold', 
            color: 'black', 
            '&:hover': {backgroundColor: '#ffc107'} 
        }}
      >
        {t('Upgrade Now')}
      </Button>

      <Modal
        open={open}
        onClose={handleCloseModal}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={modalStyle}>
            <AutoAwesomeIcon sx={{ fontSize: 40, color: 'gold', mb: 2 }}/>
            <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold' }}>
              {t('Unlock Gyeol-Chemistry')}
            </Typography>
            <Typography sx={{ mt: 2, mb: 2 }}>
              {t('This is a Gyeol Pass exclusive feature. Upgrade now to get:')}
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon><CheckCircleOutlineIcon color="primary" /></ListItemIcon>
                <ListItemText primary={t('Unlimited relationship analyses')} />
              </ListItem>
              <ListItem>
                <ListItemIcon><CheckCircleOutlineIcon color="primary" /></ListItemIcon>
                <ListItemText primary={t('Detailed compatibility reports')} />
              </ListItem>
              <ListItem>
                <ListItemIcon><CheckCircleOutlineIcon color="primary" /></ListItemIcon>
                <ListItemText primary={t('A completely ad-free experience')} />
              </ListItem>
            </List>
            <Button variant="contained" size="large" fullWidth sx={{ mt: 2, backgroundColor: 'gold', color: 'black', '&:hover': {backgroundColor: '#ffc107'} }}>
                {t('Upgrade to Gyeol Pass')}
            </Button>
            <Button onClick={handleCloseModal} sx={{ mt: 1, color: 'text.secondary' }}>
                {t('Maybe later')}
            </Button>
          </Box>
        </Fade>
      </Modal>
    </Paper>
  );
};

export default PremiumServices;
