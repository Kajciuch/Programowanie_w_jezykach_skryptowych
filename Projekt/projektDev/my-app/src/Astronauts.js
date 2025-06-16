import React from 'react';

const astronauts = ['Neil Armstrong', 'Yuri Gagarin', 'Buzz Aldrin'];

export default function Astronauts() {
  return (
    <div>
      <h2>Sławni Astronauci</h2>
      <ul>
        {astronauts.map((name, i) => <li key={i}>{name}</li>)}
      </ul>
    </div>
  );
}
