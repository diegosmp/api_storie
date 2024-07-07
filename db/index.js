const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('myStore', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
})

module.exports = sequelize
