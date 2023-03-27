const express = require('express');
const router = express.Router();

router.use('/users', require('./users'));
router.use('/itemvarios', require('./itemvarios'));

// Exportar rutas
module.exports = (app) => {
  app.use(router);
};