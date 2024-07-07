const Products = require('../models/Products')

module.exports = class ProductsController {
  static async create(req, res) {
    const { product, price, quantity, description } = req.body
    if (!product) {
      return res.status(422).json({ message: 'O nome do produto é obrigatório!' })
    }
    if (!price) {
      return res.status(422).json({ message: 'O preço é obrigatório!' })
    }
    if (!quantity) {
      return res.status(422).json({ message: 'A quantidade é obrigatório!' })
    }

    if (description && description.length < 80) {
      return res.status(422).json({ message: 'A descrição tem quer no minímo 80 caracteres' })
    }

    const existsProduct = await Products.findOne({ where: { product } })
    if (existsProduct) {
      return res.status(422).json({ message: 'Produto já cadastrado!' })
    }
    try {
      const newProduct = await Products.create({
        product,
        price,
        quantity,
        description,
      })

      return res.status(201).json({ message: 'Produto criado com sucesso!', newProduct })
    } catch (error) {}
  }

  static async update(req, res) {
    const { id } = req.params
    const { product, price, quantity, description } = req.body
    if (!product) {
      return res.status(422).json({ message: 'O nome do produto é obrigatório!' })
    }
    if (!price) {
      return res.status(422).json({ message: 'O preço é obrigatório!' })
    }
    if (!quantity) {
      return res.status(422).json({ message: 'A quantidade é obrigatório!' })
    }

    if (description && description.length < 80) {
      return res.status(422).json({ message: 'A descrição tem quer no minímo 80 caracteres' })
    }

    const productId = await Products.findByPk(id)
    if (!productId) {
      return res.status(404).json({ message: 'Produto não cadastrado!' })
    }

    try {
      await Products.update(
        {
          product,
          price,
          quantity,
          description,
        },
        { where: { id } },
      )

      return res.status(200).json({ message: 'Produto atualizado com sucesso!' })
    } catch (error) {}
  }
}
