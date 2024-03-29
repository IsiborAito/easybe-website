import React from 'react';
import { Grid, Typography, Stack, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import ClientSide from './clientSlide';
import LinkButton from '../../utilities/LinkButton';

const ClientPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <div style={{ width: '100%', marginTop: '10rem', height: 'auto' }}>
      <Grid
        container
        justifyContent="space-around"
        alignItems="flex-start"
        spacing={isMobile ? 4 : 10}
        sx={{ paddingLeft: '2rem', paddingRight: '2rem' }}
      >
        <Grid item md={4} sm={12}>
          <Stack spacing={2}>
            <Typography
              variant={'h6'}
              sx={{
                fontWeight: 700
              }}
            >
              Welcome to
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700
              }}
            >
              Our Clients page
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700
              }}
            >
              On this page you will find
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 400
              }}
            >
              inspiring case studies that highlight our expertise in various
              industries and showcase the transformative impact our software
              solutions have had on our clients' businesses. Our team has
              tackled complex challenges and delivered cutting-edge software
              applications that exceed expectations.
            </Typography>

            <LinkButton
              text="Contact us"
              link="/contact-us"
              variant="contained"
              size="large"
              disableElevation
              sx={{
                textTransform: 'none',
                width: { lg: '50%', md: '50%', sm: '100%', xs: '100%' },
                height: '3rem',
                fontSize: '1.25rem',
                backgroundColor: '#EE8434',
                '&:hover': {
                  backgroundColor: '#BC855C'
                }
              }}
            />
          </Stack>
        </Grid>
        <Grid item md={3} sm={12} xs={12}>
          <Box
            sx={{ width: '100%', height: '600px', backgroundColor: 'gray' }}
          />
        </Grid>
        <Grid item md={12}>
          <div style={{ height: '60px' }} />
        </Grid>
      </Grid>
      <Box sx={{ backgroundColor: '#122C34', marginTop: '4rem', p: '4rem' }}>
        <ClientSide />
      </Box>
      <Box sx={{ height: '120px' }} />
      <div
        style={{
          height: 'auto',
          padding: isMobile ? '4rem' : '10rem'
        }}
      >
        <Typography
          align="center"
          variant="h4"
          sx={{
            fontSize: { sm: '24px', xs: '18px', md: '32px' }
          }}
        >
          We believe in building long-term relationships with our clients, and
          our commitment to quality, transparency, and continuous improvement
          sets us apart. Our clients' success is our success, and we take pride
          in helping businesses thrive in the digital landscape.
        </Typography>
      </div>
      <div style={{ height: '100px' }}></div>
    </div>
  );
};

export default ClientPage;
