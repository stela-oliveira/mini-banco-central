class Transaction {
  constructor({ id, accountId, type, amount, description, date }) {
    this.id = id;
    this.accountId = accountId;
    this.type = type;
    this.amount = amount;
    this.description = description;
    this.date = date;
  }
}

module.exports = Transaction;