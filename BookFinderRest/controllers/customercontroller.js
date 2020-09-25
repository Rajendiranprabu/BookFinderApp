const dbcon = require('../db/mysqldb');

exports.getCustomers = (req, res, next) => {
    //let con = dbcon.connect();
    dbcon.query('select * from customers', (err, rows) => {
        if (err) throw err

        res.status(200).json(rows);
        res.end();
        //dbcon.end();
    })
}

exports.createCustomer = (req, res, next) => {
    const requiredFields = ['firstname', 'lastname', 'email', 'password'];
    const missingFields = [];
    requiredFields.forEach(field => {
        if (field in req.body === false) {
            missingFields.push(field)
        }
    })

    if (missingFields.length > 0) {
        res.status(400);
        res.json({ missingFields });
        return;
    }
    // let con = dbcon.connect();
    dbcon.query('insert into customers set ?', req.body, (err) => {
        if (err) throw err

        res.status(200).json({ success: true });
        res.end();
        //   dbcon.end();

    })



}


/* exports.updateCustomer = (req, res, next) => {
    const data=[req.body.customerName,req.params.id];
    dbcon.query('update customers set customerName=? where customerId=?',data, (err, row) => {
        if (err) throw err
        res.status(200).json({ success: true });
        res.end();
        //   dbcon.end();

    })
} */