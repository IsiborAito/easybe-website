import React from 'react';
import { Link } from '@tanstack/react-location';
import { Grid, Button, Stack, Typography, Divider } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const firstSectionLinks = [
  {
    text: 'Software development',
    path: '/'
  },
  {
    text: 'Mobile app development',
    path: '/'
  },
  {
    text: 'Web app development',
    path: '/'
  },
  {
    text: 'Software support',
    path: '/'
  },
  {
    text: 'Staff augmentation',
    path: '/'
  },
  {
    text: 'Software outsourcing',
    path: '/'
  },
  {
    text: 'Development teams',
    path: '/'
  },
  {
    text: 'Our rates',
    path: '/contact-us'
  }
];

const secondSectionLinks = [
  {
    text: 'Services',
    path: '/'
  },
  {
    text: 'About us',
    path: '/about-us'
  },
  {
    text: 'Clients',
    path: '/clients'
  },
  {
    text: 'FAQs',
    path: '/'
  },
  {
    text: 'Legal policies',
    path: '/'
  },
  {
    text: 'Terms of use',
    path: '/'
  }
];

const Footer = () => {
  return (
    <div style={{ width: '100%', backgroundColor: '#F5F5F5' }}>
      <Grid
        container
        justifyContent={'space-between'}
        sx={{ padding: '4rem' }}
        spacing={4}
      >
        <Grid item md={3} sm={12}>
          <Stack spacing={2}>
            <img
              width="100%"
              height="80px"
              src="https://res.cloudinary.com/purenelle/image/upload/v1683388038/Easybe/easybe_logo_dark_tbiukr.png"
              alt="test"
            />
            <Typography variant="body1">
              Easybe is a custom software development company that designs,
              builds, deploys and maintains web and mobile applications, that
              help businesses and start-ups become prosperous.
            </Typography>
            <Button
              variant="contained"
              size="large"
              disableElevation
              sx={{
                backgroundColor: '#FFFD82',
                color: '#122C34',
                '&:hover': {
                  backgroundColor: '#E2E06E'
                }
              }}
            >
              Get Started
            </Button>
          </Stack>
        </Grid>
        <Grid item md={6} sm={12} container justifyContent={'space-between'}>
          <Stack spacing={2}>
            {firstSectionLinks.map((link) => (
              <Link
                key={link.text}
                to={link.path}
                style={{ textDecoration: 'none', color: 'black' }}
              >
                <Typography variant="body1">{link.text}</Typography>
              </Link>
            ))}
          </Stack>
          <Stack spacing={2}>
            {secondSectionLinks.map((link) => (
              <Link
                key={link.text}
                to={link.path}
                style={{ textDecoration: 'none', color: 'black' }}
              >
                <Typography>{link.text}</Typography>
              </Link>
            ))}
          </Stack>
          <Stack spacing={2}></Stack>
        </Grid>
        <Grid item md={12} sm={12}>
          <div style={{ height: '100px' }} />
        </Grid>
        <Grid item md={12} sm={12}>
          <Stack spacing={2}>
            <Divider variant="fullWidth" />
            <Stack
              direction={{ md: 'row', sm: 'column' }}
              justifyContent="space-between"
            >
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
