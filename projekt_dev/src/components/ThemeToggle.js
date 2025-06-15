import React, { useContext } from 'react';
import { ThemeContext } from '../App';

export default function ThemeToggle() {
  const { dark, setDark } = useContext(ThemeContext);
  return <button onClick={() => setDark(!dark)}>
    Przełącz na {dark ? 'jasny' : 'ciemny'} motyw
  </button>;
}
