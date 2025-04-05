import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Peliculas() {
  const [peliculas, setPeliculas] = useState([]);
  const [filtro, setFiltro] = useState('');

  useEffect(() => {
    const obtenerPeliculas = async () => {
      try {
        const respuesta = await axios.get('http://localhost:5000/api/peliculas');
        setPeliculas(respuesta.data);
      } catch (error) {
        console.error('Error al obtener las películas:', error);
      }
    };

    obtenerPeliculas();
  }, []);

  const peliculasFiltradas = peliculas.filter(pelicula =>
    pelicula.titulo.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Buscar película..."
          className="border p-2 w-full max-w-md rounded-md text-black"
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
        />
        <Link
          to="/nueva"
          className="ml-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
        >
          Agregar Película
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {peliculasFiltradas.map((pelicula) => (
          <div key={pelicula._id} className="border p-4 rounded-xl bg-gray-800 text-white">
            <Link to={`/movie/${pelicula._id}`} className="block">
              <img
                src={`/images/${pelicula.media}`}
                alt={pelicula.titulo}
                className="w-full h-60 object-cover rounded-md"
              />
              <h2 className="text-xl font-bold mt-2 text-white">{pelicula.titulo}</h2>
            </Link>
            <p className="text-sm mt-1">{pelicula.descripcion}</p>
            <p className="text-xs mt-1">🎬 Año: {pelicula.año} | ⏱️ {pelicula.duracion} min</p>
            <p className="text-xs">🎥 Director: {pelicula.director?.nombre || pelicula.director}</p>
            <p className="text-xs">📚 Género: {pelicula.genero?.nombre || pelicula.genero}</p>
            <p className="text-xs">🏢 Productora: {pelicula.productora?.nombre || pelicula.productora}</p>
            <p className="text-xs">📺 Tipo: {pelicula.tipo?.nombre || pelicula.tipo}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Peliculas;
