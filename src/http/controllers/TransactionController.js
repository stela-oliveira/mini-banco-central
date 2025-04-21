class TransactionController {
  constructor(addTransaction) {
    this.addTransaction = addTransaction;
  }

  async create(req, res) {
    const { id: userId } = req.params;
    const transaction = await this.addTransaction.execute({ ...req.body, userId });
    res.status(201).json(transaction);
  }
}

module.exports = TransactionController;