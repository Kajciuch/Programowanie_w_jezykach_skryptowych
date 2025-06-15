import React, { useState } from 'react';

export default function SearchPlanet() {
  const [query, setQuery] = useState('');
  const [planet, setPlanet] = useState(null);

  const handleSearch = () => {
    if (!query) return;
    fetch(`https://api.le-systeme-solaire.net/rest/bodies/${query.toLowerCase()}`)
      .then(res => res.json())
      .then(data => setPlanet(data))
      .catch(() => setPlanet({ error: 'Nie znaleziono' }));
  };

  return (
    <div>
      <h2>Wyszukaj planetę</h2>
      <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Np. mars" />
      <button onClick={handleSearch}>Szukaj</button>
      {planet && (
        planet.error ? <p>{planet.error}</p> :
        <div>
          <h3>{planet.englishName}</h3>
          <p>Typ: {planet.bodyType}</p>
          <p>Mass: {planet.mass?.massValue} x10^{planet.mass?.massExponent} kg</p>
        </div>
      )}
    </div>
  );
}
