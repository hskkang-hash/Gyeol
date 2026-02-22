
import React, { useState } from 'react';
import { Container, Typography, Box, Paper, TextField, Button, CircularProgress, Alert } from '@mui/material';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState({ type: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate a network request
    setTimeout(() => {
        setSubmitting(false);
        // Here you would typically handle form submission, e.g., send to an API endpoint.
        // For now, we'll just show a success message.
        if (name && email && message) {
            setFeedback({ type: 'success', message: 'Thank you for your message! We will get back to you shortly.' });
            setName('');
            setEmail('');
            setMessage('');
        } else {
             setFeedback({ type: 'error', message: 'Please fill out all fields before submitting.' });
        }
    }, 2000);
  };

  return (
    <Container maxWidth="sm">
      <Paper sx={{ p: { xs: 2, md: 4 }, mt: 4, backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center' }}>
          Contact Us
        </Typography>
        <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 4 }}>
          Have questions, feedback, or suggestions? We'd love to hear from you. Reach out to us, and we'll get back to you as soon as possible.
        </Typography>

        <Box component="form" onSubmit={handleSubmit} noValidate>
          <TextField
            fullWidth
            required
            margin="normal"
            id="name"
            label="Your Name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            fullWidth
            required
            margin="normal"
            id="email"
            label="Your Email Address"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            fullWidth
            required
            margin="normal"
            id="message"
            label="Your Message"
            name="message"
            multiline
            rows={6}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          {feedback.message && (
            <Alert severity={feedback.type} sx={{ mt: 2 }}>
              {feedback.message}
            </Alert>
          )}

          <Box sx={{ mt: 3, position: 'relative' }}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={submitting}
              size="large"
            >
              Send Message
            </Button>
            {submitting && (
              <CircularProgress
                size={24}
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  marginTop: '-12px',
                  marginLeft: '-12px',
                }}
              />
            )}
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default Contact;
