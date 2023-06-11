const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const playlist = sequelize.define('playlist',{
    id_playlist:{
        type:DataTypes.INTEGER,
        primaryKey:true,
    },
    id_usuario:{
        type:DataTypes.INTEGER
    }

})
module.exports = playlist