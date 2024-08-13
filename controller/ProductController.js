const ProductActions = require("../actions/ProductActions.js");
const {
    SuccessResponse,
    ErrorResponse,
    NotFoundResponse,
    BadRequestResponse,
} = require("../cors/apiRes.js");
class ProductController {
    async getAllProduct(req, res) {
        try {
            const allProduct = await ProductActions.getAllProduct();
            return new SuccessResponse().send(req, res, allProduct);
        } catch (error) {
            console.error(error);
            return new ErrorResponse().send(req, res);
        }
    }
    async getDetailProduct(req, res) {
        try {
            const { nameIP } = req.params;
            if (!nameIP) {
                return new BadRequestResponse().send(req, res);
            }
            const detailProduct = await ProductActions.getDetailProduct(nameIP);
            return new SuccessResponse().send(req, res, detailProduct);
        } catch (error) {
            console.error(error);
            return new ErrorResponse().send(req, res);
        }
    }
    async getAllProductDragonBall(req, res) {
        try {
            const allProductDragonBall =
                await ProductActions.getProductByCategory(1);
            return new SuccessResponse().send(req, res, allProductDragonBall);
        } catch (error) {
            console.error(error);
            return new ErrorResponse().send(req, res);
        }
    }
    async getAllProductOnePice(req, res) {
        try {
            const allProductOnePice = await ProductActions.getProductByCategory(
                2
            );
            return new SuccessResponse().send(req, res, allProductOnePice);
        } catch (error) {
            console.error(error);
            return new ErrorResponse().send(req, res);
        }
    }
}
module.exports = new ProductController();
