import React, { useEffect, useState } from 'react';
import { getMovies } from '../services/api';
import '../styles/MovieList.css';

const MovieList = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const data = await getMovies();
            setMovies(data);
        };
        fetchMovies();
    }, []);

    return (
        <div className="movie-container">
            {movies.map((movie) => (
                <div key={movie._id} className="movie-card">
                    <img src={movie.imagen} alt={movie.titulo} />
                    <h3>{movie.titulo}</h3>
                    <p>{movie.descripcion}</p>
                </div>
            ))}
        </div>
    );
};

export default MovieList;
