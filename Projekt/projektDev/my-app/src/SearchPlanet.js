import React, { useState } from 'react';

const fakeData = {
  Mars: ['Curiosity', 'Perseverance'],
  Moon: ['Apollo 11', 'Apollo 17'],
  Jupiter: []
};

export default function SearchPlanet() {
  const [input, setInput] = useState('');
  const [missions, setMissions] = useState(null);

  const handleSearch = () => {
    const result = fakeData[input] || [];
    setMissions(result);
  };

  return (
    <div>
      <input value={input} onChange={e => setInput(e.target.value)} placeholder="Wpisz nazwę planety" />
      <button onClick={handleSearch}>Szukaj</button>
      <ul>
        {missions && missions.map((mission, i) => <li key={i}>{mission}</li>)}
        {missions && missions.length === 0 && <li>Brak misji</li>}
      </ul>
    </div>
  );
}
