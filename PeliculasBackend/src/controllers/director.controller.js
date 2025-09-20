const { Director } = require('../models');

exports.create = async (req, res) => {
  try {
    const director = await Director.create(req.body);
    res.status(201).json(director);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.findAll = async (req, res) => {
  try { res.json(await Director.findAll()); }
  catch (err) { res.status(500).json({ error: err.message }); }
};

exports.findOne = async (req, res) => {
  try {
    const director = await Director.findByPk(req.params.id);
    if (!director) return res.status(404).json({ error: "No encontrado" });
    res.json(director);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.update = async (req, res) => {
  try {
    const director = await Director.findByPk(req.params.id);
    if (!director) return res.status(404).json({ error: "No encontrado" });
    await director.update(req.body);
    res.json(director);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.delete = async (req, res) => {
  try {
    const director = await Director.findByPk(req.params.id);
    if (!director) return res.status(404).json({ error: "No encontrado" });
    await director.destroy();
    res.json({ message: "Eliminado" });
  } catch (err) { res.status(500).json({ error: err.message }); }
};