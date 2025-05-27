'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      name: { type: Sequelize.STRING, allowNull: false },
      consentToShare: { type: Sequelize.BOOLEAN, defaultValue: false }
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('Users');
  }
};