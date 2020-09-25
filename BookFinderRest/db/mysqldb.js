var mysql = require('mysql');

var dbconnection = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'admin',
        database: 'bookfinder'

    });

module.exports = dbconnection;