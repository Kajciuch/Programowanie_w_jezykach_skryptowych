import React, { useState } from 'react';

export default function Clicker() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Kliknięcia: {count}</p>
      <button onClick={() => setCount(count + 1)}>Kliknij mnie 🚀</button>
    </div>
  );
}
