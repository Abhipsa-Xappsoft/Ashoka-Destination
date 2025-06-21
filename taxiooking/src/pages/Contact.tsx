import { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  TextField,
  Button,
  Paper,
  Alert,
  IconButton
} from '@mui/material';
import {
  Phone as PhoneIcon,
  Email as EmailIcon,
  LocationOn as LocationIcon,
  AccessTime as TimeIcon,
  WhatsApp as WhatsAppIcon
} from '@mui/icons-material';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    setSubmitted(true);
  };

  return (
    <Box sx={{ 
      width: '100%', 
      minHeight: '100vh',
      bgcolor: 'background.default',
      py: { xs: 4, sm: 6, md: 8 }
    }}>
      <Container maxWidth="lg">
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
          Contact Us
        </Typography>

        <Grid container spacing={4}>
          {/* Contact Information */}
          <Grid item xs={12} md={4}>
            <Paper 
              elevation={3} 
              sx={{ 
                p: 4, 
                height: '100%',
                borderRadius: 3,
                background: 'linear-gradient(to bottom right, #ffffff, #f8f9fa)',
                boxShadow: '0 8px 24px rgba(0,0,0,0.1)'
              }}
            >
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: 'primary.main' }}>
                Get in Touch
              </Typography>
              
              <Box sx={{ mt: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <PhoneIcon sx={{ mr: 2, color: 'primary.main', fontSize: 28 }} />
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                      Call Us
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2, mt: 0.5 }}>
                      <IconButton 
                        href="tel:+919124747676"
                        color="primary"
                        sx={{ 
                          bgcolor: 'primary.light',
                          '&:hover': { bgcolor: 'primary.main', color: 'white' }
                        }}
                      >
                        <PhoneIcon />
                      </IconButton>
                      <Typography variant="body1">
                        +91 9124747676
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 2, mt: 0.5 }}>
                      <IconButton 
                        href="tel:+919437307683"
                        color="primary"
                        sx={{ 
                          bgcolor: 'primary.light',
                          '&:hover': { bgcolor: 'primary.main', color: 'white' }
                        }}
                      >
                        <PhoneIcon />
                      </IconButton>
                      <Typography variant="body1">
                        +91 9437307683
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <WhatsAppIcon sx={{ mr: 2, color: 'primary.main', fontSize: 28 }} />
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                      WhatsApp
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2, mt: 0.5 }}>
                      <IconButton 
                        href="https://wa.me/919124747676"
                        color="primary"
                        sx={{ 
                          bgcolor: 'primary.light',
                          '&:hover': { bgcolor: 'primary.main', color: 'white' }
                        }}
                      >
                        <WhatsAppIcon />
                      </IconButton>
                      <Typography variant="body1">
                        +91 9124747676
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <EmailIcon sx={{ mr: 2, color: 'primary.main', fontSize: 28 }} />
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                      Email
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 0.5 }}>
                      <a 
                        href="mailto:info@jayjagannathtravels.com" 
                        style={{ 
                          color: 'inherit', 
                          textDecoration: 'none'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.textDecoration = 'underline'}
                        onMouseOut={(e) => e.currentTarget.style.textDecoration = 'none'}
                      >
                        info@jayjagannathtravels.com
                      </a>
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 0.5 }}>
                      <a 
                        href="mailto:ashok.sabut@jayjagannathtravels.com" 
                        style={{ 
                          color: 'inherit', 
                          textDecoration: 'none'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.textDecoration = 'underline'}
                        onMouseOut={(e) => e.currentTarget.style.textDecoration = 'none'}
                      >
                        ashok.sabut@jayjagannathtravels.com
                      </a>
                    </Typography>
                  </Box>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                  <LocationIcon sx={{ mr: 2, color: 'primary.main', fontSize: 28, mt: 0.5 }} />
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                      Office Address
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 0.5 }}>
                      Kapileswar<br />
                      Bhubaneswar, Odisha 751002<br />
                      India
                    </Typography>
                  </Box>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <TimeIcon sx={{ mr: 2, color: 'primary.main', fontSize: 28 }} />
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                      Working Hours
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 0.5 }}>
                      Open 24/7<br />
                      Available for bookings anytime
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Paper>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={8}>
            <Paper 
              elevation={3} 
              sx={{ 
                p: 4,
                borderRadius: 3,
                background: 'linear-gradient(to bottom right, #ffffff, #f8f9fa)'
              }}
            >
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: 'primary.main' }}>
                Send us a Message
              </Typography>

              {submitted ? (
                <Alert severity="success" sx={{ mb: 3 }}>
                  Thank you for your message! We will get back to you soon.
                </Alert>
              ) : null}

              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      label="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      label="Your Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      multiline
                      rows={4}
                      label="Your Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      sx={{ 
                        minWidth: 200,
                        borderRadius: 2,
                        py: 1.5,
                        fontSize: '1.1rem',
                        textTransform: 'none',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                        '&:hover': {
                          transform: 'translateY(-2px)',
                          boxShadow: '0 6px 16px rgba(0,0,0,0.2)'
                        }
                      }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>

          {/* Map Section */}
          <Grid item xs={12}>
            <Paper 
              elevation={3} 
              sx={{ 
                p: 0,
                borderRadius: 3,
                overflow: 'hidden',
                height: 300
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.1234567890123!2d85.8245!3d20.2961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909d2d5170aa5%3A0xfc580e2b68b33fa8!2sKapileswar%2C%20Bhubaneswar%2C%20Odisha%20751002!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact; 