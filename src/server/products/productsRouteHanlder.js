const ProductsApi = require('./ProductsApi')
let productsApi = new ProductsApi()

const productsRouteHandler = {
  read (req, res) {
    // let productsApi = new ProductsApi()
    productsApi.fetch((products) => {
      console.log('read = ', products)
      res.send({data: products})
    })
  },

  insert (req, res) {
    // let productsApi = new ProductsApi()
    console.log('model insert = ', req.body)
    productsApi.insert(req.body, (err) => {
      if (err) res.status(500).json({error: err})
      else res.send({status: 'success'})
    })
  }
}

module.exports = productsRouteHandler
