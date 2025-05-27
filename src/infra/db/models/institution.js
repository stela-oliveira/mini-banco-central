const { DataTypes } = require('sequelize');
const sequelize = require('../../shared/config/db');

const Institution = sequelize.define('Institution', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'institutions',
  timestamps: false
});

module.exports = Institution;