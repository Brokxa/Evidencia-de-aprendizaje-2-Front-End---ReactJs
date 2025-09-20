const { Genero } = require('../models');

exports.create = async (req, res) => {
  try {
    const genero = await Genero.create(req.body);
    res.status(201).json(genero);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.findAll = async (req, res) => {
  try { res.json(await Genero.findAll()); }
  catch (err) { res.status(500).json({ error: err.message }); }
};

exports.findOne = async (req, res) => {
  try {
    const genero = await Genero.findByPk(req.params.id);
    if (!genero) return res.status(404).json({ error: "No encontrado" });
    res.json(genero);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.update = async (req, res) => {
  try {
    const genero = await Genero.findByPk(req.params.id);
    if (!genero) return res.status(404).json({ error: "No encontrado" });
    await genero.update(req.body);
    res.json(genero);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.delete = async (req, res) => {
  try {
    const genero = await Genero.findByPk(req.params.id);
    if (!genero) return res.status(404).json({ error: "No encontrado" });
    await genero.destroy();
    res.json({ message: "Eliminado" });
  } catch (err) { res.status(500).json({ error: err.message }); }
};