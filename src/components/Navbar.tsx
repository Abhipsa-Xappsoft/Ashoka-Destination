import { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemText, useTheme, useMediaQuery } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'About', path: '/about' },
    { text: 'Tours', path: '/tours' },
    { text: 'Cars', path: '/cars' },
    { text: 'Pricing', path: '/pricing' },
    { text: 'Gallery', path: '/gallery' },
    { text: 'Booking', path: '/booking' },
    { text: 'Contact', path: '/contact' },
  ];

  const drawer = (
    <List>
      {menuItems.map((item) => (
        <ListItem 
          component={RouterLink} 
          to={item.path} 
          key={item.text}
          onClick={handleDrawerToggle}
          sx={{
            '&:hover': {
              backgroundColor: 'rgba(33, 150, 243, 0.08)',
            },
            cursor: 'pointer',
          }}
        >
          <ListItemText 
            primary={item.text} 
            primaryTypographyProps={{
              sx: { 
                fontWeight: 500,
                color: 'text.primary',
              }
            }}
          />
        </ListItem>
      ))}
    </List>
  );

  return (
    <AppBar 
      position="fixed" 
      color="default" 
      sx={{ 
        backgroundColor: 'background.paper',
        backdropFilter: 'blur(8px)',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, sm: 4 } }}>
        <Typography 
          variant="h6" 
          component={RouterLink} 
          to="/"
          sx={{ 
            textDecoration: 'none',
            color: 'primary.main',
            fontWeight: 700,
            letterSpacing: '0.5px',
            fontSize: { xs: '1.25rem', sm: '1.5rem' },
          }}
        >
          Ashoka Destination
        </Typography>

        {isMobile ? (
          <>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ 
                color: 'text.primary',
                '&:hover': {
                  backgroundColor: 'rgba(33, 150, 243, 0.08)',
                },
              }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              variant="temporary"
              anchor="right"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true,
              }}
              sx={{
                '& .MuiDrawer-paper': { 
                  boxSizing: 'border-box', 
                  width: 240,
                  backgroundColor: 'background.paper',
                },
              }}
            >
              {drawer}
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: 'flex', gap: 1 }}>
            {menuItems.map((item) => (
              <Button
                key={item.text}
                component={RouterLink}
                to={item.path}
                sx={{
                  color: 'text.primary',
                  fontWeight: 500,
                  '&:hover': {
                    backgroundColor: 'rgba(33, 150, 243, 0.08)',
                  },
                }}
              >
                {item.text}
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 