
import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';

const TermsOfService = () => {
  return (
    <Container maxWidth="lg">
      <Paper sx={{ p: { xs: 2, md: 4 }, mt: 4, backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          Terms of Service
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Last Updated: {new Date().toLocaleDateString()}
        </Typography>

        <Box sx={{ my: 2 }}>
          <Typography variant="h6" gutterBottom>1. Acceptance of Terms</Typography>
          <Typography variant="body1" paragraph>
            By accessing and using the Gyeol (결) application ("Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use this Service.
          </Typography>
        </Box>

        <Box sx={{ my: 2 }}>
          <Typography variant="h6" gutterBottom>2. Description of Service</Typography>
          <Typography variant="body1" paragraph>
            The Service provides users with personalized daily insights based on Saju and biorhythms ("Free Service"). The Service may also offer enhanced features, such as advanced relationship analysis and an ad-free experience, under a subscription model ("Premium Service"). The Free Service may contain advertisements, including but not limited to those served by Google AdSense or Coupang Ads.
          </Typography>
        </Box>

        <Box sx={{ my: 2 }}>
          <Typography variant="h6" gutterBottom>3. User Registration and Data</Typography>
          <Typography variant="body1" paragraph>
            To use the core features of the Service, you must provide your date and time of birth. For Premium Services, you may be required to register for an account using methods like Google Login. You agree to provide accurate, current, and complete information and to keep this information up-to-date. Your data will be handled in accordance with our Privacy Policy.
          </Typography>
        </Box>

        <Box sx={{ my: 2 }}>
          <Typography variant="h6" gutterBottom>4. Intellectual Property</Typography>
          <Typography variant="body1" paragraph>
            The Service and its original content, features, and functionality are and will remain the exclusive property of Gyeol and its licensors. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Gyeol.
          </Typography>
        </Box>

        <Box sx={{ my: 2 }}>
          <Typography variant="h6" gutterBottom>5. Disclaimer of Warranties</Typography>
          <Typography variant="body1" paragraph>
            The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The use of the Service is at your own risk. The content provided is for entertainment purposes only and should not be considered as professional advice. We make no warranties that the Service will be uninterrupted, timely, secure, or error-free.
          </Typography>
        </Box>

        <Box sx={{ my: 2 }}>
          <Typography variant="h6" gutterBottom>6. Limitation of Liability</Typography>
          <Typography variant="body1" paragraph>
            In no event shall Gyeol, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
          </Typography>
        </Box>

        <Box sx={{ my: 2 }}>
          <Typography variant="h6" gutterBottom>7. Changes to Terms</Typography>
          <Typography variant="body1" paragraph>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide at least 30 days' notice prior to any new terms taking effect. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default TermsOfService;
