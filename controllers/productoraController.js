import Productora from '../models/Productora.js';

export const obtenerProductoras = async (req, res) => {
    try {
        const productoras = await Productora.find();
        res.json(productoras);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener productoras', error: error.message });
    }
};

export const crearProductora = async (req, res) => {
    try {
        const { nombre } = req.body;
        if (!nombre) {
            return res.status(400).json({ mensaje: 'El nombre de la productora es obligatorio' });
        }

        const productora = new Productora(req.body);
        await productora.save();
        res.status(201).json(productora);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al crear productora', error: error.message });
    }
};
