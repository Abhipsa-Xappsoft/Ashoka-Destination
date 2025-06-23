import { Container, Typography, Grid, Card, CardMedia, Box } from '@mui/material';

const galleryImages = [
  {
    id: 1,
    title: 'Luxury Fleet',
    image: '/asset/a (1).webp'
  },
  {
    id: 2,
    title: 'City Tours',
    image: '/asset/a (2).webp'
  },
  {
    id: 3,
    title: 'Airport Transfer',
    image: '/asset/a (3).webp'
  },
  {
    id: 4,
    title: 'Corporate Service',
    image: '/asset/a (4).webp'
  }
];

const Gallery = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          height: { xs: '40vh', sm: '50vh', md: '60vh' },
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
          alt="Gallery Hero"
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
            Our Gallery
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
            Take a look at our premium fleet and exceptional services
          </Typography>
        </Container>
      </Box>

      {/* Gallery Grid Section */}
      <Box sx={{ 
        bgcolor: 'background.default',
        py: { xs: 6, sm: 8, md: 10 }
      }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {galleryImages.map((item) => (
              <Grid item key={item.id} xs={12} sm={6} md={3}>
                <Card 
                  sx={{ 
                    height: '100%',
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: 4,
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer',
                    '&:hover': {
                      transform: 'translateY(-12px)',
                      boxShadow: '0 12px 30px rgba(0,0,0,0.2)',
                      '& .MuiCardMedia-root': {
                        transform: 'scale(1.1)'
                      },
                      '& .MuiBox-root': {
                        opacity: 1,
                        transform: 'translateY(0)',
                        bgcolor: 'rgba(0, 0, 0, 0.8)'
                      }
                    }
                  }}
                >
                  <CardMedia
                    component="img"
                    height="400"
                    image={item.image}
                    alt={item.title}
                    sx={{
                      transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                      objectFit: 'cover',
                      filter: 'brightness(0.9)'
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      bgcolor: 'rgba(0, 0, 0, 0.7)',
                      color: 'white',
                      p: 3,
                      opacity: 0.9,
                      transform: 'translateY(0)',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      backdropFilter: 'blur(4px)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      minHeight: '40%'
                    }}
                  >
                    <Typography 
                      variant="h5" 
                      sx={{ 
                        fontWeight: 600,
                        textAlign: 'center',
                        textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                        mb: 1
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        textAlign: 'center',
                        opacity: 0.9,
                        textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
                      }}
                    >
                      Click to view details
                    </Typography>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Gallery; 