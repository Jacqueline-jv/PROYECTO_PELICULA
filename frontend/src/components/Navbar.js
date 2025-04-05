import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black p-4 text-white flex items-center justify-between">
      <h1 className="text-xl font-bold">🎬 Mi Aplicación de Películas</h1>
      
      <input
        type="text"
        placeholder="Buscar película..."
        className="p-2 bg-gray-800 text-white border border-gray-600 rounded-md"
      />
      
      <div className="flex space-x-4">
        <Link to="/" className="hover:text-gray-400">Inicio</Link>
        <Link to="/peliculas" className="hover:text-gray-400">Películas</Link>
        <Link to="/nueva" className="hover:text-gray-400">Agregar Película</Link>
      </div>
    </nav>
  );
};

export default Navbar;
