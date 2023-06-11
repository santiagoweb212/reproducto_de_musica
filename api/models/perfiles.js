const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const perfiles = sequelize.define("perfiles", {
  id_perfil: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false },
  id_usuario: { type: DataTypes.INTEGER },
  nombre: { type: DataTypes.STRING, allowNull: false },
  foto_perfil: {
    type: DataTypes.BLOB("long"),
    allowNull: true,
  },
});
module.exports = perfiles;
