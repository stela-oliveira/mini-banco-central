const AccountService = require('../../domain/services/AccountService');

module.exports = {
  async createAccount(req, res) {
    const { id: userId } = req.params;
    const { institutionId, balance } = req.body;
    const account = await AccountService.createAccount({ userId, institutionId, balance });
    res.status(201).json(account);
  },

  async getUserAccounts(req, res) {
    const { id: userId } = req.params;
    const accounts = await AccountService.getAccountsByUser(userId);
    res.json(accounts);
  }
};