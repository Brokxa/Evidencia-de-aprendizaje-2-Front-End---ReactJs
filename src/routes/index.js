const express = require('express');
const router = express.Router();

router.use('/generos', require('./genero.routes'));
router.use('/directores', require('./director.routes'));
router.use('/productoras', require('./productora.routes'));
router.use('/tipos', require('./tipo.routes'));
router.use('/medias', require('./media.routes'));

module.exports = router;