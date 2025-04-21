class GetUserStatement {
    constructor(transactionRepository) {
      this.transactionRepository = transactionRepository;
    }
  
    async execute(userId, institutionName) {
      return this.transactionRepository.getUserStatement(userId, institutionName);
    }
  }
  
  module.exports = GetUserStatement;