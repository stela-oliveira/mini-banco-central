'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Transactions', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      accountId: {
        type: Sequelize.INTEGER,
        references: { model: 'Accounts', key: 'id' },
        allowNull: false
      },
      type: { type: Sequelize.ENUM('credit', 'debit'), allowNull: false },
      amount: { type: Sequelize.FLOAT, allowNull: false },
      date: { type: Sequelize.DATE, defaultValue: Sequelize.NOW }
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('Transactions');
  }
};