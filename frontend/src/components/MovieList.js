import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const MovieDetail = () => {
  const { id } = useParams();  // Extrae el ID de la película desde la URL
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/peliculas/${id}`);
        setMovie(response.data);
      } catch (error) {
        console.error("Error al obtener los detalles de la película:", error);
      }
    };

    fetchMovie();
  }, [id]);

  if (!movie) return <div>Cargando...</div>;

  return (
    <div className="p-4 text-white">
      <h1 className="text-3xl font-bold">{movie.titulo}</h1>
      <img 
        src={`http://localhost:5000/uploads/${movie.media}`} 
        alt={movie.titulo} 
        className="w-full h-auto rounded-lg my-4" 
      />
      <p>{movie.descripcion}</p>
      <p><strong>Año:</strong> {movie.año}</p>
      <p><strong>Duración:</strong> {movie.duracion} min</p>
      <p><strong>Director:</strong> {movie.director}</p>
      <p><strong>Género:</strong> {movie.genero}</p>
      <p><strong>Productora:</strong> {movie.productora}</p>
      <p><strong>Tipo:</strong> {movie.tipo}</p>
    </div>
  );
};

export default MovieDetail;