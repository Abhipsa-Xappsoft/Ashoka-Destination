import { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  MenuItem,
  Paper,
  Grid,
  Divider,
  Card,
  CardMedia
} from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { Phone as PhoneIcon, QrCode as QrCodeIcon } from '@mui/icons-material';
import emailjs from '@emailjs/browser';

const vehicles = [
  { value: 'suv', label: 'SUV' },
  { value: 'tempo-traveller', label: 'Tempo Traveller' },
  { value: 'traveller', label: 'Traveller' },
  { value: 'winger', label: 'Winger' },
  { value: 'innova', label: 'Innova' },
  { value: 'innova-crysta', label: 'Innova Crysta' }
];

const Booking = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    contactNumber: '',
    email: '',
    vehicle: '',
    pickupDate: null as Date | null,
    dropoffDate: null as Date | null,
    pickupLocation: '',
    dropoffLocation: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // These values are placeholders. You will need to replace them with your actual EmailJS credentials.
    const serviceID = 'service_1prau5o';
    const templateID = 'template_c6yrumg';
    const userID = 'N68gY2ZH8arbGQS2p1ymN';

    const templateParams = {
      ...formData,
      pickupDate: formData.pickupDate ? formData.pickupDate.toDateString() : 'Not selected',
      dropoffDate: formData.dropoffDate ? formData.dropoffDate.toDateString() : 'Not selected',
    };

    emailjs.send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Booking submitted successfully! We will contact you shortly.');
      }, (err) => {
        console.log('FAILED...', err);
        alert('Failed to submit booking. Please try again later or contact us directly.');
      });
  };

  return (
    <Box sx={{ 
      width: '100%', 
      minHeight: '100vh', 
      bgcolor: 'background.default',
      py: { xs: 4, sm: 6, md: 8 }
    }}>
      <Container maxWidth="md">
        <Typography 
          variant="h3" 
          component="h1" 
          gutterBottom 
          align="center"
          sx={{
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            fontWeight: 'bold',
            color: 'primary.main',
            mb: { xs: 3, sm: 4 }
          }}
        >
          Car Rental Booking Form
        </Typography>

        <Paper 
          elevation={3} 
          sx={{ 
            p: { xs: 2, sm: 3, md: 4 },
            borderRadius: 2,
            background: 'linear-gradient(to bottom right, #ffffff, #f5f5f5)'
          }}
        >
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Full Name"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Contact Number"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  select
                  label="Select Vehicle"
                  name="vehicle"
                  value={formData.vehicle}
                  onChange={handleChange}
                >
                  {vehicles.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="Pick-up Date"
                    value={formData.pickupDate}
                    onChange={(newValue: Date | null) => {
                      setFormData(prev => ({
                        ...prev,
                        pickupDate: newValue
                      }));
                    }}
                    renderInput={(params) => (
                      <TextField {...params} fullWidth required />
                    )}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12} sm={6}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="Drop-off Date"
                    value={formData.dropoffDate}
                    onChange={(newValue: Date | null) => {
                      setFormData(prev => ({
                        ...prev,
                        dropoffDate: newValue
                      }));
                    }}
                    renderInput={(params) => (
                      <TextField {...params} fullWidth required />
                    )}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Pick-up Location"
                  name="pickupLocation"
                  value={formData.pickupLocation}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Drop-off Location"
                  name="dropoffLocation"
                  value={formData.dropoffLocation}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>

            <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
              <Button
                type="submit"
                variant="contained"
                size="large"
                sx={{
                  py: 2,
                  px: 8,
                  fontSize: '1.2rem',
                  fontWeight: 600
                }}
              >
                Book Now
              </Button>
            </Box>

            <Box sx={{ mt: 4, mb: 3 }}>
              <Divider>
                <Typography variant="h6" color="primary" sx={{ px: 2 }}>
                  For Advance Payment
                </Typography>
              </Divider>
            </Box>

            <Box 
              sx={{ 
                display: 'flex', 
                flexDirection: { xs: 'column', sm: 'row' },
                gap: 3,
                justifyContent: 'center',
                alignItems: 'center',
                mb: 4
              }}
            >
              <Card 
                elevation={3}
                sx={{ 
                  maxWidth: 300,
                  borderRadius: 2,
                  overflow: 'hidden',
                  mb: 2
                }}
              >
                <CardMedia
                  component="img"
                  image="/asset/qrcode.webp"
                  alt="QR Code for Payment"
                  sx={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'contain'
                  }}
                />
              </Card>
              <Button
                variant="contained"
                color="primary"
                size="large"
                startIcon={<QrCodeIcon />}
                sx={{
                  minWidth: { xs: '100%', sm: 200 },
                  py: 1.5
                }}
              >
                Scan & Pay
              </Button>
            </Box>

            <Box sx={{ mt: 4, mb: 3 }}>
              <Divider>
                <Typography variant="h6" color="primary" sx={{ px: 2 }}>
                  Reservation Booking
                </Typography>
              </Divider>
            </Box>

            <Box 
              sx={{ 
                display: 'flex', 
                flexDirection: { xs: 'column', sm: 'row' },
                gap: 3,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Card 
                elevation={3}
                sx={{ 
                  maxWidth: 300,
                  borderRadius: 2,
                  overflow: 'hidden',
                  mb: 2
                }}
              >
                <CardMedia
                  component="img"
                  image="/asset/booking.webp"
                  alt="Booking Information"
                  sx={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'contain'
                  }}
                />
              </Card>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                startIcon={<PhoneIcon />}
                sx={{
                  minWidth: { xs: '100%', sm: 200 },
                  py: 1.5
                }}
              >
                Call for Reservation
              </Button>
            </Box>
          </form>
        </Paper>
      </Container>
    </Box>
  );
};

export default Booking; 