const usuarios = require("../models/usuarios");
const perfiles = require("../models/perfiles");
const playlist = require("../models/playlist");
const canciones = require("../models/canciones");
usuarios.hasOne(perfiles, { foreignKey: "id_usuario" }); //relacion uno a uno usuario tiene un solo perfil
usuarios.hasMany(playlist, { foreignKey: "id_usuario" });
playlist.belongsToMany(canciones, { through: "canciones_playlist" });
canciones.belongsToMany(playlist, { through: "canciones_playlist" });
