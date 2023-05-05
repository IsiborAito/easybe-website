import { Button, Grid, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import React from 'react';

function Service() {
  return (
    <>
      <Grid
        container
        md={12}
        direction={'row'}
        mt={'50px'}
        p={'100px'}
        justifyContent={'space-between'}
      >
        <Grid item md={5.5} bgcolor={'grey'} p={'25px'}>
          Right hand side grid
        </Grid>

        <Grid item md={4} direction={'column'}>
          <Typography variant="h2" fontWeight={'700'}>
            Custom Software Development
          </Typography>
          <Typography variant="body1" pt={'50px'}>
            Lorem ipsum dolor sit amet consectetur. Sollicitudin justo et arcu
            condimentum faucibus aliquam justo in. Hendrerit mauris facilisi
            dolor fringilla orci. Tellus urna risus tortor est. Elementum tellus
            lectus malesuada blandit enim tellus nulla adipiscing pulvinar.
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#ee8434',
              boxShadow: 0,
              height: '70px',
              width: '190px',
              fontSize: '14px',
              marginBottom: '10px',
              marginTop: '30px'
            }}
          >
            Get Starter
          </Button>
        </Grid>
      </Grid>

      <Grid
        container
        bgcolor={'#122c34'}
        color={'white'}
        md={12}
        direction={'row'}
        mt={'50px'}
        p={'100px'}
        justifyContent={'space-between'}
      >
        <Grid item md={4} direction={'column'}>
          <Typography variant="h2" fontWeight={'700'}>
            About Easybe
          </Typography>
          <Typography variant="body1" pt={'50px'}>
            Lorem ipsum dolor sit amet consectetur. Sollicitudin justo et arcu
            condimentum faucibus aliquam justo in. Hendrerit mauris facilisi
            dolor fringilla orci. Tellus urna risus tortor est. Elementum tellus
            lectus malesuada blandit enim tellus nulla adipiscing pulvinar.
          </Typography>
        </Grid>

        <Grid
          container
          md={6}
          direction={'column'}
          spacing={2}
          justifyContent={'space-between'}
        >
          <Grid
            item
            container
            direction={'row'}
            justifyContent={'space-between'}
            height={'200px'}
          >
            <Grid
              bgcolor={'grey'}
              md={5.5}
              container
              justifyContent={'center'}
              alignItems={'center'}
            >
              grid left
            </Grid>
            <Grid
              bgcolor={'grey'}
              md={5.5}
              container
              justifyContent={'center'}
              alignItems={'center'}
            >
              grid right
            </Grid>
          </Grid>

          <Grid
            item
            container
            direction={'row'}
            justifyContent={'space-between'}
            height={'200px'}
            // border={'1px solid red'}
          >
            <Grid
              bgcolor={'grey'}
              md={5.5}
              container
              justifyContent={'center'}
              alignItems={'center'}
            >
              grid left
            </Grid>
            <Grid
              bgcolor={'grey'}
              md={5.5}
              container
              justifyContent={'center'}
              alignItems={'center'}
            >
              grid right
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        md={12}
        direction={'row'}
        mt={'50px'}
        p={'100px'}
        justifyContent={'space-between'}
      >
        <Grid item md={4} direction={'column'}>
          <Typography variant="h2" fontWeight={'700'}>
            About Easybe
          </Typography>
          <Typography variant="body1" pt={'50px'}>
            Lorem ipsum dolor sit amet consectetur. Sollicitudin justo et arcu
            condimentum faucibus aliquam justo in. Hendrerit mauris facilisi
            dolor fringilla orci. Tellus urna risus tortor est. Elementum tellus
            lectus malesuada blandit enim tellus nulla adipiscing pulvinar.
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#fffd82',
              boxShadow: 0,
              color: 'black',
              display: 'flex',
              flexDirection: 'row',
              marginTop: '35px',
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

        <Grid item md={4} bgcolor={'grey'} p={'25px'}>
          Right hand side grid
        </Grid>
      </Grid>
    </>
  );
}

export default Service;
