import React from "react";
import { useParams } from "react-router-dom";

function MovieShow({ movies }) {
  const { movieId } = useParams(); // Get the movieId parameter from the URL
  const movie = movies[movieId];

  if (!movie) {
    return <div>Movie not found!</div>;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>Time: {movie.time}</p>
      <ul>
        {movie.genres.map((genre, index) => (
          <li key={index}>{genre}</li>
        ))}
      </ul>
    </div>
  );
}

export default MovieShow;
