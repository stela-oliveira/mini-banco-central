class UserController {
  constructor(createUser) {
    this.createUser = createUser;
  }

  async create(req, res) {
    const user = await this.createUser.execute(req.body);
    res.status(201).json(user);
  }
}

module.exports = UserController;