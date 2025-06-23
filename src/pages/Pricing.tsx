import { Box, Container, Typography, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Card, CardContent, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import { CheckCircleOutline } from '@mui/icons-material';

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

const extraCharges = [
    { place: 'Konark Temple', price: '800/-' },
    { place: 'Lingaraj Temple', price: '200/-' },
    { place: 'Dhauligiri Stupa', price: '200/-' },
    { place: 'Sakhigopal Temple', price: '200/-' },
    { place: 'Khandagiri Udayagiri', price: '300/-' },
    { place: 'Nadankan Zoo Park', price: '700/-' },
    { place: 'Night 10pm to 5am Trip', price: '200/-' },
];

const PricingCard = ({ title, data }:{title:any,data:any}) => (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', transition: 'all 0.3s ease-in-out', '&:hover': { transform: 'translateY(-8px)', boxShadow: 6 } }}>
        <CardContent sx={{ flexGrow: 1 }}>
            <Typography variant="h5" component="h3" sx={{ p: 2, bgcolor: 'primary.main', color: 'white', textAlign: 'center', borderRadius: '4px 4px 0 0' }}>
                {title}
            </Typography>
            <List>
                {data.map((item:any, index:any) => (
                    <ListItem key={index}>
                        <ListItemIcon><CheckCircleOutline color="primary" /></ListItemIcon>
                        <ListItemText primary={`${item.vehicle}: ${item.amount || item.dayFare || item.perKm}`} secondary={item.hrs ? `(${item.hrs}, ${item.km}km/l)` : item.dayCharge ? `Day Charge: ${item.dayCharge}`: ''} />
                    </ListItem>
                ))}
            </List>
        </CardContent>
    </Card>
);

const PricingTable = ({ title, headers, data, dataKeys }:{title:any, headers:any, data:any, dataKeys:any}) => (
    <TableContainer component={Paper} sx={{ mb: 4, boxShadow: 3, borderRadius: 2 }}>
      <Typography variant="h6" component="h4" sx={{ p: 2, bgcolor: 'secondary.main', color: 'white' }}>
        {title}
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            {headers.map((header:any, index:any) => <TableCell key={index} sx={{ fontWeight: 'bold' }}>{header}</TableCell>)}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row:any, rowIndex:any) => (
            <TableRow key={rowIndex} sx={{ '&:nth-of-type(odd)': { backgroundColor: 'action.hover' } }}>
              {dataKeys.map((key:any, keyIndex:any) => <TableCell key={keyIndex}>{row[key]}</TableCell>)}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

const Pricing = () => {
  return (
    <Box>
      <Box sx={{ width: '100%', height: { xs: '300px', md: '400px' }, position: 'relative', overflow: 'hidden', mb: 6 }}>
        <img src="/asset/slider.webp" alt="Pricing background" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.7)' }} />
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white', width: '100%' }}>
          <Typography variant="h2" component="h1" sx={{ fontWeight: 700, textShadow: '2px 2px 4px rgba(0,0,0,0.5)', mb: 2 }}>
            Our Pricing
          </Typography>
        </Box>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 4, sm: 6, md: 8 } }}>
        <Typography variant="h3" component="h2" align="center" gutterBottom sx={{ fontWeight: 700, color: 'primary.main', mb: 6 }}>
          One Way Prices
        </Typography>
        <Grid container spacing={4}>
          {oneWayPrices.map((trip, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <PricingCard title={`${trip.from} to ${trip.to}`} data={trip.prices.map(p => ({...p, vehicle: p.vehicle, amount: p.amount}))} />
            </Grid>
          ))}
        </Grid>
        
        <Box sx={{ my: 8 }}>
            <Typography variant="h4" component="h3" align="center" gutterBottom sx={{ fontWeight: 700, color: 'primary.dark', mb: 2, mt: 6 }}>
              Extra Charges
            </Typography>
            <Typography variant="body1" align="center" sx={{ mb: 4 }}>
              Every visitor place on the way from Bhubaneswar to Puri will have extra price. All prices include Toll & Parking.
            </Typography>
            <PricingTable 
              title="Sightseeing"
              headers={['Place', 'Price']}
              data={extraCharges}
              dataKeys={['place', 'price']}
            />
        </Box>

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
        <Typography variant="body1" align="center" sx={{ fontStyle: 'italic', mt: 2, color: 'text.secondary' }}>
            Bhubaneswar to Puri Round Trip Extras: Toll & Parking, Driver Fooding, Up to 250km, Nighhalt Extra 500/-
        </Typography>

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

        <Box sx={{ mt: 8, p: 4, bgcolor: 'grey.100', borderRadius: 2, boxShadow: 1 }}>
            <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 600 }}>Important Notes</Typography>
            <List>
                <ListItem>
                    <ListItemIcon><CheckCircleOutline color="success" /></ListItemIcon>
                    <ListItemText primary="We are Provided Neat & Clean vehicle all the time Along with a Good Driver." />
                </ListItem>
                <ListItem>
                    <ListItemIcon><CheckCircleOutline color="success" /></ListItemIcon>
                    <ListItemText primary="If there are many Tourists In the market then the price of the Taxi may also Increase." />
                </ListItem>
                <ListItem>
                    <ListItemIcon><CheckCircleOutline color="success" /></ListItemIcon>
                    <ListItemText primary="Maximum Time Airport Pickup & Drop Taxi price is increase." />
                </ListItem>
            </List>
        </Box>
      </Container>
    </Box>
  );
};

export default Pricing; 