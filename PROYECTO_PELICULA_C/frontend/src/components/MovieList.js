import React, { useEffect, useState } from 'react';
import { getMovies } from '../services/api';
import { useNavigate } from 'react-router-dom';
import '../styles/MovieList.css';

const MovieList = () => {
    const [movies, setMovies] = useState([]);
    const navigate = useNavigate();

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
                <div key={movie._id} className="movie-card" onClick={() => navigate(`/movie/${movie._id}`)}>
                    <img src={movie.imagen} alt={movie.titulo} />
                    <h3>{movie.titulo}</h3>
                </div>
            ))}
        </div>
    );
};

export default MovieList;

