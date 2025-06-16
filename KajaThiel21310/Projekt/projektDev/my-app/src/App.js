import React from 'react';
import Header from "./Header";
import PolakRodak from './PolakRodak';
import DarkModeToggle from './DarkModeToggle.js';
import SearchPlanet from './SearchPlanet.js';
import Astronauts from './Astronauts.js';
import Planets from "./Planets";
import Clicker from './Clicker.js';
import Footer from './Footer.js';
import { ThemeProvider } from './theme.js';

const App = () => {
  return (
    <ThemeProvider>
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Header />
        <main style={{
          flex: 1,
          padding: "20px",
          backgroundImage: "url('/space-bg.jpg')",
          backgroundSize: "cover"
        }}>
          <SearchPlanet />
          <PolakRodak />
          <Astronauts />
          <Planets />
          <Clicker />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
