import React from 'react';
import { Grid, Typography, Button, Divider, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const ClientPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <div style={{ width: '100%', marginTop: '10rem', height: 'auto' }}>
      <Grid
        container
        justifyContent="center"
        alignItems="flex-start"
        spacing={isMobile ? 4 : 10}
        sx={{ paddingLeft: '3rem', paddingRight: '3rem' }}
      >
        <Grid item md={3} sm={12}>
          <Stack spacing={3}>
            <Stack spacing={0}>
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
                where we talk about the one client we have!
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 400,
                  fontSize: { sm: '18px', xs: '16px', md: '32px' }
                }}
              >
                Yes, you heard that right, we're a brand new custom software
                development company and we're proud to say that we have one
                happy client.
              </Typography>
            </Stack>
            <Stack>
              <Button
                variant="contained"
                size="large"
                disableElevation
                sx={{
                  textTransform: 'none',
                  width: '50%',
                  backgroundColor: '#EE8434',
                  '&:hover': {
                    backgroundColor: '#BC855C'
                  }
                }}
              >
                Contact us
              </Button>
            </Stack>
          </Stack>
        </Grid>
        <Grid item md={2} sm={12}></Grid>
        <Grid item md={4} sm={12}>
          <img
            src="https://res.cloudinary.com/purenelle/image/upload/v1683377352/Easybe/hero-foodbev_mmhmim.png"
            width="100%"
            alt="first"
          />
        </Grid>
        <Grid item md={12}>
          <div style={{ width: '100%', height: '100px' }}></div>
        </Grid>
        <Grid md={12}>
          <Divider variant="inset" />
        </Grid>
        <Grid item md={12}>
          <div style={{ width: '100%', height: '100px' }}></div>
        </Grid>
        <Grid item md={4}>
          <img
            src="https://res.cloudinary.com/purenelle/image/upload/v1683377352/Easybe/hero-foodbev_mmhmim.png"
            width="100%"
            alt="second"
          />
        </Grid>
        <Grid item md={2}></Grid>
        <Grid item md={3}>
          <Stack>
            <Typography
              align={isMobile ? 'left' : 'right'}
              variant="h6"
              sx={{
                fontWeight: 700,
                fontSize: { sm: '24px', xs: '14px', md: '36px' }
              }}
            >
              Foodbev seta
            </Typography>
            <Typography
              align={isMobile ? 'left' : 'right'}
              variant="h2"
              sx={{
                fontWeight: 700,
                fontSize: { sm: '32px', xs: '24px', md: '64px' }
              }}
            >
              ATLAS of
            </Typography>
            <Typography
              align={isMobile ? 'left' : 'right'}
              variant="h2"
              sx={{
                fontWeight: 700,
                fontSize: { sm: '32px', xs: '24px', md: '64px' }
              }}
            >
              Future Jobs
            </Typography>
            <Typography
              align={isMobile ? 'left' : 'right'}
              variant="h4"
              sx={{
                fontWeight: 400,
                fontSize: { sm: '18px', xs: '14px', md: '32px' }
              }}
            >
              Foodbev sets came with a problem, we were excited to address. Our
              team was able to deliver a solution to this problem.
            </Typography>
          </Stack>
        </Grid>
        <Grid item md={12}>
          <div style={{ width: '100%', height: '60px' }}></div>
        </Grid>
        <Grid item md={12}>
          <a
            href="https://futurejobs-foodbev.co.za/"
            target="_blank"
            rel="noopener"
            style={{ textDecoration: 'none', color: '#EE8434' }}
          >
            <Typography
              align="center"
              variant="h4"
              sx={{
                fontWeight: 700,
                fontSize: { sm: '18px', xs: '18px', md: '36px' }
              }}
            >
              Atlas website
            </Typography>
          </a>
        </Grid>
        <Grid item md={12}>
          <div style={{ width: '100%', height: '60px' }}></div>
        </Grid>
        <Grid item md={3}>
          <Stack>
            <Typography
              align={isMobile ? 'left' : 'right'}
              variant="h6"
              sx={{
                fontWeight: 700,
                fontSize: { sm: '18px', xs: '14px', md: '36px' }
              }}
            >
              Foodbev seta
            </Typography>
            <Typography
              align={isMobile ? 'left' : 'right'}
              variant="h2"
              sx={{
                fontWeight: 700,
                fontSize: { sm: '32px', xs: '24px', md: '64px' }
              }}
            >
              Entirely Satisfied with Our Work
            </Typography>
            <Typography
              align={isMobile ? 'left' : 'right'}
              variant="h4"
              sx={{
                fontWeight: 400,
                fontSize: { sm: '18px', xs: '14px', md: '32px' }
              }}
            >
              They loved our work and our willingness to accommodate all their
              requirements. They loved our work that they recommended us to
              their network.
            </Typography>
          </Stack>
        </Grid>
        <Grid item md={2}></Grid>
        <Grid item md={4}>
          <img
            width="100%"
            alt="third"
            src="https://res.cloudinary.com/purenelle/image/upload/v1683377352/Easybe/hero-foodbev_mmhmim.png"
          />
        </Grid>
        <Grid item md={12}>
          <div style={{ width: '100%', height: '100px' }}></div>
        </Grid>
      </Grid>
      <div
        style={{
          height: 'auto',
          padding: isMobile ? '4rem' : '10rem',
          backgroundColor: '#122C34'
        }}
      >
        <Typography
          align="center"
          variant="h4"
          sx={{
            color: 'white',
            fontSize: { sm: '24px', xs: '18px', md: '32px' }
          }}
        >
          We may only have one client to brag about at the moment, but we're
          confident that our work speaks for itself. Our commitment to quality,
          expertise, and customer satisfaction is what sets us apart from the
          rest. So if you're looking for a custom software solution that exceeds
          your expectations, look no further than Easybe. We'll be happy to add
          you to our growing list of satisfied clients.
        </Typography>
      </div>
      <div style={{ height: '100px' }}></div>
    </div>
  );
};

export default ClientPage;
