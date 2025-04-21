const express = require('express');
const router = express.Router();

module.exports = (transactionController) => {
  router.post('/usuarios/:id/transacoes', (req, res) => transactionController.create(req, res));
  return router;
};