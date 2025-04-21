class AccountController {
  constructor(createAccount) {
    this.createAccount = createAccount;
  }

  async create(req, res) {
    const userId = req.params.id;
    const account = await this.createAccount.execute({ ...req.body, userId });
    res.status(201).json(account);
  }
}

module.exports = AccountController;