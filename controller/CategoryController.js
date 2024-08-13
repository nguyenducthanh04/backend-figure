const CategoryActions = require("../actions/CategoryActions");
const {
    SuccessResponse,
    ErrorResponse,
    NotFoundResponse,
    BadRequestResponse,
} = require("../cors/apiRes.js");
class CategoryController {
    async getAllCategory(req, res) {
        try {
            const allCategory = await CategoryActions.getAllCategory();
            return new SuccessResponse().send(req, res, allCategory);
        } catch (error) {
            console.error(error);
            return new ErrorResponse().send(req, res);
        }
    }
}
module.exports = new CategoryController();
