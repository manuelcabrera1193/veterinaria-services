const express = require('express');
const app = express();

// Configurar rutas
require('./routes')(app);


// Iniciar servidor
app.listen(8080, () => {
    console.log('Servidor iniciado en el puerto 8080');
});
