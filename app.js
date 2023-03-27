const express = require('express');
const app = express();

// Configurar rutas
require('./routes')(app);


// Iniciar servidor
app.listen(80, () => {
    console.log('Servidor iniciado en el puerto 80');
});