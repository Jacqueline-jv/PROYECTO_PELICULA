import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link, useParams } from "react-router-dom";
import axios from "axios";
import "tailwindcss/tailwind.css";
import "./App.css";

const API_URL = "http://localhost:5000/api/movies"; // Ajusta según la API

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
    movie.title.toLowerCase().includes(search.toLowerCase())
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
            <img src={movie.image} alt={movie.title} className="w-full h-auto" />
            <h2 className="text-center mt-2">{movie.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

const MovieDetail = () => {
  const { id } = useParams(); // 🔹 Extrae `id` de la URL
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios
      .get(`${API_URL}/${id}`)
      .then((response) => setMovie(response.data))
      .catch((error) => console.error("Error cargando detalles:", error));
  }, [id]);

  if (!movie) return <p className="text-white">Cargando...</p>;

  return (
    <div className="bg-gray-900 min-h-screen text-white p-4">
      <img src={movie.image} alt={movie.title} className="w-full h-auto" />
      <h1 className="text-2xl mt-4">{movie.title}</h1>
      <p>{movie.description}</p>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <nav className="bg-black p-4 text-white">
        <Link to="/">Inicio</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </Router>
  );
};

export default App;


