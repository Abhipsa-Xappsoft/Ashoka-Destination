import { Container, Typography, Box, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import {
  LocationOn as LocationIcon,
  FlightTakeoff as FlightIcon,
  FlightLand as FlightLandIcon
} from '@mui/icons-material';

const Tours = () => {
  const tourDestinations = [
    {
      title: 'Bhubaneswar',
      icon: <LocationIcon sx={{ fontSize: 40 }} />,
      description: 'Explore the temple city with our comfortable taxi services',
      image: '/asset/bbsr.webp'
    },
    {
      title: 'Cuttack',
      icon: <LocationIcon sx={{ fontSize: 40 }} />,
      description: 'Visit the silver city with our reliable transportation',
      image: '/asset/cuttack.webp'
    },
    {
      title: 'Puri',
      icon: <LocationIcon sx={{ fontSize: 40 }} />,
      description: 'Experience the spiritual journey to the holy city',
      image: '/asset/puri.webp'
    },
    {
      title: 'Airport Drop',
      icon: <FlightIcon sx={{ fontSize: 40 }} />,
      description: 'Reliable airport drop services for your convenience',
      image: '/asset/airport.webp'
    },
    {
      title: 'Airport Receive',
      icon: <FlightLandIcon sx={{ fontSize: 40 }} />,
      description: 'Comfortable pickup services from the airport',
      image: '/asset/airport.webp'
    }
  ];

  const oneWayPrices = [
    { from: 'Bhubaneswar Railway Station & Airport', to: 'Puri (One Side Pick-up & Drop)', prices: [
      { vehicle: 'Swift Dzire 4 sitter', amount: '1100/-' },
      { vehicle: 'Ertiga 7 sitter', amount: '1600/-' },
      { vehicle: 'Innova 7 sitter', amount: '1700/-' },
      { vehicle: 'Crysta 7 sitter', amount: '2200/-' },
      { vehicle: 'Tavera 9 sitter', amount: '1800/-' },
      { vehicle: 'Winger 13/15 sitter', amount: '2800/-' },
    ]},
    { from: 'Bhubaneswar', to: 'Berhapur (One Side Pick-up & Drop)', prices: [
      { vehicle: 'Swift Dzire 4 sitter', amount: '2200/-' },
      { vehicle: 'Ertiga 7 sitter', amount: '3500/-' },
      { vehicle: 'Innova 7 sitter', amount: '4000/-' },
      { vehicle: 'Crysta 7 sitter', amount: '4500/-' },
      { vehicle: 'Tavera 9 sitter', amount: '3800/-' },
      { vehicle: 'Winger 13/15 sitter', amount: '5200/-' },
    ]},
    { from: 'Bhubaneswar', to: 'Anugul (One Side Pick-up & Drop)', prices: [
      { vehicle: 'Swift Dzire 4 sitter', amount: '2200/-' },
      { vehicle: 'Ertiga 7 sitter', amount: '3200/-' },
    ]},
      { from: 'Bhubaneswar', to: 'Talcher (One Side Pick-up & Drop)', prices: [
      { vehicle: 'Swift Dzire 4 sitter', amount: '2500/-' },
      { vehicle: 'Ertiga 7 sitter', amount: '3800/-' },
    ]},
    { from: 'Bhubaneswar', to: 'Cuttack (One Side Pick-up & Drop)', prices: [
      { vehicle: 'Swift Dzire 4 sitter', amount: '800/-' },
      { vehicle: 'Ertiga 7 sitter', amount: '1000/-' },
    ]},
    { from: 'Bhubaneswar', to: 'Jajpur (One Side Pick-up & Drop)', prices: [
      { vehicle: 'Swift Dzire 4 sitter', amount: '2500/-' },
      { vehicle: 'Ertiga 7 sitter', amount: '3500/-' },
    ]},
    { from: 'Bhubaneswar', to: 'Baleswar (One Side Pick-up & Drop)', prices: [
      { vehicle: 'Swift Dzire 4 sitter', amount: '3500/-' },
      { vehicle: 'Ertiga 7 sitter', amount: '4500/-' },
    ]},
  ];
  
  const roundTripPrices = [
      { from: 'Bhubaneswar', to: 'Puri (Round Trip)', prices: [
          { vehicle: 'Swift Dzire 4 sitter', amount: '2500/-' },
          { vehicle: 'Ertiga 7 sitter', amount: '3000/-' },
          { vehicle: 'Innova 7 sitter', amount: '3400/-' },
          { vehicle: 'Crysta 7 sitter', amount: '3800/-' },
          { vehicle: 'Tavera 9 sitter', amount: '3200/-' },
          { vehicle: 'Winger 13/15 sitter', amount: '4800/-' },
      ]},
      { from: 'Bhubaneswar Local & Puri, Konark / BBSR', to: 'Chilika (Round Trip)', prices: [
          { vehicle: 'Swift Dzire 4 sitter', amount: '2850/-' },
          { vehicle: 'Ertiga 7 sitter', amount: '3450/-' },
          { vehicle: 'Innova 7 sitter', amount: '3750/-' },
          { vehicle: 'Crysta 7 sitter', amount: '4200/-' },
          { vehicle: 'Tavera 9 sitter', amount: '3400/-' },
          { vehicle: 'Winger 13/15 sitter', amount: '5500/-' },
      ]},
  ];

  const extraCharges = [
    { place: 'Konark Temple', price: '800/-' },
    { place: 'Lingaraj Temple', price: '200/-' },
    { place: 'Dhauligiri Stupa', price: '200/-' },
    { place: 'Sakhigopal Temple', price: '200/-' },
    { place: 'Khandagiri Udayagiri', price: '300/-' },
    { place: 'Nadankan Zoo Park', price: '700/-' },
    { place: 'Night 10pm to 5am Trip', price: '200/-' },
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
    <Box sx={{ bgcolor: '#f8f9fa' }}>
      {/* Hero Section */}
      <Box 
        sx={{ 
          width: '100%',
          height: { xs: '400px', md: '500px' },
          position: 'relative',
          overflow: 'hidden',
          mb: 8
        }}
      >
        <img 
          src="/asset/1.webp"
          alt="Hero background"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'brightness(0.6)'
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
            width: '100%',
            zIndex: 1
          }}
        >
          <Typography 
            variant="h1" 
            component="h1"
            sx={{
              fontWeight: 800,
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
              mb: 2,
              fontSize: { xs: '2.5rem', md: '3.5rem' }
            }}
          >
            Taxi Tours
          </Typography>
          <Typography
            variant="h5"
            sx={{
              textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
              opacity: 0.9
            }}
          >
            Explore Odisha with Comfort and Style
          </Typography>
        </Box>
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '100px',
            background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)'
          }}
        />
      </Box>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ py: { xs: 4, sm: 6, md: 8 } }}>
        <Typography 
          variant="h2" 
          component="h2" 
          gutterBottom 
          align="center"
          sx={{
            mb: 1,
            fontWeight: 700,
            color: 'primary.main',
            fontSize: { xs: '2rem', md: '2.5rem' }
          }}
        >
          Popular Tour Destinations
      </Typography>
      
        <Typography 
          variant="h5" 
          component="h3" 
          gutterBottom 
          align="center"
          sx={{
            mb: 8,
            color: 'text.secondary',
            maxWidth: '800px',
            mx: 'auto'
          }}
        >
          Discover the best of Odisha with our premium taxi services
      </Typography>

        <Grid container spacing={4}>
          {tourDestinations.map((destination, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                elevation={3}
                sx={{
                  height: '100%',
                  textAlign: 'center',
                  transition: 'all 0.3s ease-in-out',
                  overflow: 'hidden',
                  position: 'relative',
                  borderRadius: 3,
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: '0 12px 24px rgba(0,0,0,0.2)',
                    '& .destination-image': {
                      transform: 'scale(1.1)'
                    },
                    '& .destination-content': {
                      bgcolor: 'rgba(255,255,255,0.95)'
                    }
                  },
                }}
              >
                <Box 
                  sx={{ 
                    width: '100%',
                    height: 250,
                    overflow: 'hidden',
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.6))',
                      opacity: 0.7,
                      transition: 'opacity 0.3s ease-in-out'
                    },
                    '&:hover::after': {
                      opacity: 0.4
                    }
                  }}
                >
                  <img 
                    src={destination.image}
                    alt={destination.title}
                    className="destination-image"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                      transform: 'scale(1)',
                      filter: 'brightness(0.9)',
                      cursor: 'pointer'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'scale(1.15)';
                      e.currentTarget.style.filter = 'brightness(1.1)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.filter = 'brightness(0.9)';
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(45deg, rgba(33,150,243,0.2), transparent)',
                      opacity: 0,
                      transition: 'opacity 0.3s ease-in-out',
                      '&:hover': {
                        opacity: 1
                      }
                    }}
                  />
                </Box>
                <Box 
                  className="destination-content"
                  sx={{ 
                    p: 4,
                    transition: 'background-color 0.3s ease-in-out',
                    position: 'relative',
                    zIndex: 1
                  }}
                >
                  <Box 
                    sx={{ 
                      mb: 2, 
                      color: 'primary.main',
                      transform: 'scale(1.2)',
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'scale(1.4)'
                      }
                    }}
                  >
                    {destination.icon}
                  </Box>
                  <Typography 
                    variant="h4" 
                    gutterBottom 
                    sx={{
                      fontWeight: 600,
                      color: 'text.primary',
                      fontSize: { xs: '1.5rem', md: '1.75rem' }
                    }}
                  >
                    {destination.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {destination.description}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Typography variant="h3" component="h2" align="center" gutterBottom sx={{ fontWeight: 700, color: 'primary.main', mb: 6, mt: 8 }}>
          One Way Prices
        </Typography>
        <Grid container spacing={4}>
          {oneWayPrices.map((trip, index) => (
            <Grid item xs={12} md={6} key={index}>
              <PricingTable 
                title={`${trip.from} to ${trip.to}`}
                headers={['Vehicle Type', 'Amount']}
                data={trip.prices}
                dataKeys={['vehicle', 'amount']}
              />
            </Grid>
          ))}
        </Grid>
        
        <Typography variant="h4" component="h3" align="center" gutterBottom sx={{ fontWeight: 700, color: 'primary.dark', mb: 2, mt: 6 }}>
          Extra Charges (On the way from Bhubaneswar to Puri)
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 4 }}>
          All prices include Toll & Parking.
        </Typography>
        <PricingTable 
          title="Sightseeing"
          headers={['Place', 'Price']}
          data={extraCharges}
          dataKeys={['place', 'price']}
        />

        <Typography variant="h3" component="h2" align="center" gutterBottom sx={{ fontWeight: 700, color: 'primary.main', mb: 6, mt: 8 }}>
          Round Trip Prices
        </Typography>
        <Grid container spacing={4}>
          {roundTripPrices.map((trip, index) => (
            <Grid item xs={12} md={6} key={index}>
              <PricingTable 
                title={`${trip.from} to ${trip.to}`}
                headers={['Vehicle Type', 'Amount']}
                data={trip.prices}
                dataKeys={['vehicle', 'amount']}
              />
            </Grid>
          ))}
        </Grid>
        <Typography variant="body1" align="center" sx={{ fontStyle: 'italic', mt: 2 }}>
            Bhubaneswar to Puri Round Trip Extras: Toll & Parking, Driver Fooding, Up to 250km, Nighhalt Extra 500/-
        </Typography>

        {/* Contact Information */}
        <Box 
          sx={{ 
            mt: 10,
            textAlign: 'center',
            p: { xs: 4, md: 6 },
            bgcolor: 'primary.main',
            color: 'white',
            borderRadius: 4,
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(45deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)',
              zIndex: 1
            }
          }}
        >
          <Typography 
            variant="h3" 
            gutterBottom
            sx={{ 
              fontWeight: 700,
              mb: 3,
              position: 'relative',
              zIndex: 2
            }}
          >
            Contact Us for Tour Bookings
          </Typography>
          <Typography 
            variant="h5"
            sx={{ 
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: 'center',
              gap: 3,
              position: 'relative',
              zIndex: 2
            }}
          >
            <Box 
              sx={{ 
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                '&:hover': {
                  transform: 'scale(1.05)',
                  transition: 'transform 0.3s ease-in-out'
                }
              }}
            >
              +91 9124747676
            </Box>
            <Box 
              sx={{ 
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                '&:hover': {
                  transform: 'scale(1.05)',
                  transition: 'transform 0.3s ease-in-out'
                }
              }}
            >
              +91 9437307683
            </Box>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Tours; 