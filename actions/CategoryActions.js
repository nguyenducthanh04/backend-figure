const model = require("../models/index");
const Categories = model.Categories;
class CategoryActions {
    async getAllCategory() {
        const allCategory = await Categories.findAll();
        return allCategory;
    }
}
module.exports = new CategoryActions();
