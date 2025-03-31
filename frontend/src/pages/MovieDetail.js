import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieById } from '../services/api';

const MovieDetail = () => {
    const { id } = useParams(); // Obtiene el ID de la URL
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const fetchMovie = async () => {
            if (id) {
                const data = await getMovieById(id);
                setMovie(data);
            }
        };
        fetchMovie();
    }, [id]);

    if (!movie) return <p>Cargando...</p>;

    return (
        <div>
            <h2>{movie.titulo}</h2>
            <img src={`http://localhost:5000/uploads/${movie.media}`} alt={movie.titulo} />
        </div>
    );
};

export default MovieDetail;