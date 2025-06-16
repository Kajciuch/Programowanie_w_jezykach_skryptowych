import React, { useState } from 'react';

// Dane o planetach Układu Słonecznego
const planetData = {
  merkury: {
    nazwa: "Merkury",
    odkrycie: "Starożytność",
    budowa: "Skała",
    misje: ["Mariner 10", "MESSENGER", "BepiColombo"]
  },
  wenus: {
    nazwa: "Wenus",
    odkrycie: "Starożytność",
    budowa: "Skała",
    misje: ["Venera", "Magellan", "Akatsuki"]
  },
  ziemia: {
    nazwa: "Ziemia",
    odkrycie: "Nie dotyczy",
    budowa: "Skała",
    misje: ["Apollo", "ISS", "Artemis"]
  },
  mars: {
    nazwa: "Mars",
    odkrycie: "Starożytność",
    budowa: "Skała",
    misje: ["Viking", "Curiosity", "Perseverance", "Mars Express"]
  },
  jowisz: {
    nazwa: "Jowisz",
    odkrycie: "Starożytność",
    budowa: "Gazowy olbrzym",
    misje: ["Pioneer 10", "Galileo", "Juno"]
  },
  saturn: {
    nazwa: "Saturn",
    odkrycie: "Starożytność",
    budowa: "Gazowy olbrzym",
    misje: ["Pioneer 11", "Cassini–Huygens"]
  },
  uran: {
    nazwa: "Uran",
    odkrycie: "1781",
    budowa: "Lodowy olbrzym",
    misje: ["Voyager 2"]
  },
  neptun: {
    nazwa: "Neptun",
    odkrycie: "1846",
    budowa: "Lodowy olbrzym",
    misje: ["Voyager 2"]
  }
};

const SearchPlanet = () => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState(null);

  const handleSearch = () => {
    const key = query.trim().toLowerCase();
    setResult(planetData[key] || null);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div style={{ margin: "20px 0" }}>
      <input
        type="text"
        placeholder="Wpisz nazwę planety"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        style={inputStyle}
      />
      <button onClick={handleSearch} style={buttonStyle}>Szukaj</button>

      {result ? (
        <div style={resultBoxStyle}>
          <h3>{result.nazwa}</h3>
          <p><strong>Odkrycie:</strong> {result.odkrycie}</p>
          <p><strong>Budowa:</strong> {result.budowa}</p>
          <p><strong>Misje:</strong></p>
          <ul>
            {result.misje.map((misja, i) => (
              <li key={i}>{misja}</li>
            ))}
          </ul>
        </div>
      ) : query.trim() && (
        <div style={resultBoxStyle}>
          <p>Nie znaleziono planety o nazwie "{query}"</p>
        </div>
      )}
    </div>
  );
};

const inputStyle = {
  padding: "10px",
  fontSize: "1rem",
  marginRight: "10px",
  borderRadius: "5px",
  border: "1px solid #ccc"
};

const buttonStyle = {
  padding: "10px 20px",
  fontSize: "1rem",
  borderRadius: "5px",
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  cursor: "pointer"
};

const resultBoxStyle = {
  marginTop: "20px",
  padding: "15px",
  border: "1px solid #ddd",
  borderRadius: "5px",
  backgroundColor: "#f9f9f9"
};

export default SearchPlanet;
