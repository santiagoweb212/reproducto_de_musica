const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "db_music" /* nombre de la base de datos */,
  "postgres" /* nombre de usuario */,
  "123456789" /* contraseña de postgres */,
  {
    host: "localhost",
    dialect:
      "postgres" /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */,
  }
);

module.exports = sequelize;
