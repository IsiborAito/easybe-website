/* eslint-disable no-lone-blocks */
import {
  Box,
  Button,
  styled,
  Grid,
  Typography,
  Tabs,
  Tab,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Link,
  Stack
} from '@mui/material';
import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import GroupIcon from '@mui/icons-material/Group';
import LaptopIcon from '@mui/icons-material/Laptop';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { FAQs } from '../../utilities/data';
// import required modules

{
  /* Hero section styling start*/
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
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
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setselectedTab(newValue);
  };
  const handleOpen =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
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
          slidesToShow: 2,
          slidesToScroll: 2,
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
              width: { sm: '100%', md: '85%', lg: '85%' },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-evenly',
              alignItems: 'flex-start',
              marginTop: '30px',
              fontWeight: 'light',
              letterSpacing: 1.5
            }}
          >
            <Typography variant="h5" fontWeight={300}>
              With our innovative and tailored solutions, we can help take your
              business to the next level. At Easybe, we understand that every
              business has unique needs and challenges, which is why we work
              closely with our clients to create software that meets their
              specific requirements.
            </Typography>

            <Button
              variant="contained"
              sx={{
                backgroundColor: '#ee8434',
                boxShadow: 0,
                height: '70px',
                width: isMobile ? '100%' : '190px',
                fontSize: '22px',
                marginBottom: '10px',
                marginTop: '30px',
                '&:hover': {
                  backgroundColor: 'darkorange'
                }
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
        justifyContent={'center'}
        sx={{ padding: { lg: '100px', sm: '50px', xs: '20px' } }}
        container
        spacing={3}
        md={12}
        alignItems={'center'}
      >
        <Grid item md={5} lg={5}>
          <Typography variant="h4" align={isMobile ? 'center' : 'left'}>
            Proficient in a range of software development technologies
          </Typography>
        </Grid>

        <Grid
          item
          md={12}
          lg={12}
          sm={12}
          xs={12}
          sx={{ position: 'relative' }}
        >
          <Slider {...settings}>
            {dataImg.map((data) => (
              <Box sx={{}}>
                <Box
                  sx={{
                    backgroundColor: '#f2c6a4',
                    width: { lg: '100px', md: '50px', sm: '60px', xs: '40px' },
                    height: {
                      lg: '100px',
                      md: '50px',
                      sm: '60px',
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

        <Grid item md={2} lg={2} sm={4} xs={5}>
          <Button
            variant="contained"
            disableElevation
            sx={{
              backgroundColor: '#FFFD82',
              height: { sm: '50px', md: '60px', lg: '70px' },
              width: { sm: '100%', md: '150px', lg: '190px', xs: '100%' },
              fontSize: { sm: '15px', md: '15px', lg: '22px' },
              marginBottom: '10px',
              marginTop: '30px',
              color: '#122C34',
              '&:hover': {
                backgroundColor: 'yellow'
              }
            }}
          >
            Get Started
          </Button>
        </Grid>
      </Grid>

      {/* Why Choose Easybe? */}
      <Grid
        container
        justifyContent={'center'}
        alignItems={'center'}
        bgcolor={'#122c34'}
        color={'white'}
        spacing={isMobile ? 3 : 0}
        sx={{ padding: { xs: '1rem', lg: '6rem', sm: '6rem' } }}
      >
        <Grid item md={12}>
          <Typography
            align="center"
            variant="h5"
            color={'#FFFD82'}
            sx={{ fontWeight: 700 }}
          >
            Why Choose Easybe?
          </Typography>
        </Grid>

        <Grid item md={4} sm={12} xs={12}>
          <Typography variant="h2" sx={{ fontWeight: 700 }}>
            Easybe tailors software solutions to meet your business needs
          </Typography>
        </Grid>
        <Grid item md={4} sm={12} xs={12} container justifyContent={'center'}>
          <div
            style={{
              width: isMobile ? '100%' : '2px',
              height: isMobile ? '2px' : '100px',
              backgroundColor: 'white',
              display: 'inline-block'
            }}
          />
        </Grid>
        <Grid item md={4} sm={12} xs={12}>
          <Stack justifyContent="flex-end">
            <Typography
              variant="h6"
              align={isMobile ? 'left' : 'right'}
              sx={{ fontWeight: 400 }}
            >
              Our team of experienced software developers has expertise in a
              wide range of technologies and programming languages. <br />
              <br />
              We work closely with our clients throughout the development
              process to ensure that we are delivering a solution that meets
              their needs and exceeds their expectations.
            </Typography>
          </Stack>
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
          lg: 'flex-start'
        }}
        sx={{
          width: '100%',
          backgroundColor: 'white',
          color: 'black',
          padding: { sm: '2rem', xs: '2rem', md: '8rem', lg: '8rem' },
          minHeight: { md: '65vh', lg: '65vh' }
        }}
      >
        <Grid item md={12}>
          <Stack>
            <Typography variant="h2" gutterBottom sx={{ fontWeight: 700 }}>
              Building solutions with EasyBe
            </Typography>
            <Typography
              variant="h5"
              sx={{ fontWeight: 700, marginBottom: '4rem' }}
            >
              Our Services
            </Typography>
          </Stack>
        </Grid>
        <Grid
          direction={'row'}
          item
          container
          md={12}
          sx={{ width: { sm: '100%', xs: '100%' } }}
        >
          <Grid item md={2} sm={12}>
            <Tabs
              orientation={isMobile ? 'horizontal' : 'vertical'}
              variant="scrollable"
              value={selectedTab}
              onChange={handleChange}
              indicatorColor="secondary"
              aria-label="Vertical tabs"
              scrollButtons
              allowScrollButtonsMobile
              sx={{ borderRight: 1, borderColor: 'divider' }}
            >
              <Tab
                sx={{ fontSize: { lg: '20px', sm: '14px' } }}
                label="Software development"
                wrapped
              />
              <Tab
                sx={{ fontSize: { lg: '20px', sm: '14px' } }}
                label="Mobile App development"
                wrapped
              />
              <Tab
                sx={{ fontSize: { lg: '20px', sm: '14px' } }}
                label="Web App development"
                wrapped
              />
              <Tab
                sx={{ fontSize: { lg: '20px', sm: '14px' } }}
                label="Development teams"
                wrapped
              />
            </Tabs>
          </Grid>
          <Grid item md={1}></Grid>
          <Grid item md={8} sm={11} xs={12}>
            <TabPanel value={selectedTab} index={0}>
              <Stack direction={{ lg: 'row', sm: 'column' }} spacing={2}>
                <div style={{ width: '50%', height: '200px' }} />
                <Stack spacing={2}>
                  <Typography variant="h5" sx={{ fontWeight: 700 }}>
                    Custom Software Development
                  </Typography>
                  <Typography variant="h5" sx={{ fontWeight: 400 }}>
                    We create solutions for startups and enterprises with elite
                    software development
                  </Typography>
                  <Typography variant="h5" sx={{ fontWeight: 400 }}>
                    <strong>Building process:</strong> We get you from an idea
                    all the way to working solution.
                  </Typography>
                  <Typography variant="h5" sx={{ fontWeight: 400 }}>
                    <strong>Bespoke solutions:</strong> Tailor made software for
                    all your business needs
                  </Typography>
                  <Button
                    variant="contained"
                    size="large"
                    color="secondary"
                    disableElevation
                    fullWidth
                    sx={{
                      width: { lg: '50%', xs: '100%' },
                      paddingTop: '1rem',
                      paddingBottom: '1rem'
                    }}
                  >
                    Software development
                  </Button>
                </Stack>
              </Stack>
            </TabPanel>
            <TabPanel value={selectedTab} index={1}>
              <Stack direction={{ lg: 'row', sm: 'column' }} spacing={2}>
                <div style={{ width: '50%', height: '200px' }} />
                <Stack spacing={2}>
                  <Typography variant="h5" sx={{ fontWeight: 700 }}>
                    Mobile App Development
                  </Typography>
                  <Typography variant="h5" sx={{ fontWeight: 400 }}>
                    We create mobile app application for both Android and iOs
                    operating systems.
                  </Typography>
                  <Typography variant="h5" sx={{ fontWeight: 400 }}>
                    <strong>Large market:</strong> You can reach millions of
                    users through the vibrant mobile market.
                  </Typography>
                  <Typography variant="h5" sx={{ fontWeight: 400 }}>
                    <strong>Cross platforms:</strong> We create mobile app
                    application for both Android and iOs operating systems.
                  </Typography>
                  <Button
                    variant="contained"
                    size="large"
                    color="secondary"
                    disableElevation
                    sx={{
                      width: { lg: '50%', xs: '100%' },
                      paddingTop: '1rem',
                      paddingBottom: '1rem',
                      fontSize: '18px'
                    }}
                  >
                    Mobile App development
                  </Button>
                </Stack>
              </Stack>
            </TabPanel>
            <TabPanel value={selectedTab} index={2}>
              <Stack direction={{ lg: 'row', sm: 'column' }} spacing={2}>
                <div style={{ width: '50%', height: '200px' }} />
                <Stack spacing={2}>
                  <Typography variant="h5" sx={{ fontWeight: 700 }}>
                    Web App Development
                  </Typography>
                  <Typography variant="h5" sx={{ fontWeight: 400 }}>
                    We create elite web applications that will help grow your
                    business.
                  </Typography>
                  <Typography variant="h5" sx={{ fontWeight: 400 }}>
                    <strong>Flexible:</strong> Web applications that can grow
                    and expand with your business.
                  </Typography>
                  <Typography variant="h5" sx={{ fontWeight: 400 }}>
                    <strong>Highly accessible:</strong> Web app that can be used
                    an all browsers and every OS.
                  </Typography>
                  <Button
                    variant="contained"
                    size="large"
                    color="secondary"
                    disableElevation
                    sx={{
                      width: { lg: '50%', xs: '100%' },
                      paddingTop: '1rem',
                      paddingBottom: '1rem',
                      fontSize: '18px'
                    }}
                  >
                    Web App development
                  </Button>
                </Stack>
              </Stack>
            </TabPanel>
            <TabPanel value={selectedTab} index={3}>
              <Stack direction={{ lg: 'row', sm: 'column' }} spacing={2}>
                <div style={{ width: '50%', height: '200px' }} />
                <Stack spacing={2}>
                  <Typography variant="h5" sx={{ fontWeight: 700 }}>
                    Agile Development Teams
                  </Typography>
                  <Typography variant="h5" sx={{ fontWeight: 400 }}>
                    Hire great and managed development teams for every software
                    need.
                  </Typography>
                  <Typography variant="h5" sx={{ fontWeight: 400 }}>
                    <strong>More capability:</strong> Hire external teams that
                    fit right into your business. Helping you reach your goals.
                  </Typography>
                  <Typography variant="h5" sx={{ fontWeight: 400 }}>
                    <strong>Agile:</strong> A team that is able to scale with
                    your projects.
                  </Typography>
                  <Button
                    variant="contained"
                    size="large"
                    color="secondary"
                    disableElevation
                    sx={{
                      width: { lg: '50%', xs: '100%' },
                      paddingTop: '1rem',
                      paddingBottom: '1rem',
                      fontSize: '18px'
                    }}
                  >
                    Development teams
                  </Button>
                </Stack>
              </Stack>
            </TabPanel>
          </Grid>
        </Grid>
      </Grid>

      {/* We provide expert software solutions */}
      <Grid
        direction={'column'}
        container
        md={12}
        justifyContent={'space-between'}
        color={'white'}
        sx={{ gap: { lg: '0rem', sm: '1rem', xs: '1rem' } }}
        bgcolor={'#122c34'}
      >
        {/*title*/}
        <Grid
          item
          justifyContent={'space-between'}
          alignItems={'left'}
          direction={'column'}
          p={'2rem'}
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
          justifyContent={'flex-end'}
          color={'black'}
          spacing={4}
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
              <Grid item padding={'10px'}>
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
          alignItems={'flex-end'}
          justifyContent={'space-between'}
          color={'black'}
          marginBottom={'80px'}
        >
          <Grid item md={2} order={isMobile ? 2 : 1}>
            <Link
              href="/contact-us"
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
          </Grid>

          <Grid
            item
            md={6}
            container
            direction={'row'}
            order={isMobile ? 1 : 2}
          >
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
        spacing={2}
        p={'3rem'}
      >
        <Grid item md={12}>
          <Typography variant="h2" fontWeight={700}>
            FAQ
          </Typography>
        </Grid>
        <Grid item md={12}>
          <Typography variant="h5" fontWeight={100} pt={'50px'} pb={'50px'}>
            Below are some of the frequently asked questions(FAQs) normally
            asked by customers
          </Typography>
        </Grid>
        <Grid item md={12}>
          {FAQs.map((FAQ, index) => (
            <Accordion
              key={index}
              elevation={0}
              expanded={expanded === FAQ.panel}
              onChange={handleOpen(FAQ.panel)}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`${FAQ.panel}a-header`}
                id={`${FAQ.panel}a-header`}
              >
                <Typography fontWeight={700} variant="h4">
                  {FAQ.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="h5" fontWeight={400}>
                  {FAQ.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Grid>
      </Grid>
      {/* Get started section**/}
      <Grid
        container
        direction={'row'}
        sx={{ padding: { lg: '4rem', sm: '2rem', xs: '1.5rem' } }}
        bgcolor={'#122c34'}
        color={'white'}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Grid item md={8} sm={12} xs={12}>
          <Typography variant="h2" fontWeight={700}>
            Build your solution today
          </Typography>
        </Grid>
        <Grid item md={4} sm={12} xs={12}>
          <Button
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: '#ee8434',
              boxShadow: 0,
              height: '70px',
              fontSize: '22px',
              marginBottom: '10px',
              marginTop: '30px',
              '&:hover': {
                backgroundColor: 'darkorange'
              }
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
