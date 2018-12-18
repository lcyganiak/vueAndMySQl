const Sequelize = require('sequelize');
const db = require('../db/db.js');

module.exports = db.sequelize.define('tblvues', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  author: {
    type: Sequelize.STRING
  },
  title: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  }
});
