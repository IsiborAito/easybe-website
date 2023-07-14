import React from 'react';
import { Grid, Typography, Box, Stack } from '@mui/material';
import LinkButton from '../../utilities/LinkButton';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { EasyBeContext, IContextProps } from '../../utilities/context';

export interface ITemplate {
  firstImage?: string;
  firstTitle?: string;
  firstDesc?: string;
  secondTitle: string;
  secondDesc: string;
  secondImage?: string;
  thirdTitle: string;
  thirdDesc: string;
  thirdImage?: string;
}

const Template = ({
  firstImage,
  firstTitle,
  firstDesc,
  secondImage,
  secondTitle,
  secondDesc,
  thirdImage,
  thirdDesc,
  thirdTitle
}: ITemplate) => {
  const { isMobile } = React.useContext(EasyBeContext) as IContextProps;

  return (
    <Box sx={{ marginTop: '4rem' }}>
      <Grid
        container
        justifyContent={'space-around'}
        alignItems="center"
        p={'4rem'}
        spacing={2}
      >
        <Grid item md={4} sm={12} xs={12}>
          <Box
            sx={{
              height: '600px',
              width: '100%',
              backgroundColor: 'yellow'
            }}
          >
            First Image
          </Box>
        </Grid>
        <Grid item md={4} sm={12} xs={12}>
          <Stack spacing={2}>
            <Typography variant="h3" fontWeight={700} gutterBottom>
              {firstTitle}
            </Typography>
            <Typography variant="h6" fontWeight={300} gutterBottom>
              {firstDesc}
            </Typography>
            <LinkButton
              text="Get started"
              link="/contact-us"
              size="large"
              variant="contained"
              disableElevation
              sx={{
                backgroundColor: '#EE8434',
                width: { md: '50%', lg: '50%', sm: '100%', xs: '100%' },
                height: '3rem',
                '&:hover': {
                  backgroundColor: 'orange'
                }
              }}
            />
          </Stack>
        </Grid>
        <Grid item md={12} xs={12}>
          <div style={{ height: '80px' }} />
        </Grid>
      </Grid>
      <Box
        sx={{
          height: 'fit-content',
          backgroundColor: '#122C34',
          paddingTop: '8rem',
          paddingBottom: '8rem',
          paddingLeft: isMobile ? '3rem' : '0',
          paddingRight: isMobile ? '3rem' : '0'
        }}
      >
        <Grid
          container
          justifyContent="space-around"
          alignItems="center"
          spacing={3}
        >
          <Grid item md={4} sm={12} xs={12}>
            <Stack spacing={1}>
              <Typography
                variant="h4"
                fontWeight={700}
                gutterBottom
                color="primary.contrastText"
              >
                {secondTitle}
              </Typography>
              <Typography
                variant="h6"
                fontWeight={300}
                gutterBottom
                color="primary.contrastText"
              >
                {secondDesc}
              </Typography>
              <LinkButton
                link="/contact-us"
                text="Get in touch"
                variant="contained"
                size="large"
                color="secondary"
                icon={<ArrowForwardIcon />}
                disableElevation
                sx={{
                  height: '3rem',
                  width: { md: '50%', lg: '50%', sm: '100%', xs: '100%' }
                }}
              />
            </Stack>
          </Grid>
          <Grid item md={4} sm={12} xs={12}>
            <Box
              sx={{
                width: '100%',
                height: '600px',
                backgroundColor: '#D9D9D9'
              }}
            >
              Second Image
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Grid
        container
        justifyContent={'space-around'}
        alignItems="center"
        spacing={2}
        pt={'8rem'}
        pb={'8rem'}
        pl={isMobile ? '3rem' : '0'}
        pr={isMobile ? '3rem' : '0'}
      >
        <Grid item md={4} sm={12} xs={12}>
          <Stack spacing={2}>
            <Typography variant="h4" fontWeight={700} gutterBottom>
              {thirdTitle}
            </Typography>
            <Typography variant="h6" fontWeight={300} gutterBottom>
              {thirdDesc}
            </Typography>
            <LinkButton
              text="Contact us"
              link="/contact-us"
              size="large"
              variant="contained"
              disableElevation
              sx={{
                width: { md: '50%', lg: '50%', sm: '100%', xs: '100%' },
                backgroundColor: '#EE8434',
                height: '3rem',
                '&:hover': {
                  backgroundColor: 'orange'
                }
              }}
            />
          </Stack>
        </Grid>
        <Grid item md={4} sm={12} xs={12}>
          <Box
            sx={{
              width: '100%',
              height: '600px',
              backgroundColor: '#D9D9D9'
            }}
          >
            third Image
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Template;
