const express = require('express');
const router = express.Router();

module.exports = (statementController) => {
  router.get('/usuarios/:id/saldo', (req, res) => statementController.getBalance(req, res));
  router.get('/usuarios/:id/extrato', (req, res) => statementController.getStatement(req, res));
  return router;
};