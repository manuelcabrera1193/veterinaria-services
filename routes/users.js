const mysql = require("mysql");


const connection = require('../database').getConnection()

const express = require('express');
const router = express.Router();

// Rutas de usuarios
router.get('/', (req, res) => {
  connection.query('SELECT * FROM Usuario', (error, results) => {
    if (error) throw error;
    res.json(results);
  });
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