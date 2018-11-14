'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserRole = sequelize.define('UserRole', {
    role: DataTypes.STRING
  }, {});
  UserRole.associate = function(models) {
    // associations can be defined here
  };
  return UserRole;
};