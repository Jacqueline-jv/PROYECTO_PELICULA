import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// Obtener todas las películas
export const getMovies = async () => {
    try {
        const response = await axios.get(`${API_URL}/peliculas`);
        console.log("Películas obtenidas:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error al obtener películas:", error);
        return [];
    }
};

// Obtener una película por ID
export const getMovieById = async (id) => {
    if (!id) {
        console.error("Error: El ID de la película es undefined o null.");
        return null;
    }
    
    try {
        console.log(`Obteniendo película con ID: ${id}`);
        const response = await axios.get(`${API_URL}/peliculas/${id}`);
        console.log("Película obtenida:", response.data);
        return response.data;
    } catch (error) {
        console.error('Error al obtener la película:', error);
        return null;
    }
};

// Crear una nueva película
export const createMovie = async (movieData) => {
    try {
        const response = await axios.post(`${API_URL}/peliculas`, movieData);
        console.log("Película creada:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error al crear película:", error);
        return null;
    }
};

// Actualizar una película
export const updateMovie = async (id, movieData) => {
    try {
        const response = await axios.put(`${API_URL}/peliculas/${id}`, movieData);
        console.log("Película actualizada:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error al actualizar película:", error);
        return null;
    }
};

// Eliminar una película
export const deleteMovie = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/peliculas/${id}`);
        console.log("Película eliminada:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error al eliminar película:", error);
        return null;
    }
};

// Obtener géneros
export const getGenres = async () => {
    try {
        const response = await axios.get(`${API_URL}/generos`);
        console.log("Géneros obtenidos:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error al obtener géneros:", error);
        return [];
    }
};

// Obtener tipos (película, serie, etc.)
export const getTypes = async () => {
    try {
        const response = await axios.get(`${API_URL}/tipos`);
        console.log("Tipos obtenidos:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error al obtener tipos:", error);
        return [];
    }
};

// Obtener productoras
export const getProducers = async () => {
    try {
        const response = await axios.get(`${API_URL}/productoras`);
        console.log("Productoras obtenidas:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error al obtener productoras:", error);
        return [];
    }
};

// Obtener directores
export const getDirectors = async () => {
    try {
        const response = await axios.get(`${API_URL}/directores`);
        console.log("Directores obtenidos:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error al obtener directores:", error);
        return [];
    }
};