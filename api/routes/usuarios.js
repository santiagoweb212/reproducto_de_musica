const { Router } = require("express");
const { getUsuarios, postUsuarios } = require("../controllers/usuarios");
const{validateCreate} = require("../validators/usuarios");
const router = Router();
router.get("/", getUsuarios);
router.post("/create-user",validateCreate,postUsuarios)
module.exports = router;
