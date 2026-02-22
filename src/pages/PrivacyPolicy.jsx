
import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';

const PrivacyPolicy = () => {
  return (
    <Container maxWidth="md">
      <Paper sx={{ p: { xs: 2, md: 4 }, mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Privacy Policy
        </Typography>
        <Typography variant="body1" paragraph>
          Your privacy is important to us. It is Gyeol's policy to respect your privacy regarding any information we may collect from you across our website.
        </Typography>
        <Typography variant="h6" component="h2" sx={{ mt: 3 }}>
          1. Information We Collect
        </Typography>
        <Typography variant="body1" paragraph>
          We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. The primary piece of personal information we collect is your birth date and time, which is essential for our core service of providing astrological and energy analysis. We do not store this information permanently on our servers; it is processed in real-time to generate your forecast.
        </Typography>
        <Typography variant="h6" component="h2" sx={{ mt: 3 }}>
          2. How We Use Your Information
        </Typography>
        <Typography variant="body1" paragraph>
          We use the information we collect in order to generate personalized content, such as your daily 'Cosmic Forecast' and 'Life Energy Map'. We do not use this information for any other purpose.
        </Typography>
        <Typography variant="h6" component="h2" sx={{ mt: 3 }}>
          3. Security
        </Typography>
        <Typography variant="body1" paragraph>
          We are committed to protecting the data you provide. While no method of transmission over the Internet is 100% secure, we take reasonable precautions to protect your information from loss, misuse, and unauthorized access.
        </Typography>
         <Typography variant="h6" component="h2" sx={{ mt: 3 }}>
          4. Third-Party Services & Advertising
        </Typography>
        <Typography variant="body1" paragraph>
          We may use third-party services, such as Google AdSense, to display advertisements. These services may use cookies to collect information about your visits to this and other websites in order to provide relevant advertisements about goods and services of interest to you.
        </Typography>
        <Typography variant="h6" component="h2" sx={{ mt: 3 }}>
          Contact Us
        </Typography>
        <Typography variant="body1" paragraph>
          If you have any questions about our Privacy Policy, please feel free to contact us.
        </Typography>
      </Paper>
    </Container>
  );
};

export default PrivacyPolicy;
