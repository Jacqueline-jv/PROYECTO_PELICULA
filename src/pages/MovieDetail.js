import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const MovieDetail = () => {
  const { id } = useParams();
  const [pelicula, setPelicula] = useState(null);

  useEffect(() => {
    const obtenerDetallesPelicula = async () => {
      try {
        const respuesta = await axios.get(`http://localhost:5000/api/peliculas/${id}`);
        setPelicula(respuesta.data);
      } catch (error) {
        console.error("Error al obtener los detalles de la película:", error);
      }
    };

    obtenerDetallesPelicula();
  }, [id]);

  if (!pelicula) {
    return <div className="text-center text-white">Cargando...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto bg-gray-800 p-6 rounded-lg mt-6">
      <h2 className="text-3xl font-bold text-white mb-4">{pelicula.titulo}</h2>

      {/* Mostrar imagen solo si existe */}
      {pelicula.media ? (
        <img
          src={`http://localhost:5000/uploads/${pelicula.media}`}
          alt={pelicula.titulo}
          className="mb-4 w-full max-h-96 object-contain"
        />
      ) : (
        <p className="text-gray-400 mb-4">Sin imagen disponible</p>
      )}

      <p className="text-white text-lg">{pelicula.descripcion}</p>
      <div className="mt-4 text-gray-400">
        <p><strong>Año:</strong> {pelicula.año}</p>
        <p><strong>Duración:</strong> {pelicula.duracion || "No disponible"} min</p>
        <p><strong>Director:</strong> {pelicula.director?.nombre || "No disponible"}</p>
        <p><strong>Género:</strong> {pelicula.genero?.nombre || "No disponible"}</p>
        <p><strong>Productora:</strong> {pelicula.productora?.nombre || "No disponible"}</p>
        <p><strong>Tipo:</strong> {pelicula.tipo?.nombre || "No disponible"}</p>
      </div>
    </div>
  );
};

export default MovieDetail;
