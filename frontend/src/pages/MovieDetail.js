import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieById } from '../services/api';

const MovieDetail = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                console.log(`Obteniendo película con ID: ${id}`);
                const data = await getMovieById(id);
                
                if (!data || Object.keys(data).length === 0) {
                    throw new Error("Película no encontrada");
                }

                console.log("Película obtenida:", data);
                setMovie(data);
            } catch (err) {
                console.error("Error al obtener la película:", err.message);
                setError(err.message);
            }
        };

        if (id) {
            fetchMovie();
        } else {
            setError("ID de película inválido");
        }
    }, [id]);

    if (error) return <p className="text-red-500 font-bold">Error: {error}</p>;
    if (!movie) return <p className="text-white">Cargando...</p>;

    return (
        <div className="text-white p-6">
            <h2 className="text-3xl font-bold">{movie?.titulo || "Título no disponible"}</h2>
            
            <img
                src={movie?.media ? `http://localhost:5000/uploads/${movie.media}` : "/placeholder.jpg"}
                alt={movie?.titulo || "Película"}
                className="w-64 h-auto mt-4 rounded-lg shadow-lg"
            />

            <p className="mt-4">{movie?.descripcion || "Sin descripción disponible"}</p>
            <p><strong>Género:</strong> {movie?.genero || "No especificado"}</p>
            <p><strong>Año:</strong> {movie?.año || "No disponible"}</p>
            <p><strong>Director:</strong> {movie?.director || "No especificado"}</p>
        </div>
    );
};

export default MovieDetail;
