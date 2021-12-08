import React, { useState, useEffect } from 'react';

const Theaters = () => {
  const [theaters, setTheaters] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/theaters')
      .then(response => response.json())
      .then(data => setTheaters(data))
  }, [])

  return (
    <div>
      <ul>
        {theaters.map(theater => (
          <li>{theater.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Theaters;