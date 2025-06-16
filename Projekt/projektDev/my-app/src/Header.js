import React from "react";
import DarkModeToggle from "./DarkModeToggle";

const Header = () => {
  return (
    <header style={headerStyle}>
      <div style={headerContent}>
        <h1 style={titleStyle}>🚀 Misje Kosmiczne</h1>
        <DarkModeToggle />
      </div>
    </header>
  );
};

const headerStyle = {
  background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
  color: "white",
  padding: "20px",
  borderBottom: "2px solid white",
  width: "100%"
};

const headerContent = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  maxWidth: "1200px",
  margin: "0 auto",
};

const titleStyle = {
  fontSize: "2rem",
  margin: 0,
};

export default Header;
