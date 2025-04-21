class AddTransaction {
  constructor(transactionRepository, accountRepository) {
    this.transactionRepository = transactionRepository;
    this.accountRepository = accountRepository;
  }

  async execute(data) {
    const transaction = await this.transactionRepository.create(data);
    await this.accountRepository.updateBalance(data.accountId, data.type, data.amount);
    return transaction;
  }
}

module.exports = AddTransaction;