import React, { useState, useEffect } from 'react';

function TimerCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count >= 10) return;
    const interval = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [count]);

  return (
    <div className="card">
      <p>Licznik: {count}</p>
    </div>
  );
}

export default TimerCounter;
