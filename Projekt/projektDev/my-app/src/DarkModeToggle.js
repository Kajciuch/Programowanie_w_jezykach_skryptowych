import React, { useContext } from 'react';
import { ThemeContext } from './theme';

export default function DarkModeToggle() {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <button onClick={toggleDarkMode}>
      Tryb: {darkMode ? 'Ciemny' : 'Jasny'}
    </button>
  );
}
