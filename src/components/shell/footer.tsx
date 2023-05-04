import React from 'react';
import { Grid, Button, Stack, Typography, Divider } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const firstSectionLinks = [
  {
    text: 'Software development'
  },
  {
    text: 'Mobile app development'
  },
  {
    text: 'Web app development'
  },
  {
    text: 'Software support'
  },
  {
    text: 'Staff augmentation'
  },
  {
    text: 'Software outsourcing'
  },
  {
    text: 'Development teams'
  },
  {
    text: 'Our rates'
  }
];

const secondSectionLinks = [
  {
    text: 'Services'
  },
  {
    text: 'Capabilities'
  },
  {
    text: 'About us'
  },
  {
    text: 'Clients'
  },
  {
    text: 'FAQs'
  },
  {
    text: 'Legal policies'
  },
  {
    text: 'Terms of use'
  }
];

const Footer = () => {
  return (
    <div style={{ width: '100%', backgroundColor: '#F5F5F5' }}>
      <Grid container justifyContent={'space-between'} sx={{ padding: '3rem' }}>
        <Grid item md={3}>
          <Stack spacing={2}>
            <img alt="test" />
            <Typography variant="body1">
              Easybe is a custom software development company that designs,
              builds, deploys and maintains web and mobile applications, that
              help businesses and start-ups become prosperous.
            </Typography>
            <Button
              variant="contained"
              size="large"
              disableElevation
              sx={{ backgroundColor: '#FFFD82', color: '#122C34' }}
            >
              Get Started
            </Button>
          </Stack>
        </Grid>
        <Grid item md={6} container justifyContent={'space-between'}>
          <Stack spacing={2}>
            {firstSectionLinks.map((link) => (
              <Typography variant="body1">{link.text}</Typography>
            ))}
          </Stack>
          <Stack spacing={2}>
            {secondSectionLinks.map((link) => (
              <Typography>{link.text}</Typography>
            ))}
          </Stack>
          <Stack spacing={2}></Stack>
        </Grid>
        <Grid item md={12}>
          <div style={{ width: '100%', height: '200px' }} />
        </Grid>
        <Grid item md={12}>
          <Stack spacing={2}>
            <Divider variant="middle" />
            <Stack direction="row" justifyContent="space-between">
              <Typography variant="body2">
                &#169;All rights reserved. Easybe 2023.
              </Typography>
              <Stack direction="row" spacing={1} alignItems="center">
                <FacebookIcon fontSize="large" />
                <LinkedInIcon fontSize="large" />
              </Stack>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
