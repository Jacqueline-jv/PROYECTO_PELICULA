import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Gallery = () => {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    const obtenerPeliculas = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/peliculas");
        setPeliculas(response.data);
      } catch (error) {
        console.error("Error al obtener las películas:", error);
      }
    };

    obtenerPeliculas();
  }, []);

  return (
    <div className="p-4 bg-gray-900 min-h-screen text-white">
      <h1 className="text-3xl font-bold text-center mb-8">Galería de Películas</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {peliculas.map((pelicula) => (
          <Link
            key={pelicula._id}
            to={`/movie/${pelicula._id}`}
            className="bg-gray-800 rounded-lg p-4 hover:shadow-lg hover:bg-gray-700 transition duration-300"
          >
            <img
              src={`http://localhost:5000/uploads/${pelicula.media}`}
              alt={pelicula.titulo}
              className="w-full h-64 object-cover rounded mb-4"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/200x300?text=No+Image";
              }}
            />
            <h2 className="text-xl font-semibold mb-1">{pelicula.titulo}</h2>
            <p className="text-sm mb-1">{pelicula.descripcion}</p>
            <p className="text-sm">🎬 Año: {pelicula.año} | ⏱️ {pelicula.duracion} min</p>
            <p className="text-sm">🎥 Director: {pelicula.director?.nombre || 'N/A'}</p>
            <p className="text-sm">🎭 Género: {pelicula.genero?.nombre || 'N/A'}</p>
            <p className="text-sm">🏢 Productora: {pelicula.productora?.nombre || 'N/A'}</p>
            <p className="text-sm">📺 Tipo: {pelicula.tipo?.nombre || 'N/A'}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Gallery;