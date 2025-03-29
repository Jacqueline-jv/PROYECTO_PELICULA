import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const API_URL = "http://localhost:5000/api/peliculas"; // Ajusta según la API

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => setMovies(response.data))
      .catch((error) => console.error("Error cargando películas:", error));
  }, []);

  const filteredMovies = movies.filter((movie) =>
    movie.titulo.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-gray-900 min-h-screen text-white p-4">
      <input
        type="text"
        placeholder="Buscar película..."
        className="p-2 mb-4 w-full bg-gray-800 text-white"
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="grid grid-cols-4 gap-4">
        {filteredMovies.map((movie) => (
          <Link key={movie._id} to={`/movie/${movie._id}`}>
            <img src={movie.imagen} alt={movie.titulo} className="w-full h-auto" />
            <h2 className="text-center mt-2">{movie.titulo}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
