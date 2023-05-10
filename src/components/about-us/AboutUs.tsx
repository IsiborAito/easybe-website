import { Box, Button, ButtonBase, Grid, Typography } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import React from 'react';
import MessageIcon from '@mui/icons-material/Message';
import GroupIcon from '@mui/icons-material/Group';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

function AboutUs() {
  const dataImg = [
    {
      image: '/apple-logo.png',
      description:
        'Lorem ipsum dolor sit amet consectetur. Sollicitudin justo et arcu condimentum faucibus aliquam justo in. '
    },
    {
      image: '/aws-logo.png',
      description:
        'Lorem ipsum dolor sit amet consectetur. Sollicitudin justo et arcu condimentum faucibus aliquam justo in. '
    },
    {
      image: '/chrome-logo.png',
      description:
        'Lorem ipsum dolor sit amet consectetur. Sollicitudin justo et arcu condimentum faucibus aliquam justo in. '
    },
    {
      image: '/firefox.png',
      description:
        'Lorem ipsum dolor sit amet consectetur. Sollicitudin justo et arcu condimentum faucibus aliquam justo in. '
    },
    {
      image: '/graphQL-logo.png',
      description:
        'Lorem ipsum dolor sit amet consectetur. Sollicitudin justo et arcu condimentum faucibus aliquam justo in. '
    },
    {
      image: '/android-logo.png',
      description:
        'Lorem ipsum dolor sit amet consectetur. Sollicitudin justo et arcu condimentum faucibus aliquam justo in. '
    },
    {
      image: '/javascript-logo.png',
      description:
        'Lorem ipsum dolor sit amet consectetur. Sollicitudin justo et arcu condimentum faucibus aliquam justo in. '
    },
    {
      image: '/mysql-logo.png',
      description:
        'Lorem ipsum dolor sit amet consectetur. Sollicitudin justo et arcu condimentum faucibus aliquam justo in. '
    },
    {
      image: '/postgresql-logo.png',
      description:
        'Lorem ipsum dolor sit amet consectetur. Sollicitudin justo et arcu condimentum faucibus aliquam justo in. '
    }
  ];

  const slider = React.useRef<any>(null);

  const renderArrows = () => {
    return (
      <Box
        sx={{
          position: 'absolute',
          zIndex: 1,
          height: 'auto',
          width: '95%',
          top: '96rem'
          //   backgroundColor: 'chocolate'
        }}
      >
        <ButtonBase
          sx={{
            top: '30%',
            backgroundColor: '#FFFD82',
            float: 'left',
            height: '50px',
            width: '50px',
            borderRadius: '50%',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          onClick={() => slider.current?.slickPrev()}
        >
          <ArrowBackIosIcon />
        </ButtonBase>
        <ButtonBase
          sx={{
            top: '30%',
            float: 'right',
            backgroundColor: '#FFFD82',
            // color: 'white',
            height: '50px',
            width: '50px',
            borderRadius: '50%'
          }}
          onClick={() => slider.current?.slickNext()}
        >
          <ArrowForwardIosIcon />
        </ButtonBase>
      </Box>
    );
  };

  var settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    // centerPadding: '60px',
    slidesToShow: 3,
    slidesToScroll: 3,
    speed: 500,
    arrows: false,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          centerMode: true,
          centerPadding: '60px'
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

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
              backgroundColor: '#ee8434',
              boxShadow: 0,
              height: '70px',
              width: '190px',
              fontSize: '14px',
              marginBottom: '10px',
              marginTop: '30px'
            }}
          >
            Start a project
          </Button>
        </Grid>

        <Grid item md={4} bgcolor={'grey'} p={'25px'}>
          Right hand side grid
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
        <Grid item md={4} bgcolor={'grey'} p={'25px'}>
          Right hand side grid
        </Grid>

        <Grid item md={4} direction={'column'}>
          <Typography variant="h2" fontWeight={'700'}>
            What we do
          </Typography>
          <Typography variant="body1" pt={'10px'}>
            Lorem ipsum dolor sit amet consectetur. Sollicitudin justo et arcu
            condimentum faucibus aliquam justo in. Hendrerit mauris facilisi
            dolor fringilla orci. Tellus urna risus tortor est. Elementum tellus
            lectus malesuada blandit enim tellus nulla adipiscing pulvinar.
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        md={12}
        bgcolor={'#122c34'}
        direction={'column'}
        mt={'50px'}
        p={'100px'}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Typography variant="h3" fontWeight={700} color={'white'}>
          Our Services
        </Typography>
        {renderArrows()}
        <Grid
          sx={{
            width: '100%',
            p: { sm: '0px', xs: '0px', md: '10px', lg: '20px' },
            position: 'relative'
          }}
        >
          <Slider {...settings} ref={slider}>
            {dataImg.map((data) => (
              <>
                <Box
                  sx={{
                    height: { sm: '20%', md: '50%', lg: '400px' },
                    width: '95%',
                    backgroundColor: 'white',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <img
                    src={data.image}
                    height={'20%'}
                    width={'100%'}
                    alt=""
                    style={{ objectFit: 'contain' }}
                  />
                </Box>
                <Box sx={{ width: '80%', height: 'fit-content' }}>
                  <Typography
                    variant="body1"
                    textAlign={'start'}
                    pt={'10px'}
                    color={'white'}
                    sx={{ fontSize: { xs: '10px', sm: '10px', md: '15px' } }}
                  >
                    {data.description}
                  </Typography>
                </Box>
              </>
            ))}
          </Slider>
        </Grid>
      </Grid>

      <Grid
        container
        md={12}
        direction={'column'}
        alignItems={'center'}
        p={'80px'}
      >
        <Typography variant="h2" fontWeight={700}>
          Easybe’s development process
        </Typography>
        <Typography variant="h4" fontWeight={100} p={'10px'}>
          Learn our process before you reach out
        </Typography>

        <Grid item container direction={'row'} pt={'100px'}>
          <Grid item md={6} direction={'row'} p={'35px'}>
            <Box
              sx={{
                width: '80%',
                display: 'flex',
                flexDirection: 'row',
                gap: '10px'
              }}
            >
              <Grid>
                <MessageIcon sx={{ fontSize: '50px' }} />
              </Grid>
              <Grid>
                <Typography>
                  To get started with your software development project, simply
                  reach out to Easybe and we'll schedule a consultation to
                  discuss your requirements in detail.
                </Typography>
              </Grid>
            </Box>
          </Grid>
          <Grid item md={6} direction={'row'} p={'35px'}>
            <Box
              sx={{
                width: '80%',
                display: 'flex',
                flexDirection: 'row',
                gap: '10px',
                alignItems: 'right'
                // bgcolor: 'green',
                // pl: '50px'
              }}
            >
              <Grid>
                <GroupIcon sx={{ fontSize: '50px' }} />
              </Grid>
              <Grid>
                <Typography>
                  After agreeing on the project requirements and scope, we'll
                  introduce our team of skilled and experienced developers,
                  designers, project managers, and quality assurance specialists
                  who are passionate about delivering high-quality software
                  solutions.
                </Typography>
              </Grid>
            </Box>
          </Grid>
        </Grid>

        <Grid item container direction={'row'} pt={'50px'}>
          <Grid item md={6} direction={'row'} p={'35px'}>
            <Box
              sx={{
                width: '80%',
                display: 'flex',
                flexDirection: 'row',
                gap: '10px'
              }}
            >
              <Grid>
                <GroupWorkIcon sx={{ fontSize: '50px' }} />
              </Grid>
              <Grid>
                <Typography>
                  We'll collaborate closely with you to bring your ideas to life
                  and develop a custom software solution tailored to your
                  specific needs.
                </Typography>
              </Grid>
            </Box>
          </Grid>
          <Grid item md={6} direction={'row'} p={'35px'}>
            <Box
              sx={{
                width: '80%',
                display: 'flex',
                flexDirection: 'row',
                gap: '10px',
                alignItems: 'right'
              }}
            >
              <Grid>
                <AccessTimeFilledIcon sx={{ fontSize: '50px' }} />
              </Grid>
              <Grid>
                <Typography>
                  Once your project is completed, we'll deploy it to your
                  preferred platform and provide ongoing maintenance and support
                  to ensure its optimal performance and longevity.
                </Typography>
              </Grid>
            </Box>
          </Grid>
        </Grid>

        <Grid item pt={'100px'}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#fffd82',
              boxShadow: 0,
              color: 'black',
              height: { xs: '50px', sm: '60px', md: '70px', lg: '80px' },
              width: { sm: '200px', xs: '150px', md: '250px', lg: '300px' },
              fontSize: { sm: '12px', xs: '10px', md: '18px', lg: '22px' }
            }}
          >
            Contact us
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default AboutUs;
