"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Product extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Product.hasMany(models.Images, {
                foreignKey: "productId",
            });
            Product.belongsTo(models.Categories, {
                foreignKey: "categoryId",
            });
        }
    }
    Product.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            nameIP: DataTypes.STRING,
            name: DataTypes.STRING,
            price: DataTypes.INTEGER,
            description: DataTypes.STRING,
            quantity: DataTypes.INTEGER,
            categoryId: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "Product",
        }
    );
    return Product;
};
