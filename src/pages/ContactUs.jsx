
import React from 'react';
import { Container, Typography, Box, Paper, TextField, Button } from '@mui/material';

const ContactUs = () => {
  return (
    <Container maxWidth="md">
      <Paper sx={{ p: { xs: 2, md: 4 }, mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body1" paragraph>
          Have questions or feedback? We'd love to hear from you. Fill out the form below and we will get back to you as soon as possible.
        </Typography>
        <Box component="form" noValidate autoComplete="off" sx={{ mt: 3 }}>
            <TextField
                required
                fullWidth
                id="name"
                label="Your Name"
                name="name"
                sx={{ mb: 2 }}
            />
            <TextField
                required
                fullWidth
                id="email"
                label="Your Email"
                name="email"
                type="email"
                 sx={{ mb: 2 }}
            />
            <TextField
                required
                fullWidth
                multiline
                rows={4}
                id="message"
                label="Your Message"
                name="message"
                 sx={{ mb: 2 }}
            />
            <Button
                type="submit"
                variant="contained"
                size="large"
            >
                Send Message
            </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default ContactUs;
