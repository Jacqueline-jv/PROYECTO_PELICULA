import Director from '../models/Director.js';

export const obtenerDirectores = async (req, res) => {
    try {
        const directores = await Director.find().populate('peliculas'); // Si Director tiene relación con Pelicula
        res.json(directores);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener directores', error: error.message });
    }
};

export const crearDirector = async (req, res) => {
    try {
        const { nombre } = req.body;
        if (!nombre) {
            return res.status(400).json({ mensaje: 'El nombre del director es obligatorio' });
        }

        const director = new Director(req.body);
        await director.save();
        res.status(201).json(director);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al crear director', error: error.message });
    }
};
