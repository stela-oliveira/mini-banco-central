const db = require('../../connection');

class UserRepository {
  async create({ name }) {
    const [user] = await db('users').insert({ name }).returning(['id', 'name']);
    return user;
  }

  async findById(id) {
    return db('users').where({ id }).first();
  }
}

module.exports = UserRepository;