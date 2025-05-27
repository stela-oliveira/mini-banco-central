const TransactionService = require('../../domain/services/TransactionService');

module.exports = {
  async addTransaction(req, res) {
    const { id: userId } = req.params;
    const { accountId, type, amount } = req.body;

    const transaction = await TransactionService.addTransaction(userId, accountId, { type, amount });
    res.status(201).json(transaction);
  },

  async getUserTransactions(req, res) {
    const { id: userId } = req.params;
    const { institution } = req.query;

    let transactions;

    if (institution) {
      transactions = await TransactionService.getUserTransactionsByInstitution(userId, institution);
    } else {
      transactions = await TransactionService.getUserTransactions(userId);
    }

    res.json(transactions);
  }
};