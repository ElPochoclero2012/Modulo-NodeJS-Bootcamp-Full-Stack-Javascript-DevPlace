const mysqlProductRouter= require("./mysql/product.route");
const mysqlCategoryRouter= require("./mysql/category.route");
const mysqlUsersRouter= require("./mysql/users.route");


const mongoUserRouter = require('./mongo/users.route');
const express = require("express");
const indexRoutes = express.Router();

indexRoutes.use('/mongo/users',mongoUserRouter);
indexRoutes.use('/mysql/product',mysqlProductRouter);
indexRoutes.use('/mysql/category',mysqlCategoryRouter);
indexRoutes.use('/mysql/users',mysqlUsersRouter);

module.exports=indexRoutes;