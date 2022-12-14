const express = require ('express');
const cors = require('cors');
const server = express();
const dotenv = require('dotenv').config();
const port = process.env.PORT || 3000;

const productoRouter = require('./routes/recurso.route');
const usuarioRouter = require('./routes/usuario.route');

const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/Dia31Test") // Punto 3 y 4 (No tengo forma de mostrar que hice la base de datos desde el código)
    .then( () => console.log("Conectado a mongoDB..."))
    .catch((err) => console.log(err));

server.use(express.json());
server.use(cors());
server.use(productoRouter);
server.use(usuarioRouter);


server.listen(port, () => {
    console.log(`Servidor corriendo en ${port}`);
});

// Punto 8 realizado