import React, { useState } from 'react';

const PolakRodak = () => {
  const [showInfo, setShowInfo] = useState(false);

  const handleClick = () => {
    setShowInfo(!showInfo);
  };

  return (
    <div style={{ margin: "20px 0" }}>
      <button onClick={handleClick} style={buttonStyle}>
        Polak Rodak
      </button>
      {showInfo && (
        <div style={infoBoxStyle}>
          <img
            src="slawo.jpg"
            alt="Sławosz Uznański-Wiśniewski"
            style={{ width: "200px", borderRadius: "10px", marginBottom: "10px" }}
          />
          <p><strong>Sławosz Uznański</strong> – drugi Polak, który poleci w kosmos! 🚀</p>
          <p>Jest astronautą ESA.</p>
        </div>
      )}
    </div>
  );
};

const buttonStyle = {
  padding: "10px 20px",
  fontSize: "1rem",
  borderRadius: "5px",
  backgroundColor: "#28a745",
  color: "white",
  border: "none",
  cursor: "pointer",
  marginLeft: "10px"
};

const infoBoxStyle = {
  marginTop: "15px",
  padding: "15px",
  backgroundColor: "#f5f5f5",
  borderRadius: "10px",
  maxWidth: "400px"
};

export default PolakRodak;
