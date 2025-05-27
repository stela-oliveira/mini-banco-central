require('dotenv').config();

module.exports = {
  PORT: process.env.PORT || 3000,
  DB_NAME: process.env.DB_NAME || 'openfinance',
  DB_USER: process.env.DB_USER || 'postgres',
  DB_PASS: process.env.DB_PASS || 'postgres',
  DB_HOST: process.env.DB_HOST || 'localhost',
};