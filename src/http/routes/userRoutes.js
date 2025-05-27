const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');
const AccountController = require('../controllers/accountController');
const TransactionController = require('../controllers/transactionController');

router.post('/usuarios', UserController.createUser);
router.post('/usuarios/:id/contas', AccountController.createAccount);
router.post('/usuarios/:id/transacoes', TransactionController.addTransaction);
router.get('/usuarios/:id/extrato', TransactionController.getUserTransactions);

module.exports = router;