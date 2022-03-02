import React from 'react';

import NavBar from './components/NavBar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import HeroSection from './components/HeroSection';
import { Container } from '@mui/material';
import CakeSection from './components/CakeSection';
import ContactUs from './components/ContactUs';

const theme = createTheme({
  palette: {
    primary: {
      main: "#864313",
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Container >
        <HeroSection />
        <CakeSection />
        <ContactUs />
      </Container>
    </ThemeProvider>
  )
}

export default App