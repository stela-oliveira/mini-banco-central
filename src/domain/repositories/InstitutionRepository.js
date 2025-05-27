const Institution = require('../../infra/db/models/institution');

module.exports = {
  async create(institutionData) {
    return await Institution.create(institutionData);
  },

  async findById(id) {
    return await Institution.findByPk(id);
  },

  async findAll() {
    return await Institution.findAll();
  }
};