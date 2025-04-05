import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black p-4 text-white flex justify-between">
      <h1 className="text-xl">🎬 Mi Aplicación de Películas</h1>
      <input
        type="text"
        placeholder="Buscar película..."
        className="p-2 bg-gray-800 text-white"
      />
      <div>
        <Link to="/" className="px-4">Inicio</Link>
        <Link to="/galeria" className="px-4">Galería</Link> {/* Nuevo enlace */}
      </div>
    </nav>
  );
};

export default Navbar;