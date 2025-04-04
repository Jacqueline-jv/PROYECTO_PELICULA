import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function NuevaPelicula() {
  const [formulario, setFormulario] = useState({
    titulo: '',
    descripcion: '',
    año: '',
    duracion: '',
    director: '',
    genero: '',
    productora: '',
    tipo: '',
    media: null,
  });

  const navigate = useNavigate();

  const manejarCambio = (e) => {
    const { name, value, files } = e.target;
    setFormulario({
      ...formulario,
      [name]: files ? files[0] : value,
    });
  };

  const manejarEnvio = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (const key in formulario) {
      data.append(key, formulario[key]);
    }

    try {
      await axios.post('http://localhost:5000/api/peliculas', data);
      navigate('/peliculas');
    } catch (error) {
      console.error('Error al crear la película:', error);
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-gray-800 p-6 rounded-lg mt-6">
      <h2 className="text-2xl font-bold mb-4 text-white">Agregar Nueva Película</h2>
      <form onSubmit={manejarEnvio} className="space-y-4">
        {[
          ['titulo', 'Título'],
          ['descripcion', 'Descripción'],
          ['año', 'Año'],
          ['duracion', 'Duración (min)'],
          ['director', 'Director'],
          ['genero', 'Género'],
          ['productora', 'Productora'],
          ['tipo', 'Tipo'],
        ].map(([name, label]) => (
          <div key={name}>
            <label className="block text-white">{label}</label>
            <input
              type="text"
              name={name}
              value={formulario[name]}
              onChange={manejarCambio}
              className="w-full p-2 rounded text-black"
              required
            />
          </div>
        ))}

        <div>
          <label className="block text-white">Imagen (media)</label>
          <input
            type="file"
            name="media"
            accept="image/*"
            onChange={manejarCambio}
            className="w-full p-2 rounded bg-white"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white p-2 rounded"
        >
          Guardar Película
        </button>
      </form>
    </div>
  );
}

export default NuevaPelicula;



