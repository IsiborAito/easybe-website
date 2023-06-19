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
        sx={{ paddingLeft: '3rem', paddingRight: '3rem' }}
      >
        <Grid item md={4} sm={12}>
          <Stack spacing={3}>
            <Typography
              variant={'h6'}
              sx={{
                fontWeight: 700,
                fontSize: { sm: '16px', xs: '12px', md: '24px' }
              }}
            >
              Welcome to
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                fontSize: { sm: '32px', xs: '24px', md: '64px' }
              }}
            >
              Our Clients page
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                fontSize: { sm: '24px', xs: '14px', md: '36px' }
              }}
            >
              On this page you will find
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 400,
                fontSize: { sm: '18px', xs: '16px', md: '32px' }
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
                width: '50%',
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
        <Grid item md={3}>
          <Box
            sx={{ width: '600px', height: '600px', backgroundColor: 'gray' }}
          />
        </Grid>
        <Grid item md={12}>
          <div style={{ height: '60px' }} />
        </Grid>
      </Grid>
      <Box sx={{ backgroundColor: '#122C34', marginTop: '4rem', p: '8rem' }}>
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
