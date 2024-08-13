const model = require("../models/index");
const Product = model.Product;
const Image = model.Images;
class ProductActions {
    async getAllProduct() {
        const allProduct = await Product.findAll({
            include: {
                model: Image,
            },
        });
        return allProduct;
    }
    async getDetailProduct(nameIP) {
        const detailProduct = await Product.findOne({
            where: {
                nameIP: nameIP,
            },
            include: {
                model: Image,
            },
        });
        return detailProduct;
    }
    async getProductByCategory(category) {
        const product = await Product.findAll({
            where: {
                categoryId: category,
            },
            include: {
                model: Image,
            },
        });
        return product;
    }
}
module.exports = new ProductActions();
