
import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';

const TermsOfService = () => {
  return (
    <Container maxWidth="md">
      <Paper sx={{ p: { xs: 2, md: 4 }, mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Terms of Service
        </Typography>
        <Typography variant="body1" paragraph>
          By accessing our application, Gyeol, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
        </Typography>
        <Typography variant="h6" component="h2" sx={{ mt: 3 }}>
          1. Use License
        </Typography>
        <Typography component="div" variant="body1" paragraph>
          <ul>
            <li>Permission is granted to temporarily download one copy of the materials (information or software) on Gyeol's website for personal, non-commercial transitory viewing only.</li>
            <li>This is the grant of a license, not a transfer of title, and under this license you may not:
              <ul>
                <li>modify or copy the materials;</li>
                <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                <li>attempt to decompile or reverse engineer any software contained on Gyeol's website;</li>
              </ul>
            </li>
            <li>This license shall automatically terminate if you violate any of these restrictions and may be terminated by Gyeol at any time.</li>
          </ul>
        </Typography>
        <Typography variant="h6" component="h2" sx={{ mt: 3 }}>
          2. Disclaimer
        </Typography>
        <Typography variant="body1" paragraph>
          The materials on Gyeol's website are provided on an 'as is' basis. The content provided is for entertainment purposes only. Gyeol makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
        </Typography>
        <Typography variant="h6" component="h2" sx={{ mt: 3 }}>
          3. Limitations
        </Typography>
        <Typography variant="body1" paragraph>
          In no event shall Gyeol or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Gyeol's website, even if Gyeol or a Gyeol authorized representative has been notified orally or in writing of the possibility of such damage.
        </Typography>
        <Typography variant="h6" component="h2" sx={{ mt: 3 }}>
          4. Governing Law
        </Typography>
        <Typography variant="body1" paragraph>
          These terms and conditions are governed by and construed in accordance with the laws of the Republic of Korea and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
        </Typography>
      </Paper>
    </Container>
  );
};

export default TermsOfService;
