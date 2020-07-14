const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "Sonushinu13", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
