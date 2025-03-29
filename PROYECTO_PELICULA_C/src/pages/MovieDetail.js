import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieById } from '../../frontend/src/services/api';
import '../styles/MovieList.css';

const MovieDetails = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const fetchMovie = async () => {
            const data = await getMovieById(id);
            setMovie(data);
        };
        fetchMovie();
    }, [id]);

    if (!movie) return <p>Cargando...</p>;

    return (
        <div className="movie-details">
            <img src={movie.imagen} alt={movie.titulo} />
            <h2>{movie.titulo}</h2>
            <p>{movie.descripcion}</p>
        </div>
    );
};

export default MovieDetails;
