
const express = require('express');

const path = require('path');

/**
 * Variable que almacena la aplicación de express encargada de la gestión del servidor web
 */
const app = express();

// Servir archivos estáticos
app.use(express.static(__dirname + '/dist/<nobleui-angular>'));

// Para todas las demás rutas servir el archivo index.html así se le pasa el manejo de las rutas a Angular y el sabe qué hacer
app.get('/*', function(req,res) {

res.sendFile(path.join(__dirname+

'/dist/<nobleui-angular>/index.html'));});

app.listen(process.env.PORT || 8080);