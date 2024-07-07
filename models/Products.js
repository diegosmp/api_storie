const { DataTypes } = require('sequelize')
const sequelize = require('../db')

const Products = sequelize.define('Products', {
  product: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true,
  },
  price: {
    type: DataTypes.REAL,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
  },
  description: {
    type: DataTypes.TEXT,
  },
})

module.exports = Products
