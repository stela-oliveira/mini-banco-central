const UserRepository = require('../repositories/UserRepository');

module.exports = {
  async createUser(data) {
    return await UserRepository.create(data);
  },

  async getUserWithDetails(id) {
    return await UserRepository.findWithAccountsAndTransactions(id);
  }
};