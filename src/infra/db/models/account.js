const { DataTypes } = require('sequelize');
const sequelize = require('../../shared/config/db');
const User = require('./user');
const Institution = require('./institution');

const Account = sequelize.define('Account', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  institutionId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  balance: {
    type: DataTypes.FLOAT,
    defaultValue: 0.0
  }
}, {
  tableName: 'accounts',
  timestamps: false
});

// Associations
User.hasMany(Account, { foreignKey: 'userId' });
Institution.hasMany(Account, { foreignKey: 'institutionId' });
Account.belongsTo(User, { foreignKey: 'userId' });
Account.belongsTo(Institution, { foreignKey: 'institutionId' });

module.exports = Account;