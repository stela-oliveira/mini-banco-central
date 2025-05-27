const express = require('express');
const router = express.Router();
const OpenFinanceController = require('../controllers/openFinanceController');
const openFinanceMiddleware = require('../../http/middlewares/openFinanceMiddleware');

router.get('/openfinance/user/:id', openFinanceMiddleware, OpenFinanceController.getOpenFinanceData);

module.exports = router;