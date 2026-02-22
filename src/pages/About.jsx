
import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';

const About = () => {
  return (
    <Container maxWidth="md">
      <Paper sx={{ p: { xs: 2, md: 4 }, mt: 4, backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center' }}>
          About Gyeol (결)
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 4 }}>
          Discovering the Unique Texture of Your Life
        </Typography>
        
        <Box sx={{ my: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: '600' }}>Our Philosophy</Typography>
          <Typography variant="body1" paragraph>
            In Korean, "Gyeol" (결) refers to the grain or texture of wood, the layers of a mountain ridge, or the subtle currents of wind and water. It represents a natural, flowing pattern—a unique fingerprint of existence. At Gyeol, we believe every individual has their own distinct life texture, a personal rhythm that shapes their day-to-day experiences, relationships, and well-being.
          </Typography>
          <Typography variant="body1" paragraph>
            Our mission is to help you see, understand, and harmonize with your personal Gyeol. We blend ancient Eastern wisdom, particularly the intricate system of Saju (사주), with modern data visualization and a global social platform. We don't just offer predictions; we provide a mirror to your inner world, empowering you to make conscious choices that align with your natural flow.
          </Typography>
        </Box>

        <Box sx={{ my: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: '600' }}>What We Offer</Typography>
          <Typography variant="body1" paragraph>
            <b>The Gyeol Aura:</b> A dynamic, visual representation of your daily energies. It’s not just a chart; it’s a piece of digital art that reflects your unique essence.
          </Typography>
          <Typography variant="body1" paragraph>
            <b>Gyeol-Sync:</b> Connect with others on a deeper level. Discover your daily compatibility with friends and colleagues, fostering more meaningful and timely interactions.
          </Typography>
          <Typography variant="body1" paragraph>
            <b>K-Vibe & Culture:</b> Immerse yourself in the rhythm of modern Korea with daily phrases and cultural insights that bring a fun, educational twist to your journey of self-discovery.
          </Typography>
        </Box>

        <Box sx={{ my: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: '600' }}>Our Team</Typography>
          <Typography variant="body1" paragraph>
            We are a passionate team of developers, designers, and Saju practitioners based in Seoul, dedicated to building a bridge between timeless wisdom and the digital age. We believe that technology can be a powerful tool for mindfulness and connection. We are committed to creating a platform that is not only beautiful and intuitive but also a genuine force for good in our users' lives.
          </Typography>
        </Box>

      </Paper>
    </Container>
  );
};

export default About;
