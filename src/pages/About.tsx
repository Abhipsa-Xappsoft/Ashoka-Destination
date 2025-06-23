import { Container, Typography, Box, Grid } from '@mui/material';

const About = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box 
        sx={{ 
          width: '100%',
          height: { xs: '300px', md: '400px' },
          position: 'relative',
          overflow: 'hidden',
          mb: 6
        }}
      >
        <img 
          src="/asset/1.webp"
          alt="Hero background"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'brightness(0.7)'
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            color: 'white',
            width: '100%'
          }}
        >
          <Typography 
            variant="h2" 
            component="h1"
            sx={{
              fontWeight: 700,
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
              mb: 2
            }}
          >
            About Us
          </Typography>
        </Box>
      </Box>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ py: { xs: 4, sm: 6, md: 8 } }}>
        <Grid container spacing={4} alignItems="center">
          {/* Left Column - Image */}
          <Grid item xs={12} md={6}>
            <Box 
              sx={{ 
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  top: 20,
                  left: 20,
                  right: -20,
                  bottom: -20,
                  border: '2px solid',
                  borderColor: 'primary.main',
                  zIndex: -1,
                  borderRadius: 2
                }
              }}
            >
              <img 
                src="/asset/winger (1).webp"
                alt="Winger vehicle"
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 8,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                }}
              />
            </Box>
          </Grid>

          {/* Right Column - Content */}
          <Grid item xs={12} md={6}>
            <Typography 
              variant="h3" 
              component="h2" 
              gutterBottom 
              sx={{
                fontWeight: 700,
                color: 'primary.main',
                mb: 2
              }}
            >
              Ashoka Destination
            </Typography>
            
            <Typography 
              variant="h5" 
              component="h3" 
              gutterBottom 
              sx={{
                mb: 3,
                color: 'text.secondary'
              }}
            >
              We are always there to serve you
            </Typography>

            <Typography 
              variant="body1" 
              paragraph 
              sx={{
                lineHeight: 1.8,
                color: 'text.primary',
                mb: 2
              }}
            >
              Ashoka Destination in Kapilswar, Bhubaneshwar is a top player in the category Car Rental in the Bhubaneshwar. This well-known establishment acts as a one-stop destination servicing customers both local and from other parts of Bhubaneshwar.
            </Typography>

            <Typography 
              variant="body1" 
              paragraph 
              sx={{
                lineHeight: 1.8,
                color: 'text.primary'
              }}
            >
              Over the course of its journey, this business has established a firm foothold in it's industry. The belief that customer satisfaction is as important as their products and services, have helped this establishment garner a vast base of customers, which continues to grow by the day. This business employs individuals that are dedicated towards their respective roles and put in a lot of effort to achieve the common vision and larger goals of the company. In the near future, this business aims to expand its line of products and services and cater to a larger client base.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About; 