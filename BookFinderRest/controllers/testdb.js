var dbconnect = require('../db/mysqldb.js');

dbconnect.query("select * from customers", (err, rows) => {
    if (err) throw err
    console.log(rows);
})