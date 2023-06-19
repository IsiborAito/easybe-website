import React, { useContext } from 'react';
import { Grid, Typography, Stack, Box } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import RenderArrows from '../../utilities/renderArrows';
import { EasyBeContext, IContextProps } from '../../utilities/context';
import { clientData } from '../../utilities/data';

const ClientSide = () => {
  const slider = React.useRef<any>(null);
  const { isMobile } = useContext(EasyBeContext) as IContextProps;

  var settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    // centerPadding: '60px',
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    arrows: false,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '60px'
        }
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
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
    <Grid container justifyContent="space-around" alignItems="center">
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
          {clientData.map((client, index) => (
            <div key={index}>
              <Grid
                container
                justifyContent={'space-around'}
                alignItems="center"
              >
                <Grid item md={5} sm={12}>
                  <Box
                    sx={{
                      width: '500px',
                      height: '500px',
                      backgroundColor: 'gray'
                    }}
                  />
                </Grid>
                <Grid item md={5} sm={12}>
                  <Stack spacing={2}>
                    <Typography variant="h3" color="primary.contrastText">
                      {client.title}
                    </Typography>
                    <Typography
                      variant="h5"
                      color="primary.contrastText"
                      fontWeight={200}
                    >
                      {client.desc}
                    </Typography>
                  </Stack>
                </Grid>
              </Grid>
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
  );
};

export default ClientSide;
