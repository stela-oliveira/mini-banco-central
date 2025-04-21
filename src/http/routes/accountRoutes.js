const express = require('express');
const router = express.Router();

module.exports = (accountController) => {
  router.post('/usuarios/:id/contas', (req, res) => accountController.create(req, res));
  return router;
};