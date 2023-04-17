import React from 'react';
import {
  Grid,
  Stack,
  TextField,
  Typography,
  Button,
  Container,
  Card,
  CardContent,
  MenuItem
} from '@mui/material';
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
    <Container>
      <Grid
        container
        justifyContent="space-between"
        alignItems="flex-start"
        spacing={2}
      >
        <Grid item md={4} sm={12}>
          <Stack>
            <Typography variant="h6">Contact Us</Typography>
            <Typography variant="h3" sx={{ fontWeight: 700 }}>
              Let Us Begin
            </Typography>
            <Typography variant="body1">
              We look forward to hearing from you. Submit your details and we
              will reach out to you ASAP! to discuss your software needs.
            </Typography>
          </Stack>
        </Grid>
        <Grid item md={8} sm={12}>
          <Card sx={{ padding: '2rem' }}>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Grid
                  container
                  justifyContent="center"
                  alignItems="center"
                  spacing={2}
                >
                  <Grid item md={6}>
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
                  <Grid item md={6}>
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
                  <Grid item md={6}>
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
                  <Grid item md={6}>
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
                  <Grid item md={12}>
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
                  <Grid item md={12}>
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
                  <Grid
                    item
                    md={12}
                    container
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Button type="submit" variant="contained" disableElevation>
                      Submit Message
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Contact;
