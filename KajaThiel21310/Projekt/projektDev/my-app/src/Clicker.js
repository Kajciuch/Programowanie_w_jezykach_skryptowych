import React, { useState } from "react";

const Clicker = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Kliknij rakietę: {count}</p>
      <button onClick={() => setCount(count + 1)} style={btn}>🚀</button>
    </div>
  );
};

const btn = {
  padding: "10px 20px",
  fontSize: "1rem",
  borderRadius: "5px",
  backgroundColor: "#28a745",
  color: "white",
  border: "none",
  cursor: "pointer"
};

export default Clicker;
