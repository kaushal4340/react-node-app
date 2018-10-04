
class ProductsApi {
  constructor () {
    this.products = [{
      productName: 'Galaxy S9',
      price: '45000',
      manufacturer: 'samsung'
    }, {
      productName: 'iphoneX',
      price: '100000',
      manufacturer: 'Apple'
    }]
  }

  fetch (callback) {
    callback(this.products)
  }

  insert (model, callback) {
    try {
      this.products.push(model)
      callback()
    } catch (err) {
      callback(err)
    }
  }
}

module.exports = ProductsApi
