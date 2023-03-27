const express = require('express');
const router = express.Router();

// Rutas de usuarios
router.get('/', (req, res) => {
  res.send('Lista de items varios');
});

router.post('/', (req, res) => {
  res.send('Usuario creado');
});

router.put('/:id', (req, res) => {
  res.send('Usuario actualizado');
});

router.delete('/:id', (req, res) => {
  res.send('Usuario eliminado');
});

// Exportar rutas
module.exports = router;