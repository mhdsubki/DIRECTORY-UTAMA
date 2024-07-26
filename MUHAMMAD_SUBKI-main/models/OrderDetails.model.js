const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Order = require("./Order.model");
const Product = require("./Product.model");

const OrderDetails = sequelize.define("OrderDetails", {
  orderId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: Order,
      key: "id",
    },
  },
  productId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: Product,
      key: "id",
    },
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

module.exports = OrderDetails;
