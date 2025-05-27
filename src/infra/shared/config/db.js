const { Sequelize } = require('sequelize');
const env = require('../config/env');

const sequelize = new Sequelize(env.DB_NAME, env.DB_USER, env.DB_PASS, {
  host: env.DB_HOST,
  dialect: 'postgres'
});

module.exports = sequelize;