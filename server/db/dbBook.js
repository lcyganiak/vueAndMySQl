const Sequelize = require('sequelize');

const dbBook = {};
const sequelize = new Sequelize('vueprojektlc', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  modelOptions: {
    timestamps: false
  },
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

dbBook.sequelize = sequelize;
dbBook.Sequelize = Sequelize;

module.exports = dbBook;
