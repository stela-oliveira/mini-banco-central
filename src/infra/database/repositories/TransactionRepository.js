const db = require('../../connection');

class TransactionRepository {
  async create({ accountId, type, amount, description }) {
    const [transaction] = await db('transactions')
      .insert({
        account_id: accountId,
        type,
        amount,
        description,
        date: new Date(),
      })
      .returning('*');
    return transaction;
  }

  async getUserStatement(userId, institutionName) {
    const query = db('transactions')
      .select(
        'transactions.id',
        'transactions.account_id',
        'transactions.type',
        'transactions.amount',
        'transactions.description',
        'transactions.date',
        'institutions.name as institution'
      )
      .join('accounts', 'transactions.account_id', 'accounts.id')
      .join('institutions', 'accounts.institution_id', 'institutions.id')
      .where('accounts.user_id', userId);

    if (institutionName) {
      query.andWhere('institutions.name', institutionName);
    }

    return query.orderBy('transactions.date', 'desc');
  }
}

module.exports = TransactionRepository;