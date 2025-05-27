const Transaction = require('../../infra/db/models/transaction');

module.exports = {
  async create(transactionData) {
    return await Transaction.create(transactionData);
  },

  async findByUserId(userId) {
    return await Transaction.findAll({ where: { userId } });
  },

  async findByUserAndInstitution(userId, institutionId) {
    return await Transaction.findAll({ where: { userId, institutionId } });
  }
};