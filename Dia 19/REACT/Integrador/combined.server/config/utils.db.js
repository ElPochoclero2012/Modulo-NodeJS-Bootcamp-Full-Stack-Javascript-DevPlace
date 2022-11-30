const { Category } = require("../models/mysql/category.model");
const { Products } = require("../models/mysql/product.model");
const { User } = require("../models/mysql/user.model");
const databaseMysql = require("./mysql.config");

const dbConfig = require('./database.config.js');
const mongose = require('mongoose');

Category.sync();
User.sync();
Products.sync();
databaseMysql.sync();

/**Cadena conexion con mongo */
mongose.connect(dbConfig.url)
    .then(() => console.log("Conect MongoDB"))
    .catch((err) => {
        console.error(err)
    });
/**Fin de cadena conexion */ 