/* eslint-disable no-lone-blocks */
import {
  Box,
  Button,
  styled,
  Grid,
  Typography,
  Tabs,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Link
} from '@mui/material';
import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import GroupIcon from '@mui/icons-material/Group';
import LaptopIcon from '@mui/icons-material/Laptop';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import required modules

{
  /* Hero section styling start*/
}
const MainDiv = styled(Box)(({ theme }) => ({
  height: 'fit-content',
  backgroundColor: ' #122c34',
  padding: '8rem',
  position: 'relative',
  color: 'white',
  display: 'flex',
  flexDirection: 'row',
  fontFamily: 'Space Grotesk, sans-serif',
  fontWeight: 'bold',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  [theme.breakpoints.down('lg')]: {
    flexDirection: 'column',
    gap: 5
  },
  [theme.breakpoints.down('sm')]: {
    padding: '1rem'
  }
}));

const TextBox = styled(Box)(({ theme }) => ({
  width: '50%',
  height: 'fit-content',
  // backgroundColor: '#1ff',
  position: 'relative',
  color: 'white',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  alignItems: 'flex-start',
  marginBottom: '10px',
  [theme.breakpoints.down('lg')]: {
    marginTop: '15px',
    fontSize: '15px'
  },
  [theme.breakpoints.down('md')]: {
    marginTop: '15px'
    // fontSize: '15px'
  }
}));
const ImageBox = styled(Box)(({ theme }) => ({
  width: '40%',
  height: '600px',
  backgroundColor: '#aaff',
  position: 'relative',
  color: 'white',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  marginBottom: '10px',
  [theme.breakpoints.down('lg')]: {
    flexDirection: 'column',
    height: '300px',
    width: '50%',
    marginBottom: '10px'
  }
})); /* Hero section styling end*/

