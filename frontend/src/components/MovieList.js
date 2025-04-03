import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./MovieList.css";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/peliculas") // Asegúrate de que esta URL es correcta
      .then((response) => setMovies(response.data))
      .catch((error) => console.error("Error al obtener las películas", error));
  }, []);

  return (
    <div className="movie-container">
      {movies.map((movie) => (
        <Link to={`/movie/${movie._id}`} key={movie._id} className="movie-card">
          <img src={movie.imagen} alt={movie.titulo} />
          <h3>{movie.titulo}</h3>
        </Link>
      ))}
    </div>
  );
};

export default MovieList;

