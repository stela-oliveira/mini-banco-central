const InstitutionService = require('../../domain/services/InstitutionService');

module.exports = {
  async createInstitution(req, res) {
    const { name } = req.body;
    const institution = await InstitutionService.createInstitution({ name });
    res.status(201).json(institution);
  },

  async getAllInstitutions(req, res) {
    const institutions = await InstitutionService.getAllInstitutions();
    res.json(institutions);
  }
};