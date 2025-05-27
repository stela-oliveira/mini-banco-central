class Transaction {
  constructor({ id, accountId, type, amount, date }) {
    this.id = id;
    this.accountId = accountId;
    this.type = type;  // 'credit' or 'debit'
    this.amount = amount;
    this.date = date;
  }
}

module.exports = Transaction;