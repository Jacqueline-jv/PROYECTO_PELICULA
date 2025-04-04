import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"; // Corrige el nombre si es necesario
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import Peliculas from "./components/Peliculas";
import "./index.css"; // Asegúrate de que Tailwind está en este archivo

const App = () => {
  return (
    <Router>
      <div className="bg-gray-900 min-h-screen text-white">
        <Navbar />
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<MovieDetail />} />
            <Route path="/peliculas" element={<Peliculas />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
