const mongo=require("mongoose");
mongo.connect("mongodb://127.0.0.1:27017/RECIPE")
// var conn=mongo.connection;
mongo.connection.on('connected', () => console.log('Connected'));
mongo.connection.on('error', () => console.log('Connection failed with '));
require('./customer');
require('./signup');