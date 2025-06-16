import React, { useContext } from 'react';
import { ThemeContext } from './theme';

export default function DarkModeToggle() {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <button 
      onClick={toggleDarkMode} 
      style={{
        backgroundImage: `url(${darkMode ? '/space.jpg' : '/earth.jpg'})`,
        color: darkMode ? "#fff" : "#000",
        padding: "8px 16px",
        borderRadius: "8px",
        border: "1px solid #ccc",
        cursor: "pointer",
        fontSize: "1rem"
      }}>
      {darkMode ? "🌙 Ciemny" : "☀️ Jasny"}
    </button>
  );
}
