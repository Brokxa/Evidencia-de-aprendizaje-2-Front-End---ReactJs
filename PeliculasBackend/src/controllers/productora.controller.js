const { Productora } = require('../models');

exports.create = async (req, res) => {
  try {
    const productora = await Productora.create(req.body);
    res.status(201).json(productora);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.findAll = async (req, res) => {
  try { res.json(await Productora.findAll()); }
  catch (err) { res.status(500).json({ error: err.message }); }
};

exports.findOne = async (req, res) => {
  try {
    const productora = await Productora.findByPk(req.params.id);
    if (!productora) return res.status(404).json({ error: "No encontrado" });
    res.json(productora);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.update = async (req, res) => {
  try {
    const productora = await Productora.findByPk(req.params.id);
    if (!productora) return res.status(404).json({ error: "No encontrado" });
    await productora.update(req.body);
    res.json(productora);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.delete = async (req, res) => {
  try {
    const productora = await Productora.findByPk(req.params.id);
    if (!productora) return res.status(404).json({ error: "No encontrado" });
    await productora.destroy();
    res.json({ message: "Eliminado" });
  } catch (err) { res.status(500).json({ error: err.message }); }
};