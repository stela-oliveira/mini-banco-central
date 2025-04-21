const db = require('../../connection');

class InstitutionRepository {
  async create({ name }) {
    const [institution] = await db('institutions').insert({ name }).returning(['id', 'name']);
    return institution;
  }

  async findByName(name) {
    return db('institutions').where({ name }).first();
  }
}

module.exports = InstitutionRepository;