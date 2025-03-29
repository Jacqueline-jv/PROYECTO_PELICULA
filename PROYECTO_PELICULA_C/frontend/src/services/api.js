export const getMovieById = async (id) => {
    try {
        const response = await axios.get(`http://localhost:5000/api/peliculas/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error al obtener la película:', error);
        return null;
    }
};

