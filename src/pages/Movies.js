import React, { useEffect, useState } from 'react';

const Movies = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/movies')
      .then(response => response.json())
      .then(data => setMovies(data))
  }, [])

  return (
    <div>
      <ul>
        {movies.map(movie => (
          <li>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;