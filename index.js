const express = require('express')
const conn = require('./db')
const ProductRoutes = require('./routes/ProductsRoute')

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Status OK' })
})

app.use('/products', ProductRoutes)

conn
  .sync()
  .then(() => app.listen(3000))
  .catch((err) => console.error(err))
