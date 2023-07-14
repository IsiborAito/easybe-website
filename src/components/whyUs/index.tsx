import React, { useContext } from 'react';
import { Grid, Typography, Stack, Box } from '@mui/material';
import CenterFocusStrongIcon from '@mui/icons-material/CenterFocusStrong';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { EasyBeContext, IContextProps } from '../../utilities/context';
import LinkButton from '../../utilities/LinkButton';

const WhyUs = () => {
  const { isMobile } = useContext(EasyBeContext) as IContextProps;

  return (
    <div style={{ marginTop: isMobile ? '4rem' : '8rem' }}>
      <Grid
        container
        justifyContent="space-between"
        alignItems="flex-start"
        sx={{ padding: isMobile ? '3rem' : '8rem' }}
        spacing={10}
      >
        <Grid item md={12} sx={{ order: { sm: 1, xs: 1 } }}>
          <Stack justifyContent="space-between" spacing={1}>
            <Typography variant="h4" fontWeight="700">
              At Easybe
            </Typography>
            <Typography variant="h5" gutterBottom fontWeight="300">
              We understand that choosing the right software development company{' '}
              <br />
              is a critical decision for your business. That's why we want to
              <br />
              share with you why partnering with us sets you on the path to
              success.
            </Typography>
          </Stack>
        </Grid>
        <Grid item md={5} sm={12} xs={12} sx={{ order: { sm: 2, xs: 2 } }}>
          <Box
            sx={{
              height: '30rem',
              width: '100%',
              backgroundColor: 'cornflowerblue'
            }}
          />
        </Grid>
        <Grid item md={5} sm={12} xs={12} sx={{ order: { sm: 4, xs: 4 } }}>
          <Box
            sx={{
              height: '30rem',
              width: '100%',
              backgroundColor: 'cornflowerblue'
            }}
          />
        </Grid>
        <Grid item md={5} sm={12} sx={{ order: { sm: 3, xs: 3 } }}>
          <Typography variant="h4" fontWeight="700">
            Tailored solutions for your Unique Needs <br />
            We believe that one size does not fit all. Our custom software
            solutions are designed to address your unique challenges and help
            you achieve your objectives efficiently and effectively.
          </Typography>
        </Grid>
        <Grid item md={5} sm={12} sx={{ order: { sm: 5, xs: 5 } }}>
          <Stack justifyContent={'space-between'} spacing={2}>
            <Typography variant="h6" fontWeight="300" gutterBottom>
              <strong>Quality and Reliability</strong>
              <br />
              We are committed to delivering software solutions of the highest
              quality. <br />
              Our rigorous development processes and quality assurance standards
              ensure that our deliverables meet the highest industry standards.
            </Typography>
            <Typography variant="h6" fontWeight="300" gutterBottom>
              <strong>Choosing Easybe</strong> as your custom software
              development partner means choosing a team that is dedicated to
              your success. <br />
              We are passionate about helping businesses like yours thrive in
              the digital landscape through innovative software solutions. Let
              us be your partner on this exciting journey.
            </Typography>
          </Stack>
        </Grid>
      </Grid>
      <Box
        sx={{
          backgroundColor: '#122C34',
          marginTop: '4rem',
          padding: isMobile ? '3rem' : '8rem'
        }}
      >
        <Grid
          container
          justifyContent="space-between"
          alignItems="flex-start"
          spacing={5}
        >
          <Grid item md={12} sm={12}>
            <Stack>
              <Typography variant="h6" fontWeight="700" color="white">
                EASYBE
              </Typography>
              <Typography variant="h4" fontWeight="700" color="white">
                Our values and principles
              </Typography>
              <Typography variant="h5" fontWeight="300" color="white">
                Building business solutions at Easybe <br />
                are driven by these values and principles
              </Typography>
            </Stack>
          </Grid>
          <Grid item md={12} sm={12}>
            <div style={{ height: isMobile ? '40px' : '100px' }} />
          </Grid>
          <Grid
            item
            md={12}
            sm={12}
            container
            justifyContent="space-bewteen"
            alignItems="flex-start"
            spacing={6}
          >
            <Grid item md={4} sm={12}>
              <Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="flex-start"
                  spacing={1}
                >
                  <CenterFocusStrongIcon
                    fontSize="large"
                    sx={{ color: 'white' }}
                  />
                  <Typography variant="h5" fontWeight="700" color="white">
                    Customer focus
                  </Typography>
                </Stack>
                <Typography variant="h5" fontWeight="300" color="white">
                  We prioritize our customers and their needs above everything
                  else.
                </Typography>
              </Stack>
            </Grid>
            <Grid item md={4} sm={12}></Grid>
            <Grid item md={4} sm={12}>
              <Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="flex-start"
                  spacing={1}
                >
                  <GroupWorkIcon fontSize="large" sx={{ color: 'white' }} />
                  <Typography variant="h5" fontWeight="700" color="white">
                    Teamwork
                  </Typography>
                </Stack>
                <Typography variant="h5" fontWeight="300" color="white">
                  We encourage open communication, mutual respect, and a
                  positive attitude towards one another.
                </Typography>
              </Stack>
            </Grid>
            <Grid item md={4} sm={12}>
              <Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="flex-start"
                  spacing={1}
                >
                  <TrendingUpIcon fontSize="large" sx={{ color: 'white' }} />
                  <Typography variant="h5" fontWeight="700" color="white">
                    Continuous Improvement
                  </Typography>
                </Stack>
                <Typography variant="h5" fontWeight="300" color="white">
                  We are committed to ongoing learning and development, and we
                  continuously seek to improve our skills, processes, and
                  services.
                </Typography>
              </Stack>
            </Grid>
            <Grid item md={4} sm={12} />
            <Grid item md={4} sm={12}>
              <Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="flex-start"
                  spacing={1}
                >
                  <CheckCircleIcon fontSize="large" sx={{ color: 'white' }} />
                  <Typography variant="h5" fontWeight="700" color="white">
                    Quality
                  </Typography>
                </Stack>
                <Typography variant="h5" fontWeight="300" color="white">
                  We are committed to delivering high-quality software solutions
                  that are reliable, scalable, and secure.
                </Typography>
              </Stack>
            </Grid>
            <Grid item md={12} sm={12}>
              <div style={{ height: '60px' }} />
            </Grid>
            <Grid
              item
              md={12}
              sm={12}
              container
              justifyContent="center"
              alignItems="center"
            >
              <LinkButton
                variant="contained"
                size="large"
                disableElevation
                color="secondary"
                icon={<ArrowForwardIcon />}
                sx={{
                  width: '240px',
                  height: '60px',
                  fontSize: '18px'
                }}
                link="/contact-us"
                text={'Reach out'}
              />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default WhyUs;
