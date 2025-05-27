const AccountRepository = require('../repositories/AccountRepository');

module.exports = {
  async createAccount(data) {
    return await AccountRepository.create(data);
  },

  async getAccountsByUser(userId) {
    return await AccountRepository.findByUserId(userId);
  },

  async updateBalance(accountId, newBalance) {
    return await AccountRepository.updateBalance(accountId, newBalance);
  }
};