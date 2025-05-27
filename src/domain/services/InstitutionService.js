const InstitutionRepository = require('../repositories/InstitutionRepository');

module.exports = {
  async createInstitution(data) {
    return await InstitutionRepository.create(data);
  },

  async getAllInstitutions() {
    return await InstitutionRepository.findAll();
  }
};