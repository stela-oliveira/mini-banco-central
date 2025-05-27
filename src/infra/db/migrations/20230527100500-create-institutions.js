'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Institutions', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      name: { type: Sequelize.STRING, allowNull: false }
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('Institutions');
  }
};