const ProductsController = require('../controllers/ProductsController')

const route = require('express').Router()

route.post('/create', ProductsController.create)
route.patch('/update/:id', ProductsController.update)

module.exports = route
