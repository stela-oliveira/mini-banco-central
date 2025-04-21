class CreateAccount {
  constructor(accountRepository) {
    this.accountRepository = accountRepository;
  }

  async execute(data) {
    return this.accountRepository.create(data);
  }
}

module.exports = CreateAccount;