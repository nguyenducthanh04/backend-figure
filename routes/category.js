var express = require("express");
var router = express.Router();

const CategoryController = require("../controller/CategoryController");

router.get("/get-all-category", CategoryController.getAllCategory);

module.exports = router;
