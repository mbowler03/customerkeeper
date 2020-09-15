const config = require("../config/config");
const dbConfig = config.db;
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: 0,
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.customers = require("./customer.model.js")(sequelize, Sequelize);

module.exports = db;
