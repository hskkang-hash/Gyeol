
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Paper,
  Typography,
  Button,
  Box,
  TextField,
  Modal,
  Backdrop,
  Fade,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
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

const GyeolMatching = () => {
  const { t } = useTranslation();
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [open, setOpen] = useState(false);

  const handleOpenModal = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);

  return (
    <Paper sx={{ p: 3, textAlign: 'center', backgroundColor: 'rgba(255, 255, 255, 0.05)', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <AutoAwesomeIcon sx={{ fontSize: 40, color: 'primary.main', mb: 1, mx: 'auto' }} />
      <Typography variant="h5" component="div" gutterBottom sx={{ fontWeight: 'bold' }}>
        {t('Gyeol-Chemistry')}
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        {t('How compatible are you with someone else today? Analyze your chemistry with anyone.')}
      </Typography>

      <Box component="form" noValidate autoComplete="off" sx={{ mb: 2 }}>
        <TextField
          fullWidth
          margin="normal"
          id="partner-name"
          label={t('Their Name')}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          fullWidth
          margin="normal"
          id="partner-birthdate"
          label={t('Their Date of Birth')}
          type="date"
          InputLabelProps={{ shrink: true }}
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
        />
      </Box>

      <Button
        variant="contained"
        size="large"
        startIcon={<LockIcon />}
        onClick={handleOpenModal}
        sx={{ mt: 'auto' }}
      >
        {t('Analyze Chemistry')}
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

export default GyeolMatching;
