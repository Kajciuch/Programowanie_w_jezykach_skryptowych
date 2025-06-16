import React from "react";

const astronauts = [
  { name: "Neil Armstrong", img: "neil.jpg" },
  { name: "Jurij Gagarin", img: "yuri.jpg" },
  { name: "Buzz Aldrin", img: "buzz.jpg" },
];

const Astronauts = () => {
  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>🧑‍🚀Sławni Astronauci🧑‍🚀</h2>
      <div style={containerStyle}>
        {astronauts.map((astro) => (
          <div key={astro.name} style={cardStyle}>
            <img src={astro.img} alt={astro.name} style={imageStyle} />
            <p>{astro.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const containerStyle = {
  display: "flex",
  gap: "20px",
  justifyContent: "center",
  marginTop: "20px"
};

const cardStyle = {
  textAlign: "center",
  borderRadius: "10px",
  overflow: "hidden",
  boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
  transition: "transform 0.3s",
  backgroundColor: "white",
};

const imageStyle = {
  width: "150px",
  height: "200px",
  objectFit: "cover",
  display: "block"
};

export default Astronauts;
