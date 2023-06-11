const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const canciones = sequelize.define("canciones", {
  id_cancion: {
    type: DataTypes.INTEGER,
  },
  titulo: { type: DataTypes.STRING },
  artista: { type: DataTypes.STRING },
  genero: { type: DataTypes.STRING },
  duracion: { type: DataTypes.INTEGER },
  ubicacion_archivo: { type: DataTypes.BLOB("long") },
});
module.exports = canciones;
