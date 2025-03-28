import Genero from '../models/Genero.js';

export const obtenerGeneros = async (req, res) => {
    try {
        const generos = await Genero.find();
        res.json(generos);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener géneros' });
    }
};

export const crearGenero = async (req, res) => {
    try {
        const genero = new Genero(req.body);
        await genero.save();
        res.json(genero);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al crear género' });
    }
};
