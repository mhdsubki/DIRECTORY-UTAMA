const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = require("./User.model");
const Product = require("./Product.model");

const Order = sequelize.define("Order", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  userId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM("new", "processing", "completed", "cancelled"),
    allowNull: false,
  },
  totalAmount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

Order.belongsTo(User, { foreignKey: "userId" });
Order.belongsToMany(Product, { through: "OrderDetails" });

module.exports = Order;
