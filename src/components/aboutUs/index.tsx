import React from 'react';
import { Grid, Typography, Button, Stack, Container } from '@mui/material';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';

const AboutUs = () => {
  return (
    <Container>
      <Grid container justifyContent="center" alignItems="center" spacing={2}>
        <Grid item md={6}>
          <Stack spacing={1}>
            <Typography variant="h3" sx={{ fontWeight: '700' }}>
              Easybe: Making business easy
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: '500' }}>
              Customized software that fits your business needs
            </Typography>
            <Typography variant="body1">
              Easybe is a software development company focused on creating
              custom software for clients. Easybe is able to meet the needs of
              vairous industries, with world-class teams with elite experience
              providing various software services.
            </Typography>
            <Button variant="contained" sx={{ width: '50%' }} disableElevation>
              Get Started
            </Button>
          </Stack>
        </Grid>
        <Grid item md={6}>
          <img
            src="https://res.cloudinary.com/purenelle/image/upload/v1681669545/Easybe/code_qimkv8.jpg"
            width="100%"
            alt="code picture"
          />
        </Grid>
        <Grid item md={12}></Grid>
        <Grid
          item
          md={12}
          container
          justifyContent={'space-around'}
          alignItems="center"
        >
          <Grid item md={8}>
            <Stack></Stack>
          </Grid>
          <Grid item md={4}>
            <Stack>
              <Typography variant="body2" sx={{ fontWeight: '600' }}>
                Building with us
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: '700' }}>
                The Easybe way of developing software
              </Typography>
              <Typography variant="subtitle1">
                Learn how we build before we work together
              </Typography>
              <Button
                variant="outlined"
                sx={{ width: '50%' }}
                startIcon={<ConnectWithoutContactIcon />}
              >
                Contact us
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutUs;
