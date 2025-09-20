const { Media, Genero, Director, Productora, Tipo } = require('../models');

exports.create = async (req, res) => {
  try {
    const { generoId, directorId, productoraId, tipoId } = req.body;

    // Validar referencias
    const genero = await Genero.findByPk(generoId);
    if (!genero || genero.estado !== 'Activo') return res.status(400).json({ error: "Género inválido" });

    const director = await Director.findByPk(directorId);
    if (!director || director.estado !== 'Activo') return res.status(400).json({ error: "Director inválido" });

    const productora = await Productora.findByPk(productoraId);
    if (!productora || productora.estado !== 'Activo') return res.status(400).json({ error: "Productora inválida" });

    const tipo = await Tipo.findByPk(tipoId);
    if (!tipo) return res.status(400).json({ error: "Tipo inválido" });

    const media = await Media.create(req.body);
    res.status(201).json(media);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.findAll = async (req, res) => {
  try {
    const medias = await Media.findAll({
      include: ['genero', 'director', 'productora', 'tipo']
    });
    res.json(medias);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.findOne = async (req, res) => {
  try {
    const media = await Media.findByPk(req.params.id, {
      include: ['genero','director','productora','tipo']
    });
    if (!media) return res.status(404).json({ error: "No encontrado" });
    res.json(media);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.update = async (req, res) => {
  try {
    const media = await Media.findByPk(req.params.id);
    if (!media) return res.status(404).json({ error: "No encontrado" });
    await media.update(req.body);
    res.json(media);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.delete = async (req, res) => {
  try {
    const media = await Media.findByPk(req.params.id);
    if (!media) return res.status(404).json({ error: "No encontrado" });
    await media.destroy();
    res.json({ message: "Eliminado" });
  } catch (err) { res.status(500).json({ error: err.message }); }
};