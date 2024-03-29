import React from 'react';
import { Link } from '@tanstack/react-location';
import { Grid, Stack, Typography, Divider } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LinkButton from '../../utilities/LinkButton';

const firstSectionLinks = [
  {
    text: 'Software development',
    path: '/software-development'
  },
  {
    text: 'Mobile app development',
    path: '/mobile-development'
  },
  {
    text: 'Web app development',
    path: '/web-development'
  },
  {
    text: 'Software maintenance',
    path: '/software-maintenance'
  },
  {
    text: 'Staff augmentation',
    path: '/staff-augmentation'
  },
  {
    text: 'Development teams',
    path: '/hire-development-teams'
  },
  {
    text: 'Cybersecurity consultancy',
    path: '/cybersecurity-consultancy'
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
        sx={{
          padding: {
            lg: '4rem 8rem 4rem 4rem',
            xs: '2rem 4rem 2rem 2rem',
            sm: '2rem 4rem 2rem 2rem'
          },
          paddingTop: {
            lg: '10rem',
            xs: '4rem',
            sm: '5rem',
            md: '6rem'
          }
        }}
        spacing={4}
      >
        <Grid item md={3} sm={12} xs={12}>
          <Stack spacing={2}>
            <img
              width="100%"
              height="auto"
              src="https://res.cloudinary.com/purenelle/image/upload/v1683388038/Easybe/easybe_logo_dark_tbiukr.png"
              alt="test"
            />
            <Typography variant="body1">
              Easybe is a custom software development company that designs,
              builds, deploys and maintains web and mobile applications, that
              help businesses and start-ups become prosperous.
            </Typography>
            <LinkButton
              variant="contained"
              size="large"
              disableElevation
              color="secondary"
              text="Get Started"
              link="/contact-us"
            />
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
        <Grid item md={12} sm={12} xs={12}>
          <Stack spacing={2}>
            <Divider variant="fullWidth" flexItem />
            <Stack
              direction={{ md: 'row', sm: 'column', xs: 'column' }}
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
