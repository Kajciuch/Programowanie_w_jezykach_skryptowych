import React, { useState } from 'react';

function ToggleDetails() {
  const [show, setShow] = useState(false);

  return (
    <div className="card">
      <button onClick={() => setShow(prev => !prev)} className="btn">
        {show ? 'Ukryj szczegóły' : 'Pokaż szczegóły'}
      </button>
      {show && <p>To jest laboratorium ósme.</p>}
    </div>
  );
}

export default ToggleDetails;
