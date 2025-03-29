import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const getMovies = async () => {
    try {
        const response = await axios.get(`${API_URL}/peliculas`);
        return response.data;
    } catch (error) {
        console.error('Error al obtener las películas:', error);
        return [];
    }
};
