var express = require("express");
var router = express.Router();

const ProductController = require("../controller/ProductController");
router.get("/get-all-product", ProductController.getAllProduct);
router.get("/get-detail-product/:nameIP", ProductController.getDetailProduct);
router.get(
    "/get-product-dragonball",
    ProductController.getAllProductDragonBall
);
router.get("/get-product-onepice", ProductController.getAllProductOnePice);

module.exports = router;
