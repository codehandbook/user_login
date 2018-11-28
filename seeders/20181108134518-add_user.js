'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      id: 1,
      firstName: 'Jay',
      lastName: 'Raj',
      email: 'jay@gmail.com',
      role: 1,
      password: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 2,
      firstName: 'Roy',
      lastName: 'Agasthyan',
      email: 'roy@gmail.com',
      role: 2,
      password: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 3,
      firstName: 'Jack',
      lastName: 'Samuel',
      email: 'jacksamuel@gmail.com',
      role: 3,
      password: 1,
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
