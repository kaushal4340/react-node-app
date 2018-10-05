const reject = require('lodash').reject
const filter = require('lodash').filter
const uuid = require('uuid')

class ProductsApi {
  constructor (logger) {
    this.logger = logger
    // in memory product list
    this.products = [{
      id: 1,
      productName: 'Galaxy S9',
      price: '45000',
      manufacturer: 'samsung'
    }, {
      id: 2,
      productName: 'iphoneX',
      price: '100000',
      manufacturer: 'Apple'
    }]
  }

  read (productId, callback) {
    let id = parseInt(productId)
    let product = filter(this.products, {'id': id})
    this.logger.info(`Edit product details: ${JSON.stringify(product)}`)
    callback(null, product)
  }

  readAll (callback) {
    callback(this.products)
  }

  insert (model, callback) {
    try {
      model.id = uuid()
      this.products.push(model)
      callback()
    } catch (err) {
      callback(err)
    }
  }

  remove (productId, callback) {
    try {
      let id = parseInt(productId)
      this.products = reject(this.products, {'id': id})
      callback(null, this.products)
    } catch (err) {
      callback(err)
    }
  }
}

module.exports = ProductsApi
