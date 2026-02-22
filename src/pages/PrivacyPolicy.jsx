
import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';

const PrivacyPolicy = () => {
  return (
    <Container maxWidth="lg">
      <Paper sx={{ p: { xs: 2, md: 4 }, mt: 4, backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          Privacy Policy
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Last Updated: {new Date().toLocaleDateString()}
        </Typography>

        <Box sx={{ my: 2 }}>
          <Typography variant="h6" gutterBottom>1. Introduction</Typography>
          <Typography variant="body1" paragraph>
            Welcome to Gyeol (결). We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our application. Please read this policy carefully. If you do not agree with the terms of this privacy policy, please do not access the application.
          </Typography>
        </Box>

        <Box sx={{ my: 2 }}>
          <Typography variant="h6" gutterBottom>2. Information We Collect</Typography>
          <Typography variant="body1" paragraph>
            We may collect information about you in a variety of ways. The information we may collect via the Application includes:
          </Typography>
          <ul>
            <li>
              <Typography variant="body1"><b>Personal Data:</b> Personally identifiable information, such as your name, email address, and demographic information (like your date and time of birth for Saju calculations), that you voluntarily give to us when you register with the Application.</Typography>
            </li>
            <li>
              <Typography variant="body1"><b>Usage Data:</b> Information our servers automatically collect when you access the Application, such as your IP address, browser type, operating system, and the pages you have viewed.</Typography>
            </li>
          </ul>
        </Box>

        <Box sx={{ my: 2 }}>
          <Typography variant="h6" gutterBottom>3. Use of Your Information</Typography>
          <Typography variant="body1" paragraph>
            Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Application to:
          </Typography>
          <ul>
            <li><Typography variant="body1">Create and manage your account.</Typography></li>
            <li><Typography variant="body1">Generate your personal Gyeol Aura and Saju-based insights.</Typography></li>
            <li><Typography variant="body1">Display your profile and Gyeol-Sync score to other users you connect with.</Typography></li>
            <li><Typography variant="body1">Monitor and analyze usage and trends to improve your experience.</Typography></li>
            <li><Typography variant="body1">Notify you of updates to the Application.</Typography></li>
          </ul>
        </Box>

        <Box sx={{ my: 2 }}>
          <Typography variant="h6" gutterBottom>4. Third-Party Services & Advertising</Typography>
          <Typography variant="body1" paragraph>
            We may use third-party advertising companies, such as Google AdSense, to serve ads when you use the Application. These companies may use information about your visits to our Application and other websites that are contained in web cookies in order to provide advertisements about goods and services of interest to you. We will place a file known as ads.txt on our site to identify our authorized ad sellers.
          </Typography>
        </Box>

         <Box sx={{ my: 2 }}>
          <Typography variant="h6" gutterBottom>5. Security of Your Information</Typography>
          <Typography variant="body1" paragraph>
            We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
          </Typography>
        </Box>

        <Box sx={{ my: 2 }}>
          <Typography variant="h6" gutterBottom>6. Contact Us</Typography>
          <Typography variant="body1" paragraph>
            If you have questions or comments about this Privacy Policy, please contact us through the form on our <a href="/contact">Contact page</a>.
          </Typography>
        </Box>

      </Paper>
    </Container>
  );
};

export default PrivacyPolicy;
