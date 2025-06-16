import React from 'react';
import Header from "./Header";
import DarkModeToggle from './DarkModeToggle.js';
import SearchPlanet from './SearchPlanet.js';
import Astronauts from './Astronauts.js';
import Clicker from './Clicker.js';
import Footer from './Footer.js';
import { ThemeProvider } from './theme.js';

function App() {
  return (
    <ThemeProvider>
      <DarkModeToggle />
      <SearchPlanet />
      <Astronauts />
      <Clicker />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
