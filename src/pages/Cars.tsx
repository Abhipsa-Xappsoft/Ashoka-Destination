import { Box, Container, Typography, Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Cars = () => {
  const navigate = useNavigate();

  const cars = [
    {
      title: 'SUV',
      description: 'Luxurious and spacious SUV perfect for family trips and comfortable travel. Experience premium comfort with our well-maintained SUV fleet.',
      image: '/asset/suv.webp'
    },
    {
      title: 'Tempo Traveller',
      description: 'Ideal for group travel and corporate outings. Our Tempo Traveller offers comfortable seating and ample space for luggage.',
      image: '/asset/Tempo-traveller.webp'
    },
    {
      title: 'Traveller',
      description: 'Perfect for medium-sized groups. Our Traveller vehicles provide a balance of comfort and space for your journey.',
      image: '/asset/traveler.webp'
    },
    {
      title: 'Winger',
      description: 'Premium Winger vehicles for executive travel. Experience luxury and comfort with our well-equipped Winger fleet.',
      image: '/asset/winger01.webp'
    },
    {
      title: 'Innova',
      description: 'Popular choice for family trips and airport transfers. Our Innova vehicles offer premium comfort and reliability.',
      image: '/asset/innova.webp'
    },
    {
      title: 'Innova Crysta',
      description: 'Luxury variant of Innova with enhanced features. Perfect for premium travel experience with extra comfort.',
      image: '/asset/innova2.webp'
    }
  ];

  const dayFarePrices = [
    { vehicle: 'Swift Dzire Saden', dayFare: '1000/-', hrs: '12hrs', km: '14' },
    { vehicle: 'Ertiga 7 sitter', dayFare: '1400/-', hrs: '12hrs', km: '10' },
    { vehicle: 'Innova 7 sitter', dayFare: '1500/-', hrs: '12hrs', km: '10' },
    { vehicle: 'Crysta 7 sitter', dayFare: '1800/-', hrs: '12hrs', km: '10' },
    { vehicle: 'Tavera 9 sitter', dayFare: '1600/-', hrs: '12hrs', km: '10' },
    { vehicle: 'Traveller 14 sitter', dayFare: '2500/-', hrs: '12hrs', km: '6' },
  ];

  const perKmPrices = [
    { vehicle: 'Swift Dzire Saden', perKm: '10/-', dayCharge: '1800/-' },
    { vehicle: 'Ertiga 7 sitter', perKm: '14/-', dayCharge: '2400/-' },
    { vehicle: 'Innova 7 sitter', perKm: '16/-', dayCharge: '2800/-' },
    { vehicle: 'Crysta 7 sitter', perKm: '18/-', dayCharge: '3500/-' },
    { vehicle: 'Traveller 14 sitter', perKm: '23/-', dayCharge: '4000/-' },
  ];

  interface PricingTableProps {
    title: string;
    headers: string[];
    data: Record<string, string>[];
    dataKeys: string[];
  }

  const PricingTable = ({ title, headers, data, dataKeys }: PricingTableProps) => (
    <TableContainer component={Paper} sx={{ mb: 6 }}>
      <Typography variant="h5" component="h3" sx={{ p: 2, bgcolor: 'primary.main', color: 'white' }}>
        {title}
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            {headers.map((header: string, index: number) => <TableCell key={index} sx={{ fontWeight: 'bold' }}>{header}</TableCell>)}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row: Record<string, string>, rowIndex: number) => (
            <TableRow key={rowIndex}>
              {dataKeys.map((key: string, keyIndex: number) => <TableCell key={keyIndex}>{row[key]}</TableCell>)}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

  return (
    <Box sx={{ width: '100%' }}>
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
            Our Fleet
          </Typography>
        </Box>
      </Box>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ py: { xs: 4, sm: 6, md: 8 } }}>
        <Grid container spacing={4}>
          {cars.map((car, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                elevation={3}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 2,
                  overflow: 'hidden',
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.15)'
                  }
                }}
              >
                <Box 
                  sx={{ 
                    width: '100%',
                    height: 250,
                    overflow: 'hidden',
                    position: 'relative'
                  }}
                >
                  <img 
                    src={car.image}
                    alt={car.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease-in-out'
                    }}
                  />
                </Box>
                <Box sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <Typography 
                    variant="h5" 
                    component="h2" 
                    gutterBottom
                    sx={{
                      fontWeight: 700,
                      color: 'primary.main',
                      mb: 2
                    }}
                  >
                    {car.title}
                  </Typography>
                  <Typography 
                    variant="body1" 
                    paragraph
                    sx={{
                      lineHeight: 1.6,
                      color: 'text.secondary',
                      mb: 3,
                      flexGrow: 1
                    }}
                  >
                    {car.description}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={() => navigate('/booking')}
                    sx={{
                      width: '100%',
                      py: 1.5,
                      fontSize: '1rem',
                      fontWeight: 600,
                      boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 6px 16px rgba(0,0,0,0.2)'
                      },
                      transition: 'all 0.3s ease-in-out'
                    }}
                  >
                    Book Now
                  </Button>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Typography variant="h3" component="h2" align="center" gutterBottom sx={{ fontWeight: 700, color: 'primary.main', mb: 6, mt: 8 }}>
          Day Basic Price List
        </Typography>
        <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
                <PricingTable 
                    title="Day Fare"
                    headers={['Vehicle Type', 'Day Fare', 'Hours', 'KM/L']}
                    data={dayFarePrices}
                    dataKeys={['vehicle', 'dayFare', 'hrs', 'km']}
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <PricingTable 
                    title="Per K.M & Day Charge"
                    headers={['Vehicle Type', 'Per K.M', 'Under 100km Day Charge']}
                    data={perKmPrices}
                    dataKeys={['vehicle', 'perKm', 'dayCharge']}
                />
            </Grid>
        </Grid>

        <Box sx={{ mt: 8, p: 4, bgcolor: 'grey.100', borderRadius: 2 }}>
            <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 600 }}>Important Notes</Typography>
            <Typography variant="body1" component="ul" sx={{ pl: 2 }}>
                <li>We are Provided Neat & Clean vehicle all the time Along with a Good Driver.</li>
                <li>If there are many Tourists In the market then the price of the Taxi may also Increase.</li>
                <li>Maximum Time Airport Pickup & Drop Taxi price is increase.</li>
            </Typography>
        </Box>

      </Container>
    </Box>
  );
};

export default Cars; 