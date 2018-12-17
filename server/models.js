const Sequelize = require('sequelize');
const db = require('./db.js');

module.exports = db.sequelize.define('tblvues', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: { type: Sequelize.STRING },
  author: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING
  },

  owner: {
    type: Sequelize.STRING
  }
});