const Home = () => {
  const [selectedTab, setselectedTab] = React.useState(0);

  const handleChange = (val: number) => {
    setselectedTab(val);
  };

  const dataImg = [
    '/apple-logo.png',
    '/android-logo.png',
    '/aws-logo.png',
    '/chrome-logo.png',
    '/firefox.png',
    '/graphQL-logo.png',
    '/javascript-logo.png',
    '/mysql-logo.png',
    '/postgresql-logo.png'
  ];

  var settings = {
    // isFinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 9000,
    pauseOnHover: true,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          pauseOnHover: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          pauseOnHover: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          pauseOnHover: true
        }
      }
    ]
  };

  return (
    <>
      {/* Hero  section*/}
      <MainDiv>
        <TextBox>
          <Typography variant="h2" sx={{ fontWeight: 700 }}>
            Transform your business with custom software
          </Typography>
          <Typography
            variant="subtitle2"
            fontSize={'30px'}
            paddingTop={' 3.5rem'}
            paddingBottom={' 3.5rem'}
          >
            Easybe : The easy choice for custom software
          </Typography>
          <Box
            sx={{
              lineHeight: 2,
              fontFamily: 'Space Grotesk, sans-serif',
              textAlign: 'start',
              height: 'fit-content',
              width: { sm: '70%', md: '85%', lg: '85%' },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-evenly',
              alignItems: 'flex-start',
              marginTop: '30px',
              fontWeight: 'light',
              letterSpacing: 1.5
            }}
          >
            With our innovative and tailored solutions, we can help take your
            business to the next level. At Easybe, we understand that every
            business has unique needs and challenges, which is why we work
            closely with our clients to create software that meets their
            specific requirements.
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#ee8434',
                boxShadow: 0,
                height: '70px',
                width: '190px',
                fontSize: '22px',
                marginBottom: '10px',
                marginTop: '30px'
              }}
            >
              Get Started
            </Button>
          </Box>
        </TextBox>
        <ImageBox>Box 2</ImageBox>
      </MainDiv>

      {/* Proficient in a range of software development technologies */}
      <Grid
        container
        md={12}
        direction={'column'}
        alignItems={'center'}
        p={'100px'}
      >
        <Typography variant="h4">
          Proficient in a range of software development technologies
        </Typography>

        <Grid sx={{ width: '100%', p: '50px', position: 'relative' }}>
          <Slider {...settings}>
            {dataImg.map((data) => (
              <Box sx={{}}>
                <Box
                  sx={{
                    backgroundColor: '#f2c6a4',
                    width: { lg: '100px', md: '50px', sm: '40px', xs: '40px' },
                    height: {
                      lg: '100px',
                      md: '50px',
                      sm: '40px',
                      xs: '40px'
                    },
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '50%'
                  }}
                >
                  <img
                    src={data}
                    height="40%"
                    width={'100%'}
                    alt=""
                    style={{ objectFit: 'contain' }}
                  />
                </Box>
              </Box>
            ))}
          </Slider>
        </Grid>

        <Grid item>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#FFFD82',
              boxShadow: 0,
              height: { sm: '50px', md: '60px', lg: '70px' },
              width: { sm: '100px', md: '150px', lg: '190px' },
              fontSize: { sm: '10px', md: '15px', lg: '22px' },
              marginBottom: '10px',
              marginTop: '30px'
            }}
          >
            Get Started
          </Button>
        </Grid>
      </Grid>

      {/* Why Choose Easybe? */}
      <Grid
        container
        md={12}
        direction={'column'}
        justifyContent={'space-evenly'}
        alignItems={'center'}
        bgcolor={'#122c34'}
        color={'white'}
      >
        <Typography variant="h5" p={'50px'} color={'#FFFD82'}>
          Why Choose Easybe?
        </Typography>

        <Grid
          item
          container
          direction={{ sm: 'column', xs: 'column', md: 'row' }}
          md={12}
          justifyContent={'space-around'}
          p={'50px'}
        >
          <Grid item md={4}>
            <Typography variant="h3">
              Easybe tailors software solutions to meet your business needs
            </Typography>
          </Grid>
          <Divider
            sx={{ backgroundColor: 'white' }}
            orientation="vertical"
            flexItem
          />
          <Grid item md={6}>
            <Typography variant="body1" margin={'auto'}>
              Lorem ipsum dolor sit amet consectetur. Dis nisi et fames
              pellentesque urna feugiat in vestibulum. <br /> <br />
              Lorem ipsum dolor sit amet consectetur. Dis nisi et fames
              pellentesque urna feugiat in vestibulum.
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      {/* OUR expert SERVICES Section */}
      <Grid
        direction={'column'}
        md={12}
        container
        justifyContent={'space-between'}
        sm={12}
        alignItems={{
          md: 'center',
          sm: 'flex-start',
          xs: 'flex-start',
          lg: 'center'
        }}
        sx={{
          width: '100%',
          backgroundColor: 'white',
          color: 'black',
          padding: { sm: '2rem', xs: '2rem', md: '8rem', lg: '8rem' }
        }}
      >
        <Typography marginBottom={3} variant="h5">
          OUR Expert SERVICES
        </Typography>
        <Typography variant="h1" marginBottom={10}>
          Custom solutions with SovTech
        </Typography>
        <Grid
          direction={'row'}
          item
          container
          md={12}
          sx={{ width: { sm: '100%', xs: '100%' } }}
        >
          <Grid item md={3}>
            <Tabs
              orientation="vertical"
              value={selectedTab}
              sx={{
                width: '300px',
                '& .MuiTabs-indicator': { display: 'none' }
              }}
            >
              <Button
                onClick={() => handleChange(0)}
                variant="text"
                sx={{
                  // backgroundColor: '#3f4c64',
                  color: 'black',
                  boxShadow: 0,
                  height: '70px',
                  width: {
                    sm: '140px',
                    xs: '140px',
                    md: '140px',
                    lg: '284px'
                  },
                  borderBottom: selectedTab === 0 ? '2px solid black' : '',
                  m: '10px',
                  fontWeight: 'bold',
                  fontSize: '18px'
                }}
              >
                <Typography
                  sx={{
                    fontSize: {
                      sm: '10px',
                      xs: '10px',
                      md: '10px',
                      lg: '18px'
                    }
                  }}
                >
                  Mobile App Development
                </Typography>
              </Button>

              <Button
                onClick={() => handleChange(1)}
                variant="text"
                sx={{
                  // backgroundColor: '#3f4c64',
                  color: 'black',
                  boxShadow: 0,
                  height: '70px',
                  width: {
                    sm: '140px',
                    xs: '140px',
                    md: '140px',
                    lg: '284px'
                  },
                  borderBottom: selectedTab === 1 ? '2px solid black' : '',
                  m: '10px',
                  fontWeight: 'bold'
                }}
              >
                <Typography
                  sx={{
                    fontSize: {
                      sm: '10px',
                      xs: '10px',
                      md: '10px',
                      lg: '18px'
                    }
                  }}
                >
                  Web App Development
                </Typography>
              </Button>

              <Button
                onClick={() => handleChange(2)}
                variant="text"
                sx={{
                  // backgroundColor: '#3f4c64',
                  color: 'black',
                  boxShadow: 0,
                  height: '70px',
                  width: {
                    sm: '140px',
                    xs: '140px',
                    md: '140px',
                    lg: '284px'
                  },
                  borderBottom: selectedTab === 2 ? '2px solid black' : '',
                  m: '10px',
                  fontWeight: 'bold',
                  fontSize: '18px'
                }}
              >
                <Typography
                  sx={{
                    fontSize: {
                      sm: '10px',
                      xs: '10px',
                      md: '10px',
                      lg: '18px'
                    }
                  }}
                >
                  Software Development
                </Typography>
              </Button>

              <Button
                onClick={() => handleChange(3)}
                variant="text"
                sx={{
                  // backgroundColor: '#3f4c64',
                  color: 'black',
                  boxShadow: 0,
                  height: '70px',
                  m: '10px',
                  width: {
                    sm: '140px',
                    xs: '140px',
                    md: '140px',
                    lg: '284px'
                  },
                  borderBottom: selectedTab === 3 ? '2px solid black' : '',
                  fontWeight: 'bold',
                  fontSize: '18px'
                }}
              >
                <Typography
                  sx={{
                    fontSize: {
                      sm: '10px',
                      xs: '10px',
                      md: '10px',
                      lg: '18px'
                    }
                  }}
                >
                  Software Maintenance
                </Typography>
              </Button>

              <Button
                variant="text"
                onClick={() => handleChange(4)}
                sx={{
                  // backgroundColor: '#3f4c64',
                  color: 'black',
                  boxShadow: 0,
                  height: '70px',
                  m: '10px',
                  width: {
                    sm: '140px',
                    xs: '140px',
                    md: '140px',
                    lg: '284px'
                  },
                  borderBottom: selectedTab === 4 ? '2px solid black' : '',
                  fontWeight: 'bold',
                  fontSize: '18px'
                }}
              >
                <Typography
                  sx={{
                    fontSize: {
                      sm: '10px',
                      xs: '10px',
                      md: '10px',
                      lg: '18px'
                    }
                  }}
                >
                  Technology Consultants
                </Typography>
              </Button>
            </Tabs>
          </Grid>

          {selectedTab === 0 && (
            <Grid
              item
              container
              md={9}
              justifyContent={'space-around'}
              direction={'row'}
            >
              <Divider
                sx={{ backgroundColor: 'black' }}
                orientation="vertical"
                flexItem
              />
              <Box
                sx={{
                  backgroundColor: 'red',
                  margin: 'auto',
                  height: '100%',
                  width: 'auto',
                  borderRadius: '25px'
                }}
              >
                <img
                  src="/logo512.png"
                  alt=""
                  height={'100%'}
                  width={'auto'}
                  style={{ objectFit: 'contain' }}
                />
              </Box>

              <Grid item container direction={'column'} md={6}>
                <Typography
                  fontWeight={700}
                  m={{ sm: 2, xs: 2, md: 5 }}
                  color={'#2868ff'}
                >
                  OUR SERVICES
                </Typography>
                <Typography variant="h4" m={{ sm: 2, xs: 2, md: 3, lg: 3 }}>
                  Custom Software Development
                </Typography>
                <Typography variant="body1" m={{ sm: 2, xs: 2, md: 5, lg: 5 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut
                </Typography>
              </Grid>
            </Grid>
          )}
          {selectedTab === 1 && (
            <Grid
              item
              container
              md={9}
              justifyContent={'space-around'}
              direction={'row'}
            >
              <Divider
                sx={{ backgroundColor: 'black' }}
                orientation="vertical"
                flexItem
              />
              <Box
                sx={{
                  backgroundColor: 'Green',
                  margin: 'auto',
                  height: '100%',
                  width: 'auto',
                  borderRadius: '25px'
                }}
              >
                <img
                  src="/logo512.png"
                  alt=""
                  height={'100%'}
                  width={'auto'}
                  style={{ objectFit: 'contain' }}
                />
              </Box>

              <Grid item container direction={'column'} md={6}>
                <Typography
                  fontWeight={700}
                  m={{ sm: 2, xs: 2, md: 5 }}
                  color={'#2868ff'}
                >
                  OUR SERVICES
                </Typography>
                <Typography variant="h4" m={{ sm: 2, xs: 2, md: 3, lg: 3 }}>
                  Custom Software Development
                </Typography>
                <Typography variant="body1" m={{ sm: 2, xs: 2, md: 5, lg: 5 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut
                </Typography>
              </Grid>
            </Grid>
          )}
          {selectedTab === 2 && (
            <Grid
              item
              container
              md={9}
              justifyContent={'space-around'}
              direction={'row'}
            >
              <Divider
                sx={{ backgroundColor: 'black' }}
                orientation="vertical"
                flexItem
              />
              <Box
                sx={{
                  backgroundColor: 'grey',
                  margin: 'auto',
                  height: '100%',
                  width: 'auto',
                  borderRadius: '25px'
                }}
              >
                <img
                  src="/logo512.png"
                  alt=""
                  height={'100%'}
                  width={'auto'}
                  style={{ objectFit: 'contain' }}
                />
              </Box>

              <Grid item container direction={'column'} md={6}>
                <Typography
                  fontWeight={700}
                  m={{ sm: 2, xs: 2, md: 5 }}
                  color={'#2868ff'}
                >
                  OUR SERVICES
                </Typography>
                <Typography variant="h4" m={{ sm: 2, xs: 2, md: 3, lg: 3 }}>
                  Custom Software Development
                </Typography>
                <Typography variant="body1" m={{ sm: 2, xs: 2, md: 5, lg: 5 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut
                </Typography>
              </Grid>
            </Grid>
          )}
          {selectedTab === 3 && (
            <Grid
              item
              container
              md={9}
              justifyContent={'space-around'}
              direction={'row'}
            >
              <Divider
                sx={{ backgroundColor: 'black' }}
                orientation="vertical"
                flexItem
              />
              <Box
                sx={{
                  backgroundColor: 'blue',
                  margin: 'auto',
                  height: '100%',
                  width: 'auto',
                  borderRadius: '25px'
                }}
              >
                <img
                  src="/logo512.png"
                  alt=""
                  height={'100%'}
                  width={'auto'}
                  style={{ objectFit: 'contain' }}
                />
              </Box>

              <Grid item container direction={'column'} md={6}>
                <Typography
                  fontWeight={700}
                  m={{ sm: 2, xs: 2, md: 5 }}
                  color={'#2868ff'}
                >
                  OUR SERVICES
                </Typography>
                <Typography variant="h4" m={{ sm: 2, xs: 2, md: 3, lg: 3 }}>
                  Custom Software Development
                </Typography>
                <Typography variant="body1" m={{ sm: 2, xs: 2, md: 5, lg: 5 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut
                </Typography>
              </Grid>
            </Grid>
          )}
          {selectedTab === 4 && (
            <Grid
              item
              container
              md={9}
              justifyContent={'space-around'}
              direction={'row'}
            >
              <Divider
                sx={{ backgroundColor: 'black' }}
                orientation="vertical"
                flexItem
              />
              <Box
                sx={{
                  backgroundColor: 'chocolate',
                  margin: 'auto',
                  height: '100%',
                  width: 'auto',
                  borderRadius: '25px'
                }}
              >
                <img
                  src="/logo512.png"
                  alt=""
                  height={'100%'}
                  width={'auto'}
                  style={{ objectFit: 'contain' }}
                />
              </Box>

              <Grid item container direction={'column'} md={6}>
                <Typography
                  fontWeight={700}
                  m={{ sm: 2, xs: 2, md: 5 }}
                  color={'#2868ff'}
                >
                  OUR SERVICES
                </Typography>
                <Typography variant="h4" m={{ sm: 2, xs: 2, md: 3, lg: 3 }}>
                  Custom Software Development
                </Typography>
                <Typography variant="body1" m={{ sm: 2, xs: 2, md: 5, lg: 5 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut
                </Typography>
              </Grid>
            </Grid>
          )}
          {selectedTab === 5 && (
            <Grid
              item
              container
              md={9}
              justifyContent={'space-around'}
              direction={'row'}
            >
              <Divider
                sx={{ backgroundColor: 'black', width: '10px' }}
                orientation="vertical"
                flexItem
              />
              <Box
                sx={{
                  backgroundColor: 'yellow',
                  margin: 'auto',
                  height: '100%',
                  width: 'auto',
                  borderRadius: '25px'
                }}
              >
                <img
                  src="/logo512.png"
                  alt=""
                  height={'100%'}
                  width={'auto'}
                  style={{ objectFit: 'contain' }}
                />
              </Box>

              <Grid item container direction={'column'} md={6}>
                <Typography
                  fontWeight={700}
                  m={{ sm: 2, xs: 2, md: 5 }}
                  color={'#2868ff'}
                >
                  OUR SERVICES
                </Typography>
                <Typography variant="h4" m={{ sm: 2, xs: 2, md: 3, lg: 3 }}>
                  Custom Software Development
                </Typography>
                <Typography variant="body1" m={{ sm: 2, xs: 2, md: 5, lg: 5 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut
                </Typography>
              </Grid>
            </Grid>
          )}
        </Grid>
      </Grid>

      {/* We provide expert software solutions */}
      <Grid
        direction={'column'}
        container
        md={12}
        justifyContent={'space-between'}
        color={'white'}
        bgcolor={'#122c34'}
      >
        {/*title*/}
        <Grid
          item
          justifyContent={'space-between'}
          alignItems={'left'}
          direction={'column'}
          p={'100px'}
        >
          <Typography variant="h3" p={'10px'}>
            We provide expert software solutions
          </Typography>
          <Typography variant="h4" p={'10px'}>
            We are adept at getting the job done
          </Typography>
        </Grid>
        {/*Grid 1*/}
        <Grid
          container
          direction={'row'}
          alignItems={'right'}
          justifyContent={'end'}
          color={'black'}
          // border={'1px solid black'}
        >
          <Grid item md={6} container direction={'row'}>
            <Box
              sx={{
                width: '100%',
                borderRadius: '25px 0px 0px 25px',
                backgroundColor: '#ffcaa3',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'right',
                p: '35px'
              }}
            >
              <Grid padding={'10px'}>
                {' '}
                <LaptopIcon sx={{ fontSize: '80px' }} />
              </Grid>
              <Grid direction={'column'} padding={' 0px 20px'}>
                <Typography variant="h4" fontWeight={'700'}>
                  Industry Experience
                </Typography>
                <Typography variant="h6" paddingTop={'25px'} fontWeight={'100'}>
                  We are able to solve diverse problems regardless of industry
                </Typography>
              </Grid>
            </Box>
          </Grid>
        </Grid>
        {/*Grid 2*/}
        <Grid
          container
          direction={'row'}
          alignItems={'left'}
          justifyContent={'start'}
          color={'black'}
          // border={'1px solid black'}
        >
          <Grid item md={5} container direction={'row'}>
            <Box
              sx={{
                width: '100%',
                borderRadius: '0% 25px 25px 0%',
                backgroundColor: '#b6eeff',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'right',
                p: '35px'
              }}
            >
              <Grid padding={'10px'}>
                <GroupIcon sx={{ fontSize: '80px' }} />
              </Grid>
              <Grid direction={'column'} padding={' 0px 20px'}>
                <Typography variant="h4" fontWeight={'700'}>
                  Team of developers
                </Typography>
                <Typography
                  variant="h6"
                  textAlign={'center'}
                  paddingTop={'25px'}
                  fontWeight={'100'}
                >
                  Our team is filled with group of designers and engineers
                </Typography>
              </Grid>
            </Box>
          </Grid>
        </Grid>
        {/*Grid 3*/}
        <Grid
          container
          direction={'row'}
          alignItems={'right'}
          justifyContent={'end'}
          color={'black'}
          marginBottom={'80px'}
        >
          {' '}
          {/**Button grid */}
          <Link
            href="#"
            underline="none"
            color={'white'}
            sx={{
              // backgroundColor: 'red',
              marginRight: 'auto',
              marginTop: 'auto',
              width: 'auto',
              display: 'flex',
              flexDirection: 'row',
              height: '50px',
              marginLeft: '80px',
              padding: '10px',
              borderBottom: '1px solid white',
              cursor: 'pointer'
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 2
              }}
            >
              <Typography variant="h5">Start a project</Typography>
              <ArrowForwardIcon sx={{ fontSize: '50px', color: 'white' }} />
            </Box>
          </Link>
          <Grid item md={6} container direction={'row'}>
            <Box
              sx={{
                width: '100%',
                borderRadius: '25px 0px 0px 25px',
                backgroundColor: '#fffecb',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'right',
                p: '35px'
              }}
            >
              <Grid padding={'10px'}>
                <TrendingUpIcon sx={{ fontSize: '80px' }} />
              </Grid>
              <Grid direction={'column'} padding={' 0px 20px'}>
                <Typography variant="h4" fontWeight={'700'}>
                  Project tracking
                </Typography>
                <Typography variant="h6" paddingTop={'20px'} fontWeight={'100'}>
                  You will be able to keep up with the project development ona
                  daily basis
                </Typography>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Grid>

      {/*Frequently asked questions*/}
      <Grid
        container
        md={12}
        direction={'column'}
        alignItems={'left'}
        p={'100px'}
      >
        <Typography variant="h2" fontWeight={700}>
          FAQ
        </Typography>
        <Typography variant="h5" fontWeight={100} pt={'50px'} pb={'50px'}>
          Again I have to write stupid text to fill in the time and everything.
          This is everything that goes away and moves time forward
        </Typography>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography fontWeight={700}>
              1 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography fontWeight={700}>
              2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography fontWeight={700}>
              3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography fontWeight={700}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography fontWeight={700}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography fontWeight={700}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Grid>

      {/* Get started section**/}
      <Grid
        container
        direction={'row'}
        p={'100px'}
        bgcolor={'#122c34'}
        color={'white'}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Grid item>
          {' '}
          <Typography variant="h2" fontWeight={700}>
            Build your solution today
          </Typography>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#ee8434',
              boxShadow: 0,
              height: '70px',
              width: '390px',
              fontSize: '22px',
              marginBottom: '10px',
              marginTop: '30px'
            }}
          >
            Get Started
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
