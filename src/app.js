const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./infra/db/db');
const logger = require('./infra/logger/logger');

const userRoutes = require('./http/routes/userRoutes');
const institutionRoutes = require('./http/routes/institutionRoutes');
const openFinanceRoutes = require('./http/routes/openFinanceRoutes');

const app = express();

app.use(bodyParser.json());

app.use('/api', userRoutes);
app.use('/api', institutionRoutes);
app.use('/api', openFinanceRoutes);

app.use((err, req, res, next) => {
  logger.error(err.stack);
  res.status(500).send({ message: 'Algo deu errado!' });
});

sequelize.authenticate()
  .then(() => logger.info('Conexão com o banco de dados realizada com sucesso.'))
  .catch(err => logger.error('Erro ao conectar com o banco de dados:', err));

module.exports = app;