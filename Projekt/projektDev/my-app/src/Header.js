import React from "react";

const Header = () => {
  return (
    <header style={headerStyle}>
      <h1>🌌 Misje Kosmiczne 🌍</h1>
    </header>
  );
};

const headerStyle = {
  borderBottom: "2px solid white",
  color: "white",
  padding: "15px",
  textAlign: "center",
  backgroundColor: "transparent",
};

export default Header;
