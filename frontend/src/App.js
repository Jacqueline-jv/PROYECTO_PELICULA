import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"; // ✅ Importa el Navbar
import Home from "./pages/Home"; // ✅ Importa Home
import MovieDetail from "./pages/MovieDetail"; // ✅ Importa MovieDetail
import "tailwindcss/tailwind.css";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Navbar /> {/* ✅ Mueve el Navbar aquí */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </Router>
  );
};

export default App;


