const Account = require('../../infra/db/models/account');

module.exports = {
  async create(accountData) {
    return await Account.create(accountData);
  },

  async findByUserId(userId) {
    return await Account.findAll({ where: { userId } });
  },

  async findByUserAndInstitution(userId, institutionId) {
    return await Account.findOne({ where: { userId, institutionId } });
  },

  async updateBalance(accountId, newBalance) {
    const account = await Account.findByPk(accountId);
    account.balance = newBalance;
    return await account.save();
  }
};