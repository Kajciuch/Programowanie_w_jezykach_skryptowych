import React, { useEffect, useState } from 'react';

export default function Astronauts() {
  const [astrs, setAstrs] = useState([]);

  useEffect(() => {
    fetch('http://api.open-notify.org/astros.json')
      .then(res => res.json())
      .then(data => setAstrs(data.people))
  }, []);

  return (
    <div>
      <h2>Astronauci na orbicie</h2>
      <ul>
        {astrs.map(a => <li key={a.name}>{a.name} – {a.craft}</li>)}
      </ul>
    </div>
  );
}
