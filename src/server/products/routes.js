const express = require('express')
const router = express.Router()
const productsRouteHandler = require('./productsRouteHanlder')

router.route('/productlist')
  .get(productsRouteHandler.read)

router.route('/addproduct')
  .post(productsRouteHandler.insert)

module.exports = router
