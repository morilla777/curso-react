const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { dbConnection } = require('./database/config');

const port = process.env.PORT;

// Crear el servidor de express
const app = express();

// Base de datos
dbConnection();

// CORS
app.use(cors());


app.use( express.urlencoded({ extended: false }));
//Lectura y parsing del body
app.use( express.json() );

// Rutas
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));

//Directorio Público
app.use( express.static('public') );






//Escuchar peticiones
app.listen( port, () => {
    console.log(`Servidor corriendo en puerto ${ port }`);
});
