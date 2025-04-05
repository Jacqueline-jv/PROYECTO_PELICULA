import Pelicula from '../models/Pelicula.js';

export const obtenerPeliculas = async (req, res) => {
  try {
    const peliculas = await Pelicula.find()
      .populate({ path: 'genero', select: 'nombre' })
      .populate({ path: 'director', select: 'nombre' })
      .populate({ path: 'productora', select: 'nombre' })
      .populate({ path: 'tipo', select: 'nombre' });

    res.json(peliculas);
  } catch (error) {
    console.error('Error al obtener películas:', error);
    res.status(500).json({ mensaje: 'Error al obtener películas', error: error.message });
  }
};

export const crearPelicula = async (req, res) => {
  try {
    const { titulo, descripcion, año, duracion, director, genero, productora, tipo, media } = req.body;

    if (!titulo || !año || !director || !genero || !productora || !media) {
      return res.status(400).json({ mensaje: 'Faltan campos obligatorios' });
    }

    const nuevaPelicula = new Pelicula({
      titulo,
      descripcion,
      año,
      duracion,
      director,
      genero,
      productora,
      tipo,
      media 
    });

    await nuevaPelicula.save();
    res.status(201).json(nuevaPelicula);
  } catch (error) {
    console.error('Error al crear película:', error);
    res.status(500).json({ mensaje: 'Error al crear película', error: error.message });
  }
};
