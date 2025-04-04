import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function NuevaPelicula() {
  const [formulario, setFormulario] = useState({
    titulo: '', descripcion: '', año: '', duracion: '',
    director: '', genero: '', productora: '', tipo: '', media: null
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    if (e.target.name === 'media') {
      setFormulario({ ...formulario, media: e.target.files[0] });
    } else {
      setFormulario({ ...formulario, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      Object.keys(formulario).forEach((key) => {
        data.append(key, formulario[key]);
      });

      await axios.post('http://localhost:5000/api/peliculas', data);
      alert('Película creada con éxito');
      navigate('/peliculas');
    } catch (error) {
      console.error('Error al crear película:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-xl text-white space-y-4">
      <h2 className="text-2xl font-bold">Agregar Nueva Película</h2>
      <input type="text" name="titulo" placeholder="Título" onChange={handleChange} required className="w-full p-2 rounded text-black" />
      <textarea name="descripcion" placeholder="Descripción" onChange={handleChange} required className="w-full p-2 rounded text-black" />
      <input type="text" name="año" placeholder="Año" onChange={handleChange} required className="w-full p-2 rounded text-black" />
      <input type="text" name="duracion" placeholder="Duración" onChange={handleChange} required className="w-full p-2 rounded text-black" />
      <input type="text" name="director" placeholder="Director" onChange={handleChange} required className="w-full p-2 rounded text-black" />
      <input type="text" name="genero" placeholder="Género" onChange={handleChange} required className="w-full p-2 rounded text-black" />
      <input type="text" name="productora" placeholder="Productora" onChange={handleChange} required className="w-full p-2 rounded text-black" />
      <input type="text" name="tipo" placeholder="Tipo" onChange={handleChange} required className="w-full p-2 rounded text-black" />
      <input type="file" name="media" accept="image/*" onChange={handleChange} required className="w-full p-2 rounded text-white bg-gray-700" />
      <button type="submit" className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded font-bold">Crear Película</button>
    </form>
  );
}

export default NuevaPelicula;

