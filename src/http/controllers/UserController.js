const UserService = require('../../domain/services/UserService');

module.exports = {
  async createUser(req, res) {
    const { name, consentToShare } = req.body;
    const user = await UserService.createUser({ name, consentToShare });
    res.status(201).json(user);
  },

  async getUserDetails(req, res) {
    const { id } = req.params;
    const user = await UserService.getUserWithDetails(id);
    res.json(user);
  }
};