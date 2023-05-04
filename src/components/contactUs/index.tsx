import React from 'react';
import {
  Grid,
  Stack,
  TextField,
  Typography,
  Button,
  Card,
  CardContent,
  MenuItem
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';

const companySize = [
  '1 - 25',
  '25 - 50',
  '50 - 100',
  '100 - 500',
  '500 -1000',
  '1000+'
];

const services = [
  'Software development',
  'Mobile app development',
  'Web app development',
  'Hire a team',
  'Staff augmentation',
  'Suppport'
];

interface IFormInputs {
  name: string;
  email: string;
  number: string;
  size: string;
  service: string;
  details: string;
}

const Contact = () => {
  const { handleSubmit, control, reset } = useForm<IFormInputs>();

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    console.log(data);
  };

  return (
    <div
      style={{
        width: '100%',
        height: '90vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        position: 'relative',
        gap: '8rem'
      }}
    >
      <div
        style={{
          backgroundColor: '#122C34',
          padding: '4rem',
          overflow: 'hidden'
        }}
      >
        <Grid
          container
          justifyContent="space-between"
          alignItems="flex-start"
          spacing={1}
        >
          <Grid item md={4} sm={4}>
            <Stack>
              <Typography
                variant="h1"
                sx={{
                  fontWeight: 700,
                  color: 'white',
                  fontSize: { sm: '42px' }
                }}
              >
                Start a project
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 400,
                  color: 'white',
                  fontSize: { sm: '30px' }
                }}
              >
                We want to hear from you. Just leave your details below and we
                will reach out to you quickly to discuss your custom software
                needs.
              </Typography>
            </Stack>
          </Grid>
          <Grid item md={6} sm={6}>
            <Card
              sx={{
                padding: { lg: '2rem', sm: '1rem', xs: '0.5rem' },
                position: 'absolute',
                right: '5%',
                left: { lg: '60%', sm: '40%' }
              }}
              raised
            >
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                  >
                    <Grid item md={6} sm={12} xs={12}>
                      <Controller
                        name="name"
                        control={control}
                        rules={{ required: true }}
                        render={({ field: { onChange, value } }) => (
                          <TextField
                            variant="outlined"
                            type="text"
                            label="Full Name"
                            placeholder="Name & Surname"
                            fullWidth
                            onChange={onChange}
                            value={value}
                          />
                        )}
                      />
                    </Grid>
                    <Grid item md={6} sm={12} xs={12}>
                      <Controller
                        control={control}
                        name="email"
                        rules={{
                          required: 'Email is required',
                          pattern: {
                            value: /^\S+@\S+$/i,
                            message: 'Invalid email address'
                          }
                        }}
                        render={({
                          field: { onChange, value },
                          fieldState: { error }
                        }) => (
                          <TextField
                            variant="outlined"
                            type="email"
                            label="Email"
                            placeholder="Email"
                            fullWidth
                            value={value}
                            onChange={onChange}
                            error={!!error}
                            helperText={error ? error.message : null}
                          />
                        )}
                      />
                    </Grid>
                    <Grid item md={6} sm={12} xs={12}>
                      <Controller
                        control={control}
                        name="number"
                        rules={{
                          required: 'Phone number is required',
                          pattern: {
                            value: /^[0-9]{10}$/i,
                            message: 'Invalid phone number'
                          }
                        }}
                        render={({
                          field: { onChange, value },
                          fieldState: { error }
                        }) => (
                          <TextField
                            fullWidth
                            variant="outlined"
                            onChange={onChange}
                            value={value}
                            error={!!error}
                            helperText={error ? error.message : null}
                            label="Phone Number"
                            placeholder="Phone Number"
                          />
                        )}
                      />
                    </Grid>
                    <Grid item md={6} sm={12} xs={12}>
                      <Controller
                        control={control}
                        name="size"
                        rules={{ required: 'Company size required' }}
                        render={({
                          field: { onChange, value },
                          fieldState: { error }
                        }) => (
                          <TextField
                            select
                            label="Company Size"
                            defaultValue="Please Select"
                            variant="outlined"
                            fullWidth
                            onChange={onChange}
                            value={value}
                            error={!!error}
                            helperText={error ? error.message : null}
                          >
                            {companySize.map((size) => (
                              <MenuItem key={size} value={size}>
                                {size}
                              </MenuItem>
                            ))}
                          </TextField>
                        )}
                      />
                    </Grid>
                    <Grid item md={12} sm={12} xs={12}>
                      <Controller
                        control={control}
                        name="service"
                        rules={{ required: 'WHat service do you want?' }}
                        render={({
                          field: { onChange, value },
                          fieldState: { error }
                        }) => (
                          <TextField
                            select
                            label="What service are you looking for?"
                            defaultValue="Please Select"
                            variant="outlined"
                            fullWidth
                            onChange={onChange}
                            value={value}
                            error={!!error}
                            helperText={error ? error.message : null}
                          >
                            {services.map((service) => (
                              <MenuItem key={service} value={service}>
                                {service}
                              </MenuItem>
                            ))}
                          </TextField>
                        )}
                      />
                    </Grid>
                    <Grid item md={12} sm={12} xs={12}>
                      <Controller
                        control={control}
                        name="details"
                        render={({ field: { onChange, value } }) => (
                          <TextField
                            label="How can we help you?"
                            placeholder="Any more details you want to show us?"
                            multiline
                            variant="outlined"
                            minRows={3}
                            fullWidth
                            onChange={onChange}
                            value={value}
                          />
                        )}
                      />
                    </Grid>
                    <Grid item md={12}>
                      <Typography
                        variant="subtitle2"
                        sx={{ fontSize: { sm: '24p' } }}
                      >
                        By submitting this form, you agree to provide accurate
                        and up-to-date information about your business and your
                        software development needs. Easybe will use this
                        information to assess your requirements and determine
                        whether we can provide the requested services. Please
                        note that submitting this form does not constitute a
                        binding contract between Easybe and your business, and
                        does not guarantee that we will be able to provide the
                        requested services. We will use the information you
                        provide in accordance with our privacy policy. Easybe
                        reserves the right to decline any request for services
                        at our discretion.
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      md={12}
                      container
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Button
                        type="submit"
                        variant="contained"
                        disableElevation
                        size="large"
                        sx={{ backgroundColor: '#EE8434' }}
                        endIcon={<SendIcon />}
                      >
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
export default Contact;
