const bcryp = require("bcrypt");
const encripPassword = async (contraseña) => {
  const saltRounds = 10;
  const hashPassword = await bcryp.hash(contraseña, saltRounds);
  return hashPassword;
};
module.exports = encripPassword;
