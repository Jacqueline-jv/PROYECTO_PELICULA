import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/peliculas/${id}`)
      .then(response => setMovie(response.data))
      .catch(error => console.error("Error fetching movie details:", error));
  }, [id]);

  if (!movie) {
    return <div className="text-center mt-10 text-white">Cargando...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex justify-center items-center p-6">
      <div className="max-w-4xl bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col md:flex-row">
        <img 
          src={`/images/${movie.media}`} 
          alt={movie.titulo} 
          className="w-full md:w-1/3 rounded-lg shadow-md object-cover"
        />
        <div className="md:ml-6 mt-4 md:mt-0 flex flex-col justify-between">
          <h1 className="text-3xl font-bold mb-3">{movie.titulo}</h1>
          <p className="text-lg text-gray-300 mb-2">{movie.descripcion}</p>
          <p><strong>Año:</strong> {movie.año}</p>
          <p><strong>Director:</strong> {movie.director}</p>
          <p><strong>Género:</strong> {movie.genero}</p>
          <p><strong>Productora:</strong> {movie.productora}</p>
          <p><strong>Tipo:</strong> {movie.tipo}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;

