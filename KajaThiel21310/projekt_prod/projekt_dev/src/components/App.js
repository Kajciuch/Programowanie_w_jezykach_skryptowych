import React from 'react';
import { ThemeProvider } from './theme';
import DarkModeToggle from './components/DarkModeToggle';
import SearchPlanet from './components/SearchPlanet';
import Astronauts from './components/Astronauts';
import Clicker from './components/Clicker';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <h1>🌌 Misje Kosmiczne</h1>
      <DarkModeToggle />
      <SearchPlanet />
      <Astronauts />
      <Clicker />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
