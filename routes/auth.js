var express = require("express");
var router = express.Router();

const AuthController = require("../controller/AuthController");
router.post("/login", AuthController.Login);
router.post("/register", AuthController.Register);
module.exports = router;
