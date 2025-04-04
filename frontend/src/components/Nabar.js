import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black p-4 text-white flex justify-between">
      <h1 className="text-xl">🎬 Mi Aplicación de Películas</h1>
      <div>
        <Link to="/" className="px-4">Inicio</Link>
        <Link to="/peliculas" className="px-4">Películas</Link> {/* Enlace agregado */}
      </div>
    </nav>
  );
};

export default Navbar;
