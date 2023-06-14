const usuarios = require("../models/usuarios");
const getUsuarios = async (req, res) => {
  try {
    return res.status(200).send("hola");
  } catch (error) {}
};
const postUsuarios = async (req, res) => {
  try {
    const { nombre, email, password } = req.body;
    const newUser = await usuarios.create({
      nombre_usuario: nombre,
      correo_electronico: email,
      password,
    });
    res.status(200).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = { getUsuarios, postUsuarios };
