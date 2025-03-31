import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
      <input
        type="text"
        placeholder="Buscar película..."
        className="border p-2 w-full mb-4"
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
      />
      <div className="grid grid-cols-4 gap-4">
        {peliculasFiltradas.map((pelicula) => (
          <div key={pelicula._id} className="border p-4 rounded-xl bg-gray-800 text-white">
            <img src={pelicula.media?.url} alt={pelicula.titulo} className="w-full h-60 object-cover rounded-md" />
            <h2 className="text-xl font-bold mt-2">{pelicula.titulo}</h2>
            <p className="text-sm">{pelicula.descripcion}</p>
            <p className="text-xs">Año: {pelicula.año} | Duración: {pelicula.duracion} min</p>
            <p className="text-xs">Director: {pelicula.director?.nombre}</p>
            <p className="text-xs">Género: {pelicula.genero?.nombre}</p>
            <p className="text-xs">Productora: {pelicula.productora?.nombre}</p>
            <p className="text-xs">Tipo: {pelicula.tipo?.nombre}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Peliculas;
