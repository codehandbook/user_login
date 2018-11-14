'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('UserRoles', [{
      id: 1,
      role: 'admin',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 2,
      role: 'employer',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 3,
      role: 'employee',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
