import React, { useState } from 'react';

const planets = [
  { name: "Merkury", emoji: "🌌", info: "Brak atmosfery, 0 księżyców", image: "merkury.jpg" },
  { name: "Wenus", emoji: "☄️", info: "Gęsta atmosfera, 0 księżyców", image: "wenus.jpg" },
  { name: "Ziemia", emoji: "🌍", info: "Atmosfera azotowa, 1 księżyc", image: "ziemia.jpg" },
  { name: "Mars", emoji: "🌕", info: "Cienka atmosfera, 2 księżyce", image: "mars.jpg" },
  { name: "Jowisz", emoji: "🌠", info: "Gazowy olbrzym, 79 księżyców", image: "jowisz.jpg" },
  { name: "Saturn", emoji: "🪐", info: "Pierścienie, 82 księżyce", image: "saturn.jpg" },
  { name: "Uran", emoji: "🌑", info: "Lodowy olbrzym, 27 księżyców", image: "uran.jpg" },
  { name: "Neptun", emoji: "⭐", info: "Silne wiatry, 14 księżyców", image: "neptun.jpg" },
];

const Planets = () => {
  const [selectedPlanet, setSelectedPlanet] = useState(null);

  const handleClick = (planet) => {
    setSelectedPlanet(planet);
  };

  const closeModal = () => {
    setSelectedPlanet(null);
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>🪐 Planety Układu Słonecznego🪐</h2>
      <div style={planetGrid}>
        {planets.map((planet) => (
          <div
            key={planet.name}
            onClick={() => handleClick(planet)}
            style={planetStyle}
          >
            <div style={{ fontSize: "2rem" }}>{planet.emoji}</div>
            <div>{planet.name}</div>
          </div>
        ))}
      </div>

      {selectedPlanet && (
        <div style={modalOverlay} onClick={closeModal}>
          <div style={modalContent} onClick={(e) => e.stopPropagation()}>
            <h3>{selectedPlanet.name}</h3>
            <img
              src={`${process.env.PUBLIC_URL}/planets/${selectedPlanet.image}`}
              alt={selectedPlanet.name}
              style={{ width: "100%", borderRadius: "10px" }}
            />
            <p style={{ marginTop: "10px" }}>{selectedPlanet.info}</p>
            <button onClick={closeModal} style={closeButton}>Zamknij</button>
          </div>
        </div>
      )}
    </div>
  );
};

const planetGrid = {
  display: "flex",
  justifyContent: "center",
  gap: "20px",
  flexWrap: "wrap",
  margin: "20px 0"
};

const planetStyle = {
  backgroundColor: "#111",
  color: "white",
  padding: "15px",
  borderRadius: "12px",
  cursor: "pointer",
  textAlign: "center",
  minWidth: "80px",
  transition: "transform 0.2s",
};

const modalOverlay = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(0,0,0,0.7)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 2000,
};

const modalContent = {
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "12px",
  width: "300px",
  textAlign: "center",
  boxShadow: "0 0 15px rgba(0,0,0,0.5)",
};

const closeButton = {
  marginTop: "15px",
  padding: "8px 16px",
  backgroundColor: "#333",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer"
};

export default Planets;
