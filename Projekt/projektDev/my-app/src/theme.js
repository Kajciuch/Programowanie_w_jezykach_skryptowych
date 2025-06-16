import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const setBackgroundImage = (isDark) => {
    document.body.style.backgroundImage = `url(${process.env.PUBLIC_URL}/${isDark ? 'space.jpg' : 'earth.jpg'})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.transition = 'background-image 0.5s ease-in-out';
    document.body.style.color = isDark ? '#f1f1f1' : 'black';
  };

  const toggleDarkMode = () => {
    setDarkMode(prev => {
      const newMode = !prev;
      setBackgroundImage(newMode);
      return newMode;
    });
  };

  // apply default background on load
  useEffect(() => {
    setBackgroundImage(darkMode);
  }, []);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
