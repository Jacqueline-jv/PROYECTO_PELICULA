import React, { useEffect, useState } from 'react';
import { getMovies } from '../services/api';
import { useNavigate } from 'react-router-dom';
import '../styles/MovieList.css';

const MovieList = () => {
    const [movies, setMovies] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const data = await getMovies();
                console.log("Películas obtenidas:", data);
                setMovies(data);
            } catch (error) {
                console.error("Error al obtener películas:", error);
            }
        };
        fetchMovies();
    }, []);

    return (
        <div className="movie-container">
            {movies.map((movie) => (
                <div key={movie._id} className="movie-card" onClick={() => navigate(`/movie/${movie._id}`)}>
                    <img src={`http://localhost:5000/uploads/${movie.media}`} alt={movie.titulo} />
                    <h3>{movie.titulo}</h3>
                </div>
            ))}
        </div>
    );
};

export default MovieList;

