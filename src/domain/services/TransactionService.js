const TransactionRepository = require('../repositories/TransactionRepository');
const AccountRepository = require('../repositories/AccountRepository');

module.exports = {
  async addTransaction(userId, accountId, { type, amount }) {
    const transaction = await TransactionRepository.create({
      userId,
      accountId,
      type,
      amount,
      date: new Date()
    });

    const account = await AccountRepository.findByUserId(userId);
    let newBalance = account.find(a => a.id === accountId).balance;

    newBalance += (type === 'credit') ? amount : -amount;

    await AccountRepository.updateBalance(accountId, newBalance);

    return transaction;
  },

  async getUserTransactions(userId) {
    return await TransactionRepository.findByUserId(userId);
  },

  async getUserTransactionsByInstitution(userId, institutionId) {
    return await TransactionRepository.findByUserAndInstitution(userId, institutionId);
  }
};