const db = require('../../connection');

class AccountRepository {
  async create({ userId, institutionId }) {
    const [account] = await db('accounts')
      .insert({ user_id: userId, institution_id: institutionId, balance: 0 })
      .returning(['id', 'user_id as userId', 'institution_id as institutionId', 'balance']);
    return account;
  }

  async updateBalance(accountId, type, amount) {
    const operator = type === 'credit' ? '+' : '-';
    await db.raw(
      `UPDATE accounts SET balance = balance ${operator} ? WHERE id = ?`,
      [amount, accountId]
    );
  }

  async getUserBalance(userId, institutionName) {
    const query = db('accounts')
      .join('institutions', 'accounts.institution_id', '=', 'institutions.id')
      .where('accounts.user_id', userId)
      .sum('accounts.balance as total');

    if (institutionName) {
      query.andWhere('institutions.name', institutionName);
    }

    const [result] = await query;
    return parseFloat(result.total || 0);
  }
}

module.exports = AccountRepository;