import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieById } from "../services/api";

export default function PeliculaDetalle() {
  const { id } = useParams();
  const [pelicula, setPelicula] = useState(null);

  useEffect(() => {
    getMovieById(id).then(setPelicula);
  }, [id]);

  if (!pelicula) return <p className="text-white p-4">Cargando...</p>;

  return (
    <div className="p-4 text-white">
      <img
        src={pelicula.media?.url}
        alt={pelicula.titulo}
        className="w-full h-96 object-cover rounded-md"
      />
      <h1 className="text-3xl font-bold mt-4">{pelicula.titulo}</h1>
      <p className="mt-2">{pelicula.descripcion}</p>
      <p className="text-sm mt-1">Año: {pelicula.año} | Duración: {pelicula.duracion} min</p>
      <p className="text-sm">Director: {pelicula.director?.nombre}</p>
      <p className="text-sm">Género: {pelicula.genero?.nombre}</p>
      <p className="text-sm">Productora: {pelicula.productora?.nombre}</p>
      <p className="text-sm">Tipo: {pelicula.tipo?.nombre}</p>
    </div>
  );
}
