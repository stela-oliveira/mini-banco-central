const express = require('express');
const router = express.Router();

module.exports = (institutionController) => {
  router.post('/instituicoes', (req, res) => institutionController.create(req, res));
  return router;
};