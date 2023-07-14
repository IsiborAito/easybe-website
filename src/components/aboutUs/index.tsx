import { Box, Grid, Typography, Stack } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import React, { useContext } from 'react';
import MessageIcon from '@mui/icons-material/Message';
import GroupIcon from '@mui/icons-material/Group';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import { dataImg } from '../../utilities/data';
import { EasyBeContext, IContextProps } from '../../utilities/context';
import RenderArrows from '../../utilities/renderArrows';
import LinkButton from '../../utilities/LinkButton';

function AboutUs() {
  const slider = React.useRef<any>(null);
  const { isMobile } = useContext(EasyBeContext) as IContextProps;

  var settings = {
    className: 'center',
    infinite: true,
    // centerPadding: '60px',
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    arrows: false,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1420,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: '60px'
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: '60px'
        }
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1
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
        direction={'row'}
        mt={isMobile ? '80px' : '50px'}
        p={isMobile ? '40px' : '100px'}
        justifyContent={'space-between'}
      >
        <Grid item md={4} sm={12} xs={12}>
          <Stack>
            <Typography variant="h3" fontWeight={'700'}>
              Easybe: Making <br />
              business easy
            </Typography>
            <Typography variant="h4" fontWeight={'500'}>
              Customized software that <br />
              fits your business needs
            </Typography>
            <Typography variant="h5" fontWeight={300}>
              Easybe is a software development company focused <br />
              on creating custom software for clients. <br />
              Easybe is able to meet the needs of vairous industries, <br />
              with world-class teams with elite experience providing
              <br /> various software services.
            </Typography>
            <LinkButton
              text="Start a project"
              link="/contact-us"
              color="secondary"
              variant="contained"
              sx={{
                boxShadow: 0,
                height: '3rem',
                width: { md: '40%', sm: '100%' },
                marginBottom: '10px',
                marginTop: '30px'
              }}
            />
          </Stack>
        </Grid>
        <Grid item md={4} sm={12} xs={12} bgcolor={'grey'} p={'25px'}>
          Right hand side grid
        </Grid>
      </Grid>
      <Grid
        container
        direction={'row'}
        mt={isMobile ? '30px' : '50px'}
        p={isMobile ? '40px' : '100px'}
        justifyContent={'space-between'}
        spacing={2}
      >
        <Grid
          item
          md={4}
          sm={12}
          xs={12}
          sx={{ order: { md: 1, sm: 2, xs: 2 } }}
          bgcolor={'grey'}
          p={'25px'}
        >
          Right hand side grid
        </Grid>
        <Grid
          item
          md={4}
          sm={12}
          xs={12}
          sx={{ order: { md: 2, sm: 1, xs: 1 } }}
        >
          <Stack>
            <Typography variant="h3" fontWeight={'700'}>
              What we do
            </Typography>
            <Typography variant="h5" fontWeight={300}>
              Our team of experienced developers, designers, and project
              managers work closely with you to understand your goals and
              challenges. We believe that effective communication and
              collaboration are the keys to success. By combining our technical
              expertise with your business insights, we create software that
              empowers your organization and drives growth.
            </Typography>
          </Stack>
        </Grid>
        <Grid
          item
          md={12}
          sm={12}
          xs={12}
          sx={{ order: { md: 3, sm: 4, xs: 4 } }}
        >
          <div style={{ height: '8rem' }} />
        </Grid>
        <Grid item md={2} sm={1} sx={{ order: { md: 4, sm: 5, xs: 5 } }}></Grid>
        <Grid
          item
          md={8}
          sm={10}
          xs={12}
          sx={{ order: { md: 5, sm: 6, xs: 6 } }}
        >
          <Stack>
            <Typography align="center" variant="h3" fontWeight={'700'}>
              What sets us apart
            </Typography>
            <Typography align="center" variant="h5" fontWeight={300}>
              is our commitment to quality. We adhere to industry best practices
              and follow a rigorous development process to ensure that our
              software solutions are robust, scalable, and secure. We take pride
              in delivering projects on time and within budget, without
              compromising on quality.
            </Typography>
          </Stack>
        </Grid>
        <Grid item md={2} sm={1} sx={{ order: { md: 6, sm: 7, xs: 7 } }} />
      </Grid>
      <Grid
        container
        bgcolor={'#122c34'}
        mt={'50px'}
        p={isMobile ? '3rem' : '10rem'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Grid item md={12} sm={12} xs={12}>
          <Typography
            variant="h3"
            align="center"
            gutterBottom
            fontWeight={700}
            color={'white'}
          >
            Our Services
          </Typography>
        </Grid>
        <Grid item md={12} sm={12}>
          <div style={{ height: '50px' }} />
        </Grid>
        <Grid
          item
          md={1}
          sm={6}
          xs={6}
          container
          justifyContent={isMobile ? 'flex-end' : 'flex-start'}
          sx={{
            order: { sm: 2, md: 1, xs: 2 },
            paddingRight: { md: 0, sm: '0.5rem', xs: '0.25rem' }
          }}
        >
          <RenderArrows direction="backward" slider={slider} />
        </Grid>
        <Grid
          item
          md={10}
          sm={12}
          xs={12}
          sx={{ order: { sm: 1, md: 2, xs: 1 } }}
        >
          <Slider {...settings} ref={slider}>
            {dataImg.map((data, index) => (
              <div key={index}>
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
                    height={'200px'}
                    width={'100%'}
                    alt=""
                    style={{ objectFit: 'contain' }}
                  />
                </Box>
                <Box
                  sx={{
                    width: '100%',
                    height: 'fit-content',
                    padding: '0.5rem'
                  }}
                >
                  <Typography
                    variant="h5"
                    align="left"
                    fontWeight={300}
                    color={'white'}
                  >
                    {data.description}
                  </Typography>
                </Box>
              </div>
            ))}
          </Slider>
        </Grid>
        <Grid
          item
          md={1}
          sm={6}
          xs={6}
          sx={{
            order: { sm: 3, md: 3, xs: 3 },
            paddingLeft: { md: 0, sm: '0.5rem', xs: '0.25rem' }
          }}
          container
          justifyContent={isMobile ? 'flex-start' : 'flex-end'}
        >
          <RenderArrows direction="forward" slider={slider} />
        </Grid>
      </Grid>
      <Grid
        container
        direction={'column'}
        alignItems={'center'}
        pt={isMobile ? '4rem' : '10rem'}
        pb={isMobile ? '4rem' : '10rem'}
        pl={isMobile ? '0.5rem' : 0}
        pr={isMobile ? '0.5rem' : 0}
      >
        <Grid item md={12} sm={12} xs={12}>
          <Typography
            variant="h3"
            align={isMobile ? 'center' : 'left'}
            fontWeight={700}
          >
            Easybe&apos;s development process
          </Typography>
          <Typography
            variant="h4"
            align={isMobile ? 'center' : 'left'}
            fontWeight={100}
            p={'10px'}
          >
            Learn our process before you reach out
          </Typography>
        </Grid>
        <Grid
          item
          md={12}
          container
          direction={'row'}
          pt={isMobile ? '4rem' : '8rem'}
          pb={isMobile ? '4rem' : '8rem'}
          pl={isMobile ? '1rem' : '0'}
          pr={isMobile ? '1rem' : '0'}
          justifyContent="space-around"
          spacing={isMobile ? 6 : 2}
          alignItems="space-between"
        >
          <Grid item md={5} sm={10} xs={12}>
            <Stack direction="row" spacing={1} alignItems="center">
              <MessageIcon sx={{ fontSize: '2rem' }} />
              <Typography variant="h5" fontWeight={300}>
                To get started with your software development project, simply
                reach out to Easybe and we'll schedule a consultation to discuss
                your requirements in detail.
              </Typography>
            </Stack>
          </Grid>
          <Grid item md={5} xs={12} sm={10}>
            <Stack direction="row" spacing={1} alignItems="center">
              <GroupIcon sx={{ fontSize: '2rem' }} />
              <Typography variant="h5" fontWeight={300}>
                After agreeing on the project requirements and scope, we'll
                introduce our team of skilled and experienced developers,
                designers, project managers, and quality assurance specialists
                who are passionate about delivering high-quality software
                solutions.
              </Typography>
            </Stack>
          </Grid>
          <Grid item md={12} sm={10} xs={12}>
            <div style={{ height: isMobile ? '1rem' : '10rem' }} />
          </Grid>
          <Grid item md={5} xs={12} sm={10}>
            <Stack direction="row" spacing={1} alignItems="center">
              <GroupWorkIcon sx={{ fontSize: '2rem' }} />
              <Typography variant="h5" fontWeight={300}>
                We'll collaborate closely with you to bring your ideas to life
                and develop a custom software solution tailored to your specific
                needs.
              </Typography>
            </Stack>
          </Grid>
          <Grid item md={5} xs={12} sm={10}>
            <Stack direction="row" spacing={1} alignItems="center">
              <AccessTimeFilledIcon sx={{ fontSize: '2rem' }} />
              <Typography variant="h5" fontWeight={300}>
                Once your project is completed, we'll deploy it to your
                preferred platform and provide ongoing maintenance and support
                to ensure its optimal performance and longevity.
              </Typography>
            </Stack>
          </Grid>
          <Grid item md={12} sm={12} xs={12} pt={'2rem'}>
            <LinkButton
              variant="contained"
              text="Contact us"
              link="/contact-us"
              color="secondary"
              disableElevation
              sx={{
                height: '3rem',
                width: { sm: '100%', xs: '100%', md: '50%', lg: '50%' }
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default AboutUs;
