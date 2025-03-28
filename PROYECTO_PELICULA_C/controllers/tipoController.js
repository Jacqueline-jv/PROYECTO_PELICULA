import Tipo from '../models/Tipo.js';

export const obtenerTipos = async (req, res) => {
    try {
        const tipos = await Tipo.find();
        res.json(tipos);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener tipos', error: error.message });
    }
};

export const crearTipo = async (req, res) => {
    try {
        const { nombre } = req.body;
        if (!nombre) {
            return res.status(400).json({ mensaje: 'El nombre del tipo es obligatorio' });
        }

        const tipo = new Tipo(req.body);
        await tipo.save();
        res.status(201).json(tipo);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al crear tipo', error: error.message });
    }
};
