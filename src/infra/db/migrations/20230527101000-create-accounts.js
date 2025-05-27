'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Accounts', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      userId: {
        type: Sequelize.INTEGER,
        references: { model: 'Users', key: 'id' },
        allowNull: false
      },
      institutionId: {
        type: Sequelize.INTEGER,
        references: { model: 'Institutions', key: 'id' },
        allowNull: false
      },
      balance: { type: Sequelize.FLOAT, defaultValue: 0.0 }
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('Accounts');
  }
};