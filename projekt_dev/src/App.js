import React, { useState, useEffect, useContext, createContext } from 'react';
import ThemeToggle from './components/ThemeToggle';
import SearchPlanet from './components/SearchPlanet';
import Astronauts from './components/Astronauts';
import Footer from './components/Footer';
import './App.css';

// Context dla motywu
export const ThemeContext = createContext();

function App() {
  const [dark, setDark] = useState(false);

  return (
    <ThemeContext.Provider value={{ dark, setDark }}>
      <div className={dark ? 'App dark' : 'App light'}>
        <ThemeToggle />
        <h1>Misje kosmiczne 🚀</h1>
        <SearchPlanet />
        <Astronauts />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
