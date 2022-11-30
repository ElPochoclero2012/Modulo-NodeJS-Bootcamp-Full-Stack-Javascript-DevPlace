var Sequelize=require('sequelize');
const databaseMysql= new Sequelize(
    'tienda',
    'root',
    '',{
        host:'localhost',
        dialect:'mysql'
    }
);
databaseMysql.sync();
module.exports = databaseMysql;