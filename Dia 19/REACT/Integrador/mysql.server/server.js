const express = require ('express');
const server = express();
const dotenv = require('dotenv').config();
const port = process.env.PORT || 3000;
const productRouter = require('./routes/product.route');

const mysql = require ('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password: ''
})

server.use(express.json());
server.use(express.urlencoded({ extended: true}));
server.use('/product', productRouter)
server.use(productRouter);

server.listen(port,() => {
    console.log(`BD conectada... Puerto ${port}`);
});