import { Box, Button, Grid, Typography } from '@mui/material';
import CenterFocusStrongIcon from '@mui/icons-material/CenterFocusStrong';
import GroupIcon from '@mui/icons-material/Group';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import React from 'react';

function WhyUs() {
  return (
    <>
      <Grid container md={12} direction={'column'} p={'90px'}>
        <Box sx={{ width: '50%' }}>
          <Typography
            variant="h2"
            fontWeight={700}
            sx={{
              fontSize: { sm: '35px', xs: '25px', md: '50px', lg: '60px' }
            }}
          >
            Sample Easybe Service
          </Typography>
          <Typography variant="body1" textAlign={'justify'} pt={'20px'}>
            Lorem ipsum dolor sit amet consectetur. Sollicitudin justo et arcu
            condimentum faucibus aliquam justo in. Hendrerit mauris facilisi
            dolor fringilla orci.
          </Typography>
        </Box>

        <Grid
          item
          container
          md={12}
          pt={'50px'}
          justifyContent={'space-between'}
        >
          <Grid item md={5.5} direction={'column'}>
            <Box
              sx={{
                width: '100%',
                height: '300px',
                bgcolor: 'grey',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {' '}
              Image Box
            </Box>
            <Typography variant="body1" pt={'25px'}>
              Lorem ipsum dolor sit amet consectetur. Sollicitudin justo et arcu
              condimentum faucibus aliquam justo in. Hendrerit mauris facilisi
              dolor fringilla orci. Lorem ipsum dolor sit amet consectetur.
              Sollicitudin justo et arcu condimentum faucibus aliquam justo in.
              Hendrerit mauris facilisi dolor fringilla orci. dolor fringilla
              orci. Lorem ipsum dolor sit amet consectetur. Sollicitudin justo
              et arcu condimentum faucibus aliquam justo in. Hendrerit mauris
              facilisi dolor fringilla orci. dolor fringilla orci. Lorem ipsum
              dolor sit amet consectetur. Sollicitudin justo et arcu condimentum
              faucibus aliquam justo in. Hendrerit mauris facilisi dolor
              fringilla orci.
            </Typography>
          </Grid>
          <Grid item md={5.5} direction={'column'}>
            <Box
              sx={{
                width: '100%',
                height: '300px',
                bgcolor: 'grey',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {' '}
              Image Box
            </Box>
            <Typography variant="body1" pt={'25px'}>
              Lorem ipsum dolor sit amet consectetur. Sollicitudin justo et arcu
              condimentum faucibus aliquam justo in. Hendrerit mauris facilisi
              dolor fringilla orci. Lorem ipsum dolor sit amet consectetur.
              Sollicitudin justo et arcu condimentum faucibus aliquam justo in.
              Hendrerit mauris facilisi dolor fringilla orci. dolor fringilla
              orci. Lorem ipsum dolor sit amet consectetur. Sollicitudin justo
              et arcu condimentum faucibus aliquam justo in. Hendrerit mauris
              facilisi dolor fringilla orci. dolor fringilla orci. Lorem ipsum
              dolor sit amet consectetur. Sollicitudin justo et arcu condimentum
              faucibus aliquam justo in. Hendrerit mauris facilisi dolor
              fringilla orci.
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        md={12}
        direction={'column'}
        bgcolor={'#122c34'}
        p={'100px'}
        color={'white'}
      >
        <Typography
          variant="h4"
          sx={{ fontSize: { sm: '15px', xs: '10px', md: '25px', lg: '30px' } }}
        >
          EasyBe
        </Typography>
        <Box sx={{ width: '50%' }}>
          <Typography
            variant="h2"
            fontWeight={700}
            pt={'10px'}
            sx={{
              fontSize: { sm: '30px', xs: '20px', md: '40px', lg: '60px' }
            }}
          >
            Our values and principles
          </Typography>
          <Typography
            variant="h5"
            textAlign={'justify'}
            pt={'10px'}
            sx={{ fontSize: { sm: '15px', xs: '10px' } }}
          >
            Building business solutions at Easybe are driven by these values and
            principles
          </Typography>
        </Box>

        <Grid
          direction={'row'}
          container
          item
          md={12}
          justifyContent={'space-between'}
          mt={'100px'}
        >
          <Grid item container md={4} direction={'column'}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              <CenterFocusStrongIcon
                sx={{
                  fontSize: { sm: '30px', xs: '20px', md: '40px', lg: '50px' }
                }}
              />
              <Typography
                variant="h4"
                sx={{
                  fontSize: { sm: '20px', xs: '15px', md: '30px', lg: '40px' }
                }}
              >
                Customer focus
              </Typography>
            </Box>
            <Typography
              variant="body1"
              fontWeight={'light'}
              sx={{ fontSize: { sm: '15px', xs: '10px' } }}
            >
              We prioritize our customers and their needs above everything else.
            </Typography>
          </Grid>

          <Grid container item md={4} direction={'column'}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: '10px',
                pt: { xs: '10px', sm: '20px', md: '20px', lg: '0px' }
              }}
            >
              <GroupIcon
                sx={{
                  fontSize: { sm: '30px', xs: '20px', md: '40px', lg: '50px' }
                }}
              />
              <Typography
                variant="h4"
                sx={{
                  fontSize: { sm: '20px', xs: '15px', md: '30px', lg: '40px' }
                }}
              >
                Teamwork
              </Typography>
            </Box>
            <Typography
              variant="body1"
              fontWeight={'light'}
              sx={{ fontSize: { sm: '15px', xs: '10px' } }}
            >
              We encourage open communication, mutual respect, and a positive
              attitude towards one another.
            </Typography>
          </Grid>
        </Grid>

        <Grid
          direction={'row'}
          container
          item
          md={12}
          justifyContent={'space-between'}
          mt={'100px'}
        >
          <Grid item container md={4} direction={'column'}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              <TrendingUpIcon
                sx={{
                  fontSize: { sm: '30px', xs: '20px', md: '40px', lg: '50px' }
                }}
              />
              <Typography
                variant="h4"
                sx={{
                  fontSize: { sm: '20px', xs: '15px', md: '30px', lg: '40px' }
                }}
              >
                Continuous Improvement
              </Typography>
            </Box>
            <Typography
              variant="body1"
              fontWeight={'light'}
              sx={{ fontSize: { sm: '15px', xs: '10px' } }}
            >
              We are committed to ongoing learning and development, and we
              continuously seek to improve our skills, processes, and services.
            </Typography>
          </Grid>
          <Grid container item md={4} direction={'column'}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: '10px',
                pt: { xs: '10px', sm: '20px', md: '20px', lg: '0px' }
              }}
            >
              <CheckCircleIcon
                sx={{
                  fontSize: { sm: '30px', xs: '20px', md: '40px', lg: '50px' }
                }}
              />
              <Typography
                variant="h4"
                sx={{
                  fontSize: { sm: '20px', xs: '15px', md: '30px', lg: '40px' }
                }}
              >
                Quality
              </Typography>
            </Box>
            <Typography
              variant="body1"
              fontWeight={'light'}
              sx={{ fontSize: { sm: '15px', xs: '10px' } }}
            >
              We are committed to delivering high-quality software solutions
              that are reliable, scalable, and secure.
            </Typography>
          </Grid>
        </Grid>

        <Grid m={'auto'} pt={'100px'}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#fffd82',
              boxShadow: 0,
              color: 'black',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              gap: { lg: '25px', md: '20px', sm: '15px', xs: '10px' },
              height: { xs: '50px', sm: '60px', md: '70px', lg: '80px' },
              width: { sm: '200px', xs: '130px', md: '250px', lg: '300px' },
              fontSize: { sm: '12px', xs: '10px', md: '18px', lg: '22px' }
            }}
          >
            Reach out
            <ArrowForwardIcon
              sx={{
                fontSize: { sm: '20px', xs: '18px', md: '30px', lg: '40px' }
              }}
            />
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default WhyUs;
