import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"; // Asegura que la ruta es correcta
import Home from "./pages/Home"; // Asegura que Home está en /pages
import MovieDetail from "./pages/MovieDetail"; // Asegura que MovieDetail está en /pages
import "tailwindcss/tailwind.css";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="bg-gray-900 min-h-screen text-white"> {/* Fondo oscuro para todo */}
        <Navbar /> {/* Navbar siempre visible */}
        <div className="container mx-auto p-4"> {/* Contenedor para centrar contenido */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<MovieDetail />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;



