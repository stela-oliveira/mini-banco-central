const User = require('../../infra/db/models/user');

module.exports = {
  async create(userData) {
    return await User.create(userData);
  },

  async findById(id) {
    return await User.findByPk(id);
  },

  async findWithAccountsAndTransactions(id) {
    return await User.findByPk(id, {
      include: { all: true, nested: true }
    });
  }
};