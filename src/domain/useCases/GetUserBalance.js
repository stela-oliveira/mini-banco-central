class GetUserBalance {
    constructor(accountRepository) {
      this.accountRepository = accountRepository;
    }
  
    async execute(userId, institutionName) {
      return this.accountRepository.getUserBalance(userId, institutionName);
    }
  }
  
  module.exports = GetUserBalance;