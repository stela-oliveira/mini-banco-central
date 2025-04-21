const express = require('express');
const router = express.Router();

const userRoutes = require('./userRoutes');
const institutionRoutes = require('./institutionRoutes');
const accountRoutes = require('./accountRoutes');
const transactionRoutes = require('./transactionRoutes');
const statementRoutes = require('./statementRoutes');

module.exports = (controllers) => {
  router.use(userRoutes(controllers.userController));
  router.use(institutionRoutes(controllers.institutionController));
  router.use(accountRoutes(controllers.accountController));
  router.use(transactionRoutes(controllers.transactionController));
  router.use(statementRoutes(controllers.statementController));
  return router;
};