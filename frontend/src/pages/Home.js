import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const API_URL = "http://localhost:5000/api/peliculas"; // Ajusta según tu API

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [filters, setFilters] = useState({ genero: "", director: "", productora: "", tipo: "", media: "" });

  useEffect(() => {
    axios.get(API_URL)
      .then(response => {
        setMovies(response.data);
        setFilteredMovies(response.data);
      })
      .catch(error => console.error("Error cargando películas:", error));
  }, []);

  useEffect(() => {
    let filtered = movies.filter(movie => 
      (filters.genero ? movie.genero.includes(filters.genero) : true) &&
      (filters.director ? movie.director === filters.director : true) &&
      (filters.productora ? movie.productora === filters.productora : true) &&
      (filters.tipo ? movie.tipo === filters.tipo : true) &&
      (filters.media ? movie.media === filters.media : true)
    );
    setFilteredMovies(filtered);
  }, [filters, movies]);

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Catálogo de Películas</h1>
      <div className="grid grid-cols-5 gap-4 mb-4">
        {Object.keys(filters).map(filter => (
          <select
            key={filter}
            name={filter}
            className="p-2 bg-gray-800 text-white rounded"
            onChange={handleFilterChange}
          >
            <option value="">{filter.charAt(0).toUpperCase() + filter.slice(1)}</option>
            {[...new Set(movies.map(movie => movie[filter]))].map(value => (
              value && <option key={value} value={value}>{value}</option>
            ))}
          </select>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-4">
        {filteredMovies.length > 0 ? (
          filteredMovies.map(movie => (
            <Link key={movie._id} to={`/movie/${movie._id}`} className="block bg-gray-800 p-2 rounded-lg shadow-lg">
              <img src={movie.imagen} alt={movie.titulo} className="w-full h-auto rounded" />
              <h2 className="text-center mt-2 font-bold text-lg">{movie.titulo}</h2>
              <p className="text-center text-sm text-gray-300">{movie.descripcion}</p>
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



