const express = require('express');
const router = express.Router();
const { getCustomers, createCustomer } = require('../controllers/customercontroller');

router.route('/').get(getCustomers).post(createCustomer);

//router.route('/:id').put(update).delete().get()

module.exports = router;