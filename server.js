const express = require('express');  // Importa el módulo Express
const path = require('path');       // Módulo nativo de Node.js para gestionar rutas de archivos
const app = express();              // Crea una instancia de la aplicación Express

// Configura Express para servir archivos estáticos (como HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Establece el puerto donde el servidor escuchará las solicitudes
const puerto = 3000;

// Inicia el servidor y escucha en el puerto definido
app.listen(puerto, () => {
    console.log(`Servidor corriendo en http://localhost:${puerto}`);
});
