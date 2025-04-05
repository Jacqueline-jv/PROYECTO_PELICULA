import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const API_URL = "http://localhost:5000/api/peliculas";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [filters, setFilters] = useState({
    genero: "",
    director: "",
    productora: "",
    tipo: "",
    media: "",
  });

  useEffect(() => {
    axios.get(API_URL)
      .then((response) => {
        setMovies(response.data);
        setFilteredMovies(response.data);
      })
      .catch((error) => console.error("Error cargando películas:", error));
  }, []);

  useEffect(() => {
    const filtered = movies.filter((movie) =>
      (filters.genero ? movie.genero?.nombre === filters.genero || movie.genero === filters.genero : true) &&
      (filters.director ? movie.director?.nombre === filters.director || movie.director === filters.director : true) &&
      (filters.productora ? movie.productora?.nombre === filters.productora || movie.productora === filters.productora : true) &&
      (filters.tipo ? movie.tipo?.nombre === filters.tipo || movie.tipo === filters.tipo : true) &&
      (filters.media ? movie.media === filters.media : true)
    );
    setFilteredMovies(filtered);
  }, [filters, movies]);

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white p-4">
      <h1 className="text-3xl font-bold text-center mb-6">🎬 Catálogo de Películas</h1>

      {/* Filtros */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
        {Object.keys(filters).map((filter) => (
          <select
            key={filter}
            name={filter}
            className="p-2 bg-gray-800 text-white rounded"
            onChange={handleFilterChange}
          >
            <option value="">{filter.charAt(0).toUpperCase() + filter.slice(1)}</option>
            {[...new Set(movies.map((movie) =>
              movie[filter]?.nombre || movie[filter]
            ))].map((value) =>
              value ? (
                <option key={value} value={value}>
                  {value}
                </option>
              ) : null
            )}
          </select>
        ))}
      </div>

      {/* Botón para agregar película */}
      <div className="flex justify-end mb-6">
        <Link
          to="/nueva"
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg"
        >
          ➕ Agregar Película
        </Link>
      </div>

      {/* Películas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <Link
              key={movie._id}
              to={`/movie/${movie._id}`}
              className="bg-gray-800 p-4 rounded-xl shadow hover:shadow-xl transition duration-300"
            >
              <img
                src={`/images/${movie.media}`}
                alt={movie.titulo}
                className="w-full h-60 object-cover rounded-md mb-2"
              />
              <h2 className="text-lg font-semibold text-center">{movie.titulo}</h2>
              <p className="text-sm text-center text-gray-400 mt-1">{movie.descripcion}</p>
              <div className="text-xs mt-2">
                <p>📅 Año: {movie.año} | ⏱ {movie.duracion} min</p>
                <p>🎥 Director: {movie.director?.nombre || movie.director}</p>
                <p>📚 Género: {movie.genero?.nombre || movie.genero}</p>
                <p>🏢 Productora: {movie.productora?.nombre || movie.productora}</p>
                <p>📺 Tipo: {movie.tipo?.nombre || movie.tipo}</p>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-center col-span-4 text-gray-400">No se encontraron películas.</p>
        )}
      </div>
    </div>
  );
};

export default Home;