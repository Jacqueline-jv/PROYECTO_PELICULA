import Pelicula from '../models/Pelicula.js';

export const obtenerPeliculas = async (req, res) => {
    try {
        const peliculas = await Pelicula.find()
            .populate('director')
            .populate('genero')
            .populate('productora')
            .populate('tipo')
            .populate('media');

        res.json(peliculas);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener películas', error: error.message });
    }
};

export const crearPelicula = async (req, res) => {
    try {
        const { titulo, director, genero, productora, descripcion, año, duracion, imagen } = req.body;

        if (!titulo || !director || !genero || !productora || !año) {
            return res.status(400).json({ mensaje: 'Todos los campos obligatorios deben estar completos' });
        }

        const nuevaPelicula = new Pelicula(req.body);
        await nuevaPelicula.save();
        res.status(201).json(nuevaPelicula);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al crear película', error: error.message });
    }
};