import { Box, Container, Grid, Typography, TextField, Button, Link, Checkbox, FormControlLabel } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn, Phone, Email, LocationOn } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#1a1a1a',
        color: 'white',
        py: 8,
        mt: 'auto',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, #2196f3, #f50057)'
        }
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* About Section */}
          <Grid item xs={12} md={4}>
            <Typography 
              variant="h6" 
              gutterBottom 
              sx={{ 
                fontSize: '1.5rem',
                fontWeight: 600,
                color: '#2196f3',
                mb: 3
              }}
            >
              About Us
            </Typography>
            <Typography 
              variant="body2" 
              sx={{ 
                mb: 3,
                lineHeight: 1.8,
                color: 'rgba(255, 255, 255, 0.8)'
              }}
            >
               Ashoka Destination in Kapilswar, Bhubaneshwar is a top player in the category Car Rental in the Bhubaneshwar. This well-known establishment acts as a one-stop destination servicing customers both local and from other parts of Bhubaneshwar.
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Link 
                href="https://facebook.com" 
                color="inherit" 
                sx={{ 
                  mr: 2,
                  '&:hover': { color: '#2196f3' },
                  transition: 'color 0.3s ease'
                }}
              >
                <Facebook sx={{ fontSize: 28 }} />
              </Link>
              <Link 
                href="https://twitter.com" 
                color="inherit" 
                sx={{ 
                  mr: 2,
                  '&:hover': { color: '#2196f3' },
                  transition: 'color 0.3s ease'
                }}
              >
                <Twitter sx={{ fontSize: 28 }} />
              </Link>
              <Link 
                href="https://instagram.com" 
                color="inherit" 
                sx={{ 
                  mr: 2,
                  '&:hover': { color: '#2196f3' },
                  transition: 'color 0.3s ease'
                }}
              >
                <Instagram sx={{ fontSize: 28 }} />
              </Link>
              <Link 
                href="https://linkedin.com" 
                color="inherit"
                sx={{ 
                  '&:hover': { color: '#2196f3' },
                  transition: 'color 0.3s ease'
                }}
              >
                <LinkedIn sx={{ fontSize: 28 }} />
              </Link>
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={4}>
            <Typography 
              variant="h6" 
              gutterBottom 
              sx={{ 
                fontSize: '1.5rem',
                fontWeight: 600,
                color: '#2196f3',
                mb: 3
              }}
            >
              CONTACT INFO
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <LocationOn sx={{ color: '#2196f3' }} />
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                  Old Town, Kapilswar, Bhubaneshwar
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Phone sx={{ color: '#2196f3' }} />
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                  +91 9124747676, +91 9437307683
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Email sx={{ color: '#2196f3' }} />
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                  info@jayjagannathtravels.com
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Email sx={{ color: '#2196f3' }} />
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                  ashok.sabut@jayjagannathtravels.com
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Useful Links */}
          <Grid item xs={12} md={4}>
            <Typography 
              variant="h6" 
              gutterBottom 
              sx={{ 
                fontSize: '1.5rem',
                fontWeight: 600,
                color: '#2196f3',
                mb: 3
              }}
            >
              Useful Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {['Home', 'About Us', 'Tours', 'Gallery', 'Booking', 'Contact Us'].map((link) => (
                <Link
                  key={link}
                  href={`/${link.toLowerCase().replace(' ', '-')}`}
                  color="inherit"
                  underline="none"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    '&:hover': {
                      color: '#2196f3',
                      transform: 'translateX(8px)',
                      transition: 'all 0.3s ease'
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
                  {link}
                </Link>
              ))}
            </Box>
          </Grid>
        </Grid>

        {/* Contact Form */}
        <Box 
          sx={{ 
            mt: 6, 
            mb: 4,
            p: 3,
            bgcolor: 'rgba(255, 255, 255, 0.05)',
            borderRadius: 2,
            maxWidth: '800px',
            mx: 'auto'
          }}
        >
          <Typography 
            variant="h6" 
            gutterBottom 
            sx={{ 
              fontSize: '1.3rem',
              fontWeight: 600,
              color: '#2196f3',
              mb: 2
            }}
          >
            CONTACT & SUBSCRIBE US
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                size="small"
                placeholder="Your name"
                variant="outlined"
                sx={{
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: 1,
                  '& .MuiOutlinedInput-root': {
                    color: 'white',
                    '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.2)' },
                    '&:hover fieldset': { borderColor: '#2196f3' },
                    '&.Mui-focused fieldset': { borderColor: '#2196f3' }
                  },
                  '& .MuiInputBase-input::placeholder': {
                    color: 'rgba(255, 255, 255, 0.5)',
                    opacity: 1
                  }
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                size="small"
                placeholder="Enter your email"
                variant="outlined"
                sx={{
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: 1,
                  '& .MuiOutlinedInput-root': {
                    color: 'white',
                    '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.2)' },
                    '&:hover fieldset': { borderColor: '#2196f3' },
                    '&.Mui-focused fieldset': { borderColor: '#2196f3' }
                  },
                  '& .MuiInputBase-input::placeholder': {
                    color: 'rgba(255, 255, 255, 0.5)',
                    opacity: 1
                  }
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                size="small"
                multiline
                rows={2}
                placeholder="Your messages"
                variant="outlined"
                sx={{
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: 1,
                  '& .MuiOutlinedInput-root': {
                    color: 'white',
                    '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.2)' },
                    '&:hover fieldset': { borderColor: '#2196f3' },
                    '&.Mui-focused fieldset': { borderColor: '#2196f3' }
                  },
                  '& .MuiInputBase-input::placeholder': {
                    color: 'rgba(255, 255, 255, 0.5)',
                    opacity: 1
                  }
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 1 }}>
                <FormControlLabel
                  control={
                    <Checkbox 
                      size="small"
                      sx={{ 
                        color: 'rgba(255, 255, 255, 0.5)',
                        '&.Mui-checked': {
                          color: '#2196f3'
                        }
                      }} 
                    />
                  }
                  label="Also subscribe to your e-mail *"
                  sx={{ color: 'rgba(255, 255, 255, 0.8)' }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  size="medium"
                  sx={{ 
                    px: 3,
                    py: 1,
                    fontSize: '0.9rem',
                    textTransform: 'none',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 4px 8px rgba(33, 150, 243, 0.3)'
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
                  Send Message
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Copyright */}
        <Box
          sx={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            pt: 3,
            mt: 3,
            textAlign: 'center'
          }}
        >
          <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.6)' }}>
            Design & Developed by{' '}
            <Link
              href="https://xappsoft.com"
              color="inherit"
              underline="hover"
              sx={{ 
                fontWeight: 'bold',
                color: '#2196f3',
                '&:hover': {
                  color: '#64b5f6'
                }
              }}
            >
              Xappsoft Technologies
            </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 