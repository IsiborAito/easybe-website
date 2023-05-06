import React from 'react';
import {
  Container,
  Grid,
  Typography,
  Stack,
  Divider,
  Card,
  CardActions,
  Button
} from '@mui/material';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import ListItemText from '@mui/material/ListItemText';
import CardContent from '@mui/material/CardContent';

const PolicyPage = () => {
  return (
    <div>
      <Container sx={{ paddingTop: '10rem' }}>
        <Grid container justifyContent="center" spacing={3}>
          <Grid item md={12}>
            <Stack>
              <Typography
                align="center"
                variant="h6"
                sx={{ fontWeight: '400' }}
              >
                EASYBE
              </Typography>
              <Typography
                align="center"
                variant="h2"
                sx={{ fontWeight: '700' }}
              >
                Legal and Privacy Policies
              </Typography>
              <Typography
                align="center"
                variant="h5"
                sx={{ fontWeight: '400' }}
              >
                We design, create, deploy and maintain custom software for
                businesses.
              </Typography>
            </Stack>
          </Grid>
          <Grid item md={12}>
            <div style={{ height: '150px' }}></div>
          </Grid>
          <Grid item md={12}>
            <Divider variant="inset" />
          </Grid>
          <Grid item md={12}>
            <div style={{ height: '150px' }}></div>
          </Grid>
          <Grid item md={6}>
            <Stack spacing={1}>
              <Stack direction="row" spacing={1}>
                <TaskAltIcon />
                <a
                  href="/"
                  style={{ textDecoration: 'none', color: '#122C34' }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      '&:hover': {
                        textDecoration: 'underline'
                      }
                    }}
                  >
                    Read Easybe's Terms and Conditions Policy
                  </Typography>
                </a>
              </Stack>
              <Stack direction="row" spacing={1}>
                <TaskAltIcon />
                <a
                  href="/"
                  style={{ textDecoration: 'none', color: '#122C34' }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      '&:hover': {
                        textDecoration: 'underline'
                      }
                    }}
                  >
                    Read Easybe's Trust Policy
                  </Typography>
                </a>
              </Stack>
              <Stack direction="row" spacing={1}>
                <TaskAltIcon />
                <a
                  href="/"
                  style={{ textDecoration: 'none', color: '#122C34' }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      '&:hover': {
                        textDecoration: 'underline'
                      }
                    }}
                  >
                    Read Easybe's Privacy Policy
                  </Typography>
                </a>
              </Stack>
              <Stack direction="row" spacing={1}>
                <TaskAltIcon />
                <a
                  href="/"
                  style={{ textDecoration: 'none', color: '#122C34' }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      '&:hover': {
                        textDecoration: 'underline'
                      }
                    }}
                  >
                    Read Easybe's Cookie Policy
                  </Typography>
                </a>
              </Stack>
            </Stack>
          </Grid>
          <Grid item md={1} />
          <Grid item md={5}>
            <img
              src="https://res.cloudinary.com/purenelle/image/upload/v1683377352/Easybe/hero-foodbev_mmhmim.png"
              alt="first"
              width="100%"
              height="auto"
            />
          </Grid>
          <Grid item md={12}>
            <div style={{ height: '300px' }} />
          </Grid>
          <Grid item md={12}>
            <Card
              raised
              sx={{
                width: '100%',
                backgroundColor: '#122C34',
                paddingTop: '8rem',
                paddingBottom: '8rem'
              }}
            >
              <CardContent>
                <Typography
                  variant="h4"
                  align="center"
                  sx={{ fontWeight: 700, color: 'white' }}
                >
                  Begin your software project
                </Typography>
                <Typography
                  variant="h5"
                  align="center"
                  sx={{ color: 'white', fontWeight: 400 }}
                >
                  with Easybe
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'center' }}>
                <Button variant="contained" size="large" disableElevation>
                  Get started
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item md={12}>
            <div style={{ height: '200px' }} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default PolicyPage;
