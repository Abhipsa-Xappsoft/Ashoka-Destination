import { Box, Container, Typography, Button, Grid, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {
  DirectionsCar as CarIcon,
  FlightTakeoff as FlightIcon,
  PhoneAndroid as MobileIcon,
  PersonAdd as DriverIcon,
  People as PeopleIcon,
  DirectionsCarFilled as CarFilledIcon,
  EmojiEvents as TrophyIcon,
  Person as PersonIcon,
  Commute as CommuteIcon,
  Settings as SettingsIcon
} from '@mui/icons-material';

const Home = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: 'Travel Anywhere in Bhubaneshwar',
      icon: <CommuteIcon sx={{ fontSize: 60 }} />,
      description: 'Planning to visit places outside Bhubaneshwar? You can sit back & let our drivers show you the best of Bhubaneshwar as well as take you outstation. Best fares & best cabs at your service.'
    },
    {
      title: 'Bhubaneshwar Airport Transfers',
      icon: <FlightIcon sx={{ fontSize: 60 }} />,
      description: 'Let us know your flight arrival / departure times & we will take care of the rest. We provide easy Bhubaneshwar Airport pick ups. Convenience at your fingertips.'
    },
    {
      title: 'Easy Booking From Mobile',
      icon: <MobileIcon sx={{ fontSize: 60 }} />,
      description: 'We accept bookings via Mobile Phone. Give us a call, let us know your Car Rental needs, your travel plans in Bhubaneshwar & we will book your car right away.'
    },
    {
      title: 'Flexi Rental Packages',
      icon: <SettingsIcon sx={{ fontSize: 60 }} />,
      description: 'We have one for every one! Drive by Daily / Weekly / Monthly / Short Term Lease Rentals or Go One Way.'
    },
    {
      title: 'Additional Driver',
      icon: <DriverIcon sx={{ fontSize: 60 }} />,
      description: 'Long Drives Can Be Tiring. Add Your Friend Or Family Member To Be Your Co-driver.'
    }
  ];

  const stats = [
    { icon: <PeopleIcon sx={{ fontSize: 40 }} />, value: '25000+', label: 'Happy Customers' },
    { icon: <CarFilledIcon sx={{ fontSize: 40 }} />, value: '50+', label: 'Cars' },
    { icon: <TrophyIcon sx={{ fontSize: 40 }} />, value: '9+', label: 'Years Experience' },
    { icon: <PersonIcon sx={{ fontSize: 40 }} />, value: '25+', label: 'Drivers' }
  ];

  const services = [
    {
      title: 'Picnic & Vacation Cars',
      icon: <CarIcon sx={{ fontSize: 40 }} />,
      description: 'Perfect for family outings and vacations',
      image: '/asset/picnic-car.webp'
    },
    {
      title: 'Long Tour',
      icon: <CarIcon sx={{ fontSize: 40 }} />,
      description: 'Comfortable rides for extended journeys',
      image: '/asset/longtour.webp'
    },
    {
      title: 'Airport Transfer Car',
      icon: <FlightIcon sx={{ fontSize: 40 }} />,
      description: 'Reliable airport pickup and drop services',
      image: '/asset/airport.webp'
    },
    {
      title: 'Luxury Wedding Cars',
      icon: <CarIcon sx={{ fontSize: 40 }} />,
      description: 'Make your special day even more memorable',
      image: '/asset/wedding.webp'
    },
    {
      title: 'Corporate Tour',
      icon: <CarIcon sx={{ fontSize: 40 }} />,
      description: 'Professional transportation for business needs',
      image: '/asset/corporate.webp'
    }
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          height: { xs: '60vh', sm: '70vh', md: '80vh' },
          width: '100%',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7))',
            zIndex: 1
          }
        }}
      >
        {/* Hero Background Image */}
        <Box
          component="img"
          src="/asset/1.webp"
          alt="Luxury Car Service"
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center'
          }}
        />

        {/* Hero Content */}
        <Container 
          maxWidth="lg" 
          sx={{ 
            position: 'relative',
            zIndex: 2,
            textAlign: 'center',
            color: 'white'
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
              fontWeight: 700,
              mb: 2,
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
            }}
          >
            Premium Car Rental Services
          </Typography>
          
          <Typography
            variant="h5"
            sx={{
              mb: 4,
              maxWidth: '800px',
              mx: 'auto',
              textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
            }}
          >
            Experience luxury and comfort with our premium fleet of vehicles
          </Typography>

          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <Button
                variant="contained"
                size="large"
                onClick={() => navigate('/booking')}
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  textTransform: 'none',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 6px 16px rgba(0,0,0,0.3)'
                  }
                }}
              >
                Book Now
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                size="large"
                onClick={() => navigate('/cars')}
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  textTransform: 'none',
                  borderColor: 'white',
                  color: 'white',
                  '&:hover': {
                    borderColor: 'white',
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    transform: 'translateY(-2px)'
                  }
                }}
              >
                View Fleet
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, sm: 8, md: 10 } }}>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  height: '100%',
                  textAlign: 'center',
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
                    bgcolor: 'action.hover'
                  },
                }}
              >
                <Box sx={{ mb: 2, color: 'primary.main' }}>{feature.icon}</Box>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                  {feature.title}
                </Typography>
                <Typography color="text.secondary">
                  {feature.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Stats Section */}
      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: { xs: 6, sm: 8, md: 10 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} justifyContent="center">
            {stats.map((stat, index) => (
              <Grid item xs={6} sm={3} key={index}>
                <Box 
                  sx={{
                    textAlign: 'center',
                    p: 3,
                    bgcolor: 'rgba(255, 255, 255, 0.08)',
                    borderRadius: 2,
                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
                      bgcolor: 'rgba(255, 255, 255, 0.15)'
                    }
                  }}
                >
                  {stat.icon}
                  <Typography variant="h4" sx={{ fontWeight: 700, my: 1 }}>
                    {stat.value}
                  </Typography>
                  <Typography variant="subtitle1">
                    {stat.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* About Section */}
      <Container maxWidth="lg" sx={{
        py: { xs: 6, sm: 8, md: 10 },
        transition: 'background-color 0.3s ease',
        '&:hover': {
          bgcolor: 'action.hover'
        }
      }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: { xs: 4, md: 0 } }}>
              <img 
                src="/asset/alwaystehre.webp" 
                alt="We are always there to serve you"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: 8,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" component="h2" gutterBottom sx={{ mb: 2, textAlign: { xs: 'center', md: 'left' } }}>
              We are always there to serve you
            </Typography>
            <Typography variant="body1" paragraph sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              Ashoka Destination in Kapilswar, Bhubaneshwar is a top player in the category Car Rental in the Bhubaneshwar. This well-known establishment acts as a one-stop destination servicing customers both local and from other parts of Bhubaneshwar. Over the course of its journey, this business has established a firm foothold in it's industry. The belief that customer satisfaction is as important as their products and services, have helped this establishment garner a vast base of customers, which continues to grow by the day. This business employs individuals that are dedicated towards their respective roles and put in a lot of effort to achieve the common vision and larger goals of the company. In the near future, this business aims to expand its line of products and services and cater to a larger client base.
            </Typography>
          </Grid>
        </Grid>
      </Container>

      {/* Services Section */}
      <Box sx={{ bgcolor: 'grey.100', py: { xs: 6, sm: 8, md: 10 } }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h3" 
            component="h2" 
            gutterBottom 
            align="center" 
            sx={{
              mb: 2,
              fontWeight: 700,
              color: 'primary.dark'
            }}
          >
            SO MANY CHOICE
          </Typography>
          <Typography 
            variant="h4" 
            component="h3" 
            gutterBottom 
            align="center" 
            sx={{
              mb: 6,
              fontWeight: 600,
              color: 'text.secondary'
            }}
          >
            A Car for Every Need!
          </Typography>
          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Paper
                  elevation={3}
                  onClick={() => navigate('/')}
                  sx={{
                    p: 4,
                    height: '100%',
                    textAlign: 'center',
                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                    cursor: 'pointer',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
                    },
                  }}
                >
                  <Box sx={{ mb: 2, width: '100%', height: 180, overflow: 'hidden', borderRadius: 1 }}>
                    <img 
                      src={service.image} 
                      alt={service.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  </Box>
                  <Box sx={{ mb: 2, color: 'primary.main' }}>
                    {service.icon}
                  </Box>
                  <Typography variant="h5" gutterBottom sx={{ mt: 2, fontWeight: 600 }}>
                    {service.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {service.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{
        bgcolor: 'primary.main',
        color: 'white',
        py: { xs: 6, sm: 8, md: 10 },
        textAlign: 'center',
        transition: 'background-color 0.3s ease',
        '&:hover': {
          bgcolor: 'primary.dark'
        }
      }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h4" 
            component="h2" 
            gutterBottom 
            sx={{
              mb: 2,
              fontWeight: 700
            }}
          >
            PICKUP AT YOUR LOCATION
          </Typography>
          <Typography 
            variant="h5" 
            component="h3" 
            gutterBottom 
            sx={{ 
              mb: 2,
              opacity: 0.9
            }}
          >
            Yes, just at home!
          </Typography>
          <Typography 
            variant="h6" 
            component="p" 
            sx={{
              mb: 4,
              opacity: 0.8
            }}
          >
            Hire a car never been easier!
          </Typography>
          <Box sx={{ textAlign: 'center' }}>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              onClick={() => navigate('/booking')}
              sx={{ 
                px: 6,
                py: 2,
                fontSize: '1.2rem',
                fontWeight: 600
              }}
            >
              Book Now
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Home; 