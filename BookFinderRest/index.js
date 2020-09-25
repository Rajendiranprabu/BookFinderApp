const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./routers/router');
app.use(express.json());
app.use(cors());

/* app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    //  resp.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');



    next();
}); */


app.use(require('./middleware/auth'));


app.use('/customers', router);


app.post('/login', require('./controllers/logincontroller'));

app.listen(5000, () => console.log('server running at port number 5000'));

