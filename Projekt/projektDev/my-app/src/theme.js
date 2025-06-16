import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(prev => !prev);

  const themeStyle = {
    backgroundColor: darkMode ? '#000' : '#ccf',
    color: darkMode ? '#fff' : '#000',
    backgroundImage: `url(${darkMode ? '/space.jpg' : '/earth.jpg'})`,
    backgroundSize: 'cover',
    minHeight: '100vh',
    padding: '1em'
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <div style={themeStyle}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}
