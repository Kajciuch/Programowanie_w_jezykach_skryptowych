import React from "react";

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>© 2025 Twoje Imię. Wszelkie prawa zastrzeżone.</p>
    </footer>
  );
};

const footerStyle = {
  borderTop: "2px solid white",
  color: "white",
  padding: "10px",
  textAlign: "center",
  position: "fixed",
  bottom: 0,
  left: 0,
  width: "100%",
  backgroundColol: "black", // może być też np. "black"
  zIndex: 1000,
};

export default Footer;
