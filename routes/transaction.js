const express = require('express');
 const { getTransactions, createTransaction, deleteTransaction } = require('../controllers/transaction.controller');

const router = express.Router();


router
    .route('/')
    .get(getTransactions)
    .post(createTransaction);

router
    .route('/:id')
    .delete(deleteTransaction);


module.exports = router;