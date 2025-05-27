const app = require('./app');
const env = require('./src/infra/config/env');
const logger = require('./src/infra/logger/logger');

app.listen(env.PORT, () => {
  logger.info(`Servidor rodando na porta ${env.PORT}`);
});