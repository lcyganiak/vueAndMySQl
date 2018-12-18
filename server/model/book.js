const Sequelize = require('sequelize');
const dbBook = require('../db/dbBook.js');

module.exports = dbBook.sequelize.define('book', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  title: {
    type: Sequelize.INTEGER
  },
  description: {
    type: Sequelize.INTEGER
  }
});
