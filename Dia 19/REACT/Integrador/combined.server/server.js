const express = require("express");
const app = express(); 
const bodyParser = require("body-parser");
const cors = require('cors');
const port = 5050;
const errorHandler = require("./middlewares/errorHandler");
const indexRoutes = require("./routes/index.route.js");
require('./config/utils.db');




app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(errorHandler);
app.use('/upload', express.static('upload'));
app.use('/v0/',indexRoutes);

app.listen(port, () => {
    console.log(`Servidor corriendo por el puerto ${port}`);
})