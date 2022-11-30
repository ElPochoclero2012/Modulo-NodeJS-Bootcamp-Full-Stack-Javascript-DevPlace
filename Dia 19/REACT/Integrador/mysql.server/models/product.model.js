var Sequelize = require('sequelize');
var sequelize = require('../config/mysql.config');

var Products= sequelize.define('product',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true 
    },
    name: Sequelize.STRING,
    stock: Sequelize.INTEGER,
    image:Sequelize.TEXT,
    category:Sequelize.INTEGER
});

module.exports = Products;