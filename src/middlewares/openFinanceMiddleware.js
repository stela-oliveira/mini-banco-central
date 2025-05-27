const UserService = require('../../domain/services/UserService');

module.exports = async function (req, res, next) {
  const { id } = req.params;

  const user = await UserService.getUserById(id);

  if (!user || !user.consentToShare) {
    return res.status(403).json({ message: 'Usuário não permitiu compartilhar dados.' });
  }

  next();
};