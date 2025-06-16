import React from "react";

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>© 2025 Strona Kai. Wszelkie prawa zastrzeżone.</p>
    </footer>
  );
};

const footerStyle = {
  borderTop: "2px solid white",
  color: "white",
  padding: "10px",
  textAlign: "center",
  backgroundColor: "black",
  marginTop: "auto",
};

export default Footer;