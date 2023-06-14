const { check } = require("express-validator");
const { validateResult } = require("../helpers/validateResult");

const validateCreate = [
  check("nombre")
    .exists()
    .not()
    .isEmpty()
    .withMessage("el nombre es obligatorio"),
  check("email")
    .exists()
    .not()
    .isEmpty()
    .withMessage("el email es obligatorio")
    .isEmail(),
  check("password")
    .exists()
    .not()
    .isEmpty()
    .withMessage("la contraseña es obligatoria")
    .isLength({ min: 8 })
    .withMessage("la contraseña debe tener al menos 8 caracteres")
    .matches(/\d/)
    .withMessage("la contraseña debe tener al menos un numero")
    .matches(/[A-Z]/)
    .withMessage("la contraseña debe tener al menos una letra mayuscula"),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];
module.exports = { validateCreate };
