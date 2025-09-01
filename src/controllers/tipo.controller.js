const { Tipo } = require('../models');

exports.create = async (req, res) => {
  try {
    const tipo = await Tipo.create(req.body);
    res.status(201).json(tipo);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.findAll = async (req, res) => {
  try { res.json(await Tipo.findAll()); }
  catch (err) { res.status(500).json({ error: err.message }); }
};

exports.findOne = async (req, res) => {
  try {
    const tipo = await Tipo.findByPk(req.params.id);
    if (!tipo) return res.status(404).json({ error: "No encontrado" });
    res.json(tipo);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.update = async (req, res) => {
  try {
    const tipo = await Tipo.findByPk(req.params.id);
    if (!tipo) return res.status(404).json({ error: "No encontrado" });
    await tipo.update(req.body);
    res.json(tipo);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.delete = async (req, res) => {
  try {
    const tipo = await Tipo.findByPk(req.params.id);
    if (!tipo) return res.status(404).json({ error: "No encontrado" });
    await tipo.destroy();
    res.json({ message: "Eliminado" });
  } catch (err) { res.status(500).json({ error: err.message }); }
};