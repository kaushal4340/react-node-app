const reject = require('lodash').reject
const filter = require('lodash').filter
const map = require('lodash').map
const uuid = require('uuid')

class ProductsApi {
  constructor (logger) {
    this.logger = logger
    // in memory product list
    this.products = [{
      id: 'b7d9b060-82d1-45d3-8f77-bb531c552c81',
      productName: 'Galaxy S9',
      price: '45000',
      manufacturer: 'samsung'
    }, {
      id: 'b9d9b060-82d1-45d3-8f77-bb531c452c81',
      productName: 'iphoneX',
      price: '100000',
      manufacturer: 'Apple'
    }]
  }

  read (productId, callback) {
    let product = filter(this.products, {'id': productId})
    this.logger.info(`Read product by product id : ${JSON.stringify(product)}`)
    callback(null, product)
  }

  readAll (callback) {
    callback(this.products)
  }

  insert (model, callback) {
    try {
      this.logger.info(`Insert new product : ${JSON.stringify(model)}`)
      model.id = uuid()
      this.products.push(model)
      callback()
    } catch (err) {
      callback(err)
    }
  }

  remove (productId, callback) {
    try {
      // let id = parseInt(productId)
      this.products = reject(this.products, {'id': productId})
      callback(null, this.products)
    } catch (err) {
      callback(err)
    }
  }

  update (productId, model, callback) {
    console.log('update = ', model)
    try {
      this.products = map(this.products, (product) => {
        if (product.id === productId) {
          return {
            id: productId,
            productName: model.productName,
            price: model.price,
            manufacturer: model.manufacturer
          }
        }
        return product
      })
      callback(null, 'sucess')
    } catch (err) {
      callback(err)
    }
  }
}

module.exports = ProductsApi
