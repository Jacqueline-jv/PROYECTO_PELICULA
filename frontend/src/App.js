import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";  
import Home from "./pages/Home";  
import MovieDetail from "./pages/MovieDetail";  
import Peliculas from "./components/Peliculas";  
import "./index.css";  

const App = () => {
  return (
    <Router>
      <div className="bg-gray-900 min-h-screen text-white">
        <Navbar />
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/peliculas" element={<Peliculas />} />
            <Route path="/movie/:id" element={<MovieDetail />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
