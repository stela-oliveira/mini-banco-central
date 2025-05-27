const UserService = require('../../domain/services/UserService');

module.exports = {
  async getOpenFinanceData(req, res) {
    const { id } = req.params;
    const user = await UserService.getUserWithDetails(id);

    if (!user || !user.consentToShare) {
      return res.status(403).json({ message: 'Usuário não permitiu compartilhar dados.' });
    }

    res.json({
      user: {
        id: user.id,
        name: user.name
      },
      accounts: user.Accounts
    });
  }
};