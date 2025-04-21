class StatementController {
    constructor(getUserBalance, getUserStatement) {
      this.getUserBalance = getUserBalance;
      this.getUserStatement = getUserStatement;
    }
  
    async getBalance(req, res) {
      const { id } = req.params;
      const { instituicao } = req.query;
      const balance = await this.getUserBalance.execute(id, instituicao);
      res.json({ balance });
    }
  
    async getStatement(req, res) {
      const { id } = req.params;
      const { instituicao } = req.query;
      const statement = await this.getUserStatement.execute(id, instituicao);
      res.json(statement);
    }
  }
  
  module.exports = StatementController;  