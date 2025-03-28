import Media from '../models/Media.js';

export const obtenerMedias = async (req, res) => {
    try {
        const medias = await Media.find();
        res.json(medias);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener medias', error: error.message });
    }
};

export const crearMedia = async (req, res) => {
    try {
        const { tipo, url } = req.body;
        if (!tipo || !url) {
            return res.status(400).json({ mensaje: 'Tipo y URL son obligatorios' });
        }

        const media = new Media(req.body);
        await media.save();
        res.status(201).json(media);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al crear media', error: error.message });
    }
};
