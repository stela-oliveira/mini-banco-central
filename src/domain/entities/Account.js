class Account {
  constructor({ id, userId, institutionId, balance = 0 }) {
    this.id = id;
    this.userId = userId;
    this.institutionId = institutionId;
    this.balance = balance;
  }
}

module.exports = Account;