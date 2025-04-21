const express = require('express');
const router = express.Router();

module.exports = (userController) => {
  router.post('/usuarios', (req, res) => userController.create(req, res));
  return router;
};